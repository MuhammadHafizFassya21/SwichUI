import { supabase } from "./supabaseClient.js";

const byId = (id) => document.getElementById(id);

const normalizePhoneToWa = (raw) => {
  const digits = String(raw ?? "").replace(/[^\d]/g, "");
  if (!digits) return "";
  if (digits.startsWith("62")) return digits;
  if (digits.startsWith("0")) return `62${digits.slice(1)}`;
  return digits;
};

const formatTime = (iso) => {
  if (!iso) return "-";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleString("id-ID", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const setText = (el, text) => {
  if (!el) return;
  el.textContent = text;
};

const setHidden = (el, hidden) => {
  if (!el) return;
  el.hidden = !!hidden;
};

const STATUS_OPTIONS = ["Pending", "Progress", "Done"];

let ordersChannel = null;
let isFetching = false;
let pendingRefetch = false;

const renderOrders = (tbody, orders) => {
  if (!tbody) return;
  tbody.replaceChildren();

  for (const order of orders) {
    const tr = document.createElement("tr");

    const tdTime = document.createElement("td");
    tdTime.textContent = formatTime(order.created_at);

    const tdNama = document.createElement("td");
    tdNama.textContent = order.nama_klien ?? "-";

    const tdJenis = document.createElement("td");
    tdJenis.textContent = order.jenis_layanan ?? "-";

    const tdBrief = document.createElement("td");
    tdBrief.textContent = order.brief_singkat ?? "-";

    const tdWa = document.createElement("td");
    const waNumber = normalizePhoneToWa(order.kontak_wa);
    if (waNumber) {
      const a = document.createElement("a");
      a.href = `https://wa.me/${waNumber}`;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.className = "admin-wa-link";
      a.textContent = order.kontak_wa;
      tdWa.appendChild(a);
    } else {
      tdWa.textContent = order.kontak_wa ?? "-";
    }

    const tdStatus = document.createElement("td");
    const select = document.createElement("select");
    select.className = "admin-status";
    select.dataset.orderId = order.id;

    for (const opt of STATUS_OPTIONS) {
      const option = document.createElement("option");
      option.value = opt;
      option.textContent = opt;
      if ((order.status ?? "Pending") === opt) option.selected = true;
      select.appendChild(option);
    }
    tdStatus.appendChild(select);

    tr.append(tdTime, tdNama, tdJenis, tdBrief, tdWa, tdStatus);
    tbody.appendChild(tr);
  }
};

const fetchOrders = async ({ statusFilterValue, tbody, statusEl } = {}) => {
  if (isFetching) {
    pendingRefetch = true;
    return;
  }
  isFetching = true;
  pendingRefetch = false;

  try {
    setText(statusEl, "Memuat data...");

    let query = supabase
      .from("orders")
      .select("id,nama_klien,jenis_layanan,brief_singkat,kontak_wa,status,created_at")
      .order("created_at", { ascending: false });

    if (statusFilterValue && statusFilterValue !== "all") {
      query = query.eq("status", statusFilterValue);
    }

    const { data, error } = await query;
    if (error) throw error;

    renderOrders(tbody, data ?? []);
    setText(statusEl, `Total: ${(data ?? []).length} order`);
  } catch (err) {
    console.error(err);
    setText(statusEl, "Gagal memuat orders. Pastikan Anda sudah login.");
  } finally {
    isFetching = false;
    if (pendingRefetch) {
      fetchOrders({ statusFilterValue, tbody, statusEl });
    }
  }
};

const updateOrderStatus = async ({ orderId, nextStatus, statusEl }) => {
  try {
    setText(statusEl, "Menyimpan status...");

    const { error } = await supabase
      .from("orders")
      .update({ status: nextStatus })
      .eq("id", orderId);

    if (error) throw error;
    setText(statusEl, "Status tersimpan.");
  } catch (err) {
    console.error(err);
    setText(statusEl, "Gagal menyimpan status.");
  }
};

const subscribeOrders = ({ onChange }) => {
  if (ordersChannel) return;
  ordersChannel = supabase
    .channel("orders-admin-realtime")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "orders" },
      () => onChange?.()
    )
    .subscribe();
};

const unsubscribeOrders = async () => {
  if (!ordersChannel) return;
  await supabase.removeChannel(ordersChannel);
  ordersChannel = null;
};

const init = async () => {
  const loginWrap = byId("adminLoginWrap");
  const dashWrap = byId("adminDashboardWrap");
  const loginForm = byId("adminLoginForm");
  const emailInput = byId("adminEmail");
  const passwordInput = byId("adminPassword");
  const authStatus = byId("adminAuthStatus");
  const logoutBtn = byId("adminLogoutBtn");

  const tbody = byId("ordersTbody");
  const statusEl = byId("ordersStatus");
  const statusFilter = byId("statusFilter");

  const showLogin = () => {
    setHidden(loginWrap, false);
    setHidden(dashWrap, true);
    setHidden(logoutBtn, true);
    unsubscribeOrders();
  };

  const showDashboard = () => {
    setHidden(loginWrap, true);
    setHidden(dashWrap, false);
    setHidden(logoutBtn, false);
  };

  const refresh = () =>
    fetchOrders({
      statusFilterValue: statusFilter?.value ?? "all",
      tbody,
      statusEl,
    });

  const { data } = await supabase.auth.getSession();
  if (data?.session) {
    showDashboard();
    await refresh();
    subscribeOrders({ onChange: refresh });
  } else {
    showLogin();
  }

  supabase.auth.onAuthStateChange(async (_event, session) => {
    if (session) {
      showDashboard();
      await refresh();
      subscribeOrders({ onChange: refresh });
    } else {
      showLogin();
    }
  });

  loginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    setText(authStatus, "Login...");

    const email = (emailInput?.value ?? "").trim();
    const password = passwordInput?.value ?? "";

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error(error);
      setText(authStatus, "Login gagal. Cek email/password.");
      return;
    }

    setText(authStatus, "");
  });

  logoutBtn?.addEventListener("click", async () => {
    await supabase.auth.signOut();
  });

  statusFilter?.addEventListener("change", refresh);

  tbody?.addEventListener("change", async (e) => {
    const target = e.target;
    if (!(target instanceof HTMLSelectElement)) return;
    if (!target.classList.contains("admin-status")) return;

    const orderId = target.dataset.orderId;
    const nextStatus = target.value;
    if (!orderId) return;

    await updateOrderStatus({ orderId, nextStatus, statusEl });
  });
};

document.addEventListener("DOMContentLoaded", init);
