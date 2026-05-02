import { supabase } from "./supabaseClient.js";

const BUSINESS_WA_NUMBER = "6282249634912";

const byId = (id) => document.getElementById(id);

const setStatus = (el, message, type = "info") => {
  if (!el) return;
  el.textContent = message;
  el.dataset.type = type;
  el.hidden = !message;
};

document.addEventListener("DOMContentLoaded", () => {
  const form = byId("orderForm");
  if (!form) return;

  const namaKlien = byId("nama_klien");
  const jenisLayanan = byId("jenis_layanan");
  const briefSingkat = byId("brief_singkat");
  const kontakWa = byId("kontak_wa");
  const submitBtn = byId("orderSubmitBtn");
  const statusEl = byId("orderStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const orderId =
      globalThis.crypto?.randomUUID?.() ?? `order_${Date.now().toString(36)}`;

    const payload = {
      id: orderId,
      nama_klien: (namaKlien?.value ?? "").trim(),
      jenis_layanan: (jenisLayanan?.value ?? "").trim(),
      brief_singkat: (briefSingkat?.value ?? "").trim(),
      kontak_wa: (kontakWa?.value ?? "").trim(),
    };

    if (!payload.nama_klien || !payload.jenis_layanan || !payload.kontak_wa) {
      setStatus(statusEl, "Mohon lengkapi Nama, Layanan, dan WhatsApp.", "error");
      return;
    }

    if (!payload.brief_singkat) payload.brief_singkat = null;

    submitBtn?.setAttribute("disabled", "disabled");
    setStatus(statusEl, "Mengirim order...", "loading");

    try {
      // Catatan:
      // Jangan pakai `.select().single()` setelah insert kalau RLS Anda hanya mengizinkan INSERT untuk anon
      // (tanpa policy SELECT untuk anon). Itu bisa membuat response kosong dan dianggap error.
      const { error } = await supabase.from("orders").insert(payload);

      if (error) throw error;

      setStatus(statusEl, "Berhasil! Mengarahkan ke WhatsApp...", "success");

      const message = [
        `Halo SwichUI, saya ${payload.nama_klien}.`,
        `Saya sudah submit order: ${payload.jenis_layanan}.`,
        payload.brief_singkat ? `Brief singkat: ${payload.brief_singkat}` : null,
        `Kontak WA saya: ${payload.kontak_wa}`,
        payload.id ? `Order ID: ${payload.id}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      const url = `https://wa.me/${BUSINESS_WA_NUMBER}?text=${encodeURIComponent(
        message
      )}`;

      window.location.assign(url);
    } catch (err) {
      console.error(err);
      setStatus(
        statusEl,
        "Gagal mengirim. Coba lagi, atau chat WhatsApp langsung.",
        "error"
      );
      submitBtn?.removeAttribute("disabled");
    }
  });
});
