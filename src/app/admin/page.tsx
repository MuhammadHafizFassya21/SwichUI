"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { LogOut, Filter, ExternalLink, Clock } from "lucide-react";

type Order = {
  id: string;
  nama_klien: string;
  jenis_layanan: string;
  brief_singkat: string | null;
  kontak_wa: string;
  status: string;
  created_at: string;
};

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [authForm, setAuthForm] = useState({ email: "", password: "" });
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      fetchOrders();
      
      const channel = supabase
        .channel("admin-orders")
        .on("postgres_changes", { event: "*", schema: "public", table: "orders" }, () => {
          fetchOrders();
        })
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [session, statusFilter]);

  const fetchOrders = async () => {
    let query = supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (statusFilter !== "all") {
      query = query.eq("status", statusFilter);
    }

    const { data, error } = await query;
    if (error) {
      console.error(error);
    } else {
      setOrders(data || []);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    const { error } = await supabase.auth.signInWithPassword(authForm);
    if (error) setAuthError("Login gagal. Cek email/password.");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const updateStatus = async (id: string, nextStatus: string) => {
    const { error } = await supabase
      .from("orders")
      .update({ status: nextStatus })
      .eq("id", id);
    
    if (error) console.error(error);
  };

  const formatTime = (iso: string) => {
    return new Date(iso).toLocaleString("id-ID", {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );

  if (!session) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[2rem] p-10 shadow-premium border border-slate-200 dark:border-slate-800">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-black uppercase tracking-tighter mb-4 inline-block">
            Swich<span className="text-primary">UI</span> Admin
          </Link>
          <p className="text-slate-500">Silakan login untuk akses dashboard.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-2">Email</label>
            <input
              type="email"
              required
              value={authForm.email}
              onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-2">Password</label>
            <input
              type="password"
              required
              value={authForm.password}
              onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary outline-none"
            />
          </div>
          {authError && <p className="text-red-500 text-sm font-bold text-center">{authError}</p>}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-2xl font-bold shadow-premium transition-all"
          >
            Login Admin
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Admin Navbar */}
      <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4 sticky top-0 z-40">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-black uppercase tracking-tighter">
            Swich<span className="text-primary">UI</span> Admin
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 px-4 py-2 rounded-xl transition-all"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
          <div>
            <h1 className="text-3xl font-black mb-2 tracking-tight">Orders Dashboard</h1>
            <p className="text-slate-500 font-medium">Kelola pesanan klien secara real-time.</p>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-slate-400 px-3">
              <Filter size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">Filter</span>
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-transparent border-none outline-none text-sm font-bold pr-8"
            >
              <option value="all">Semua Status</option>
              <option value="Pending">Pending</option>
              <option value="Progress">Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-premium border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500">Waktu</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500">Klien</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500">Layanan</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500">Brief</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500">Kontak</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Clock size={14} />
                        <span className="text-xs font-bold">{formatTime(order.created_at)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-900 dark:text-white">{order.nama_klien}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-1">{order.id}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                        {order.jenis_layanan}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-slate-500 line-clamp-2 max-w-xs">{order.brief_singkat || "-"}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a
                        href={`https://wa.me/${order.kontak_wa.replace(/[^\d]/g, "")}`}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                      >
                        {order.kontak_wa}
                        <ExternalLink size={14} />
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={order.status || "Pending"}
                        onChange={(e) => updateStatus(order.id, e.target.value)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-xl border-none outline-none appearance-none cursor-pointer ${
                          order.status === "Done" 
                            ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400" 
                            : order.status === "Progress"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400"
                            : "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400"
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Progress">Progress</option>
                        <option value="Done">Done</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {orders.length === 0 && (
            <div className="p-20 text-center">
              <p className="text-slate-400 font-medium italic">Tidak ada order ditemukan.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
