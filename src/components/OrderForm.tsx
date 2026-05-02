"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { Send } from "lucide-react";

const BUSINESS_WA_NUMBER = "6282249634912";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    nama_klien: "",
    jenis_layanan: "",
    brief_singkat: "",
    kontak_wa: "",
  });
  const [status, setStatus] = useState<{
    message: string;
    type: "info" | "success" | "error" | "loading" | null;
  }>({ message: "", type: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nama_klien || !formData.jenis_layanan || !formData.kontak_wa) {
      setStatus({ message: "Mohon lengkapi data yang diperlukan.", type: "error" });
      return;
    }

    const orderId = globalThis.crypto?.randomUUID?.() ?? `order_${Date.now().toString(36)}`;

    const payload = {
      id: orderId,
      ...formData,
      brief_singkat: formData.brief_singkat.trim() || null,
    };

    setStatus({ message: "Memproses pesanan...", type: "loading" });

    try {
      const { error } = await supabase.from("orders").insert(payload);
      if (error) throw error;

      setStatus({ message: "Sukses! Membuka WhatsApp...", type: "success" });

      const waMessage = [
        `Halo SwichUI, saya ${payload.nama_klien}.`,
        `Saya ingin memesan layanan: ${payload.jenis_layanan}.`,
        payload.brief_singkat ? `Brief: ${payload.brief_singkat}` : null,
        `Kontak WA: ${payload.kontak_wa}`,
        `ID Pesanan: ${payload.id}`,
      ]
        .filter(Boolean)
        .join("\n");

      const url = `https://wa.me/${BUSINESS_WA_NUMBER}?text=${encodeURIComponent(waMessage)}`;
      setTimeout(() => {
         window.location.assign(url);
      }, 1000);
    } catch (err) {
      console.error(err);
      setStatus({
        message: "Maaf, terjadi kendala. Silakan coba lagi nanti.",
        type: "error",
      });
    }
  };

  return (
    <section id="order" className="section-padding bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="section-pill">Form Order</span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8 text-slate-900"
            >
              Mulai Proyek <span className="gradient-text">Sekarang</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-lg font-medium"
            >
              Lengkapi form di bawah, kami akan segera merespons melalui WhatsApp.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-blue-50 p-10 md:p-16 rounded-[4rem] shadow-premium"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 ml-3 uppercase tracking-widest">Nama Lengkap</label>
                  <input
                    name="nama_klien"
                    type="text"
                    placeholder="Masukkan nama Anda"
                    required
                    value={formData.nama_klien}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-blue-100 focus:border-primary focus:bg-white outline-none transition-all font-medium text-slate-900"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 ml-3 uppercase tracking-widest">Layanan</label>
                  <select
                    name="jenis_layanan"
                    required
                    value={formData.jenis_layanan}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-blue-100 focus:border-primary focus:bg-white outline-none transition-all appearance-none font-medium text-slate-900"
                  >
                    <option value="" disabled>Pilih kategori desain</option>
                    <option value="Logo & Branding">Logo & Branding</option>
                    <option value="Poster UMKM">Poster UMKM</option>
                    <option value="Social Media Design">Social Media Design</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-700 ml-3 uppercase tracking-widest">Brief Singkat</label>
                <textarea
                  name="brief_singkat"
                  rows={4}
                  placeholder="Ceritakan sedikit tentang brand atau kebutuhan desain Anda..."
                  value={formData.brief_singkat}
                  onChange={handleChange}
                  className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-blue-100 focus:border-primary focus:bg-white outline-none transition-all resize-none font-medium text-slate-900"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-700 ml-3 uppercase tracking-widest">WhatsApp</label>
                <input
                  name="kontak_wa"
                  type="tel"
                  placeholder="Contoh: 082249634912"
                  required
                  value={formData.kontak_wa}
                  onChange={handleChange}
                  className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-blue-100 focus:border-primary focus:bg-white outline-none transition-all font-medium text-slate-900"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="w-full sm:w-auto cta-gradient text-white px-14 py-5 rounded-2xl font-semibold shadow-xl btn-shadow transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                >
                  {status.type === "loading" ? "Mengirim..." : (
                    <>
                      <span>Kirim Sekarang</span>
                      <Send size={20} />
                    </>
                  )}
                </button>

                {status.message && (
                  <p className={`text-sm font-semibold ${status.type === "error" ? "text-red-500" : "text-green-600"}`}>
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
