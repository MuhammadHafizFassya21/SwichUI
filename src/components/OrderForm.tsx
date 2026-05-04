"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { Send } from "lucide-react";

const BUSINESS_WA_NUMBER = "6282249634912";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    nama_klien: "",
    nama_brand: "",
    jenis_layanan: "",
    deadline: "",
    kontak_wa: "",
    target_audiens: "",
    brief_singkat: "",
    referensi_desain: "",
    file_asset: "",
  });
  const [status, setStatus] = useState<{
    message: string;
    type: "info" | "success" | "error" | "loading" | null;
  }>({ message: "", type: null });
  
  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent;
      setFormData((prev) => ({ ...prev, jenis_layanan: customEvent.detail }));
    };

    window.addEventListener("select-service", handleSelectService);
    return () => window.removeEventListener("select-service", handleSelectService);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Filter untuk nomor WhatsApp agar hanya angka dan +
    if (name === "kontak_wa") {
      const filteredValue = value.replace(/[^0-9+]/g, "");
      setFormData({ ...formData, [name]: filteredValue });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nama_klien || !formData.jenis_layanan || !formData.kontak_wa) {
      setStatus({ message: "Mohon lengkapi data yang diperlukan.", type: "error" });
      return;
    }

    const orderId = globalThis.crypto?.randomUUID?.() ?? `order_${Date.now().toString(36)}`;

    const payload = {
      nama_klien: formData.nama_klien,
      nama_brand: formData.nama_brand,
      jenis_layanan: formData.jenis_layanan,
      deadline: formData.deadline,
      kontak_wa: formData.kontak_wa,
      target_audiens: formData.target_audiens,
      brief_singkat: formData.brief_singkat.trim() || null,
      referensi_desain: formData.referensi_desain,
      file_asset: formData.file_asset,
      status: "Pending",
    };

    setStatus({ message: "Memproses pesanan...", type: "loading" });

    try {
      const { error } = await supabase.from("orders").insert(payload);
      if (error) {
        console.error("Supabase error:", error);
        throw new Error(error.message || "Gagal menyimpan ke database");
      }

      setStatus({ message: "Sukses! Membuka WhatsApp...", type: "success" });

      const waMessage = [
        `*ORDER BARU - SwichUI*`,
        `---------------------------`,
        `*Nama Klien:* ${formData.nama_klien}`,
        `*Nama Brand:* ${formData.nama_brand || "-"}`,
        `*Layanan:* ${formData.jenis_layanan}`,
        `*Deadline:* ${formData.deadline || "-"}`,
        `*Target Audiens:* ${formData.target_audiens || "-"}`,
        `*WhatsApp:* ${formData.kontak_wa}`,
        `---------------------------`,
        `*Brief:* ${formData.brief_singkat || "-"}`,
        `*Referensi:* ${formData.referensi_desain || "-"}`,
        `*Asset:* ${formData.file_asset || "-"}`,
        `---------------------------`,
      ]
        .filter(Boolean)
        .join("\n");

      const url = `https://wa.me/${BUSINESS_WA_NUMBER}?text=${encodeURIComponent(waMessage)}`;
      setTimeout(() => {
         window.location.assign(url);
      }, 1000);
    } catch (err: any) {
      console.error("Submission error:", err);
      setStatus({
        message: err.message || "Maaf, terjadi kendala. Silakan coba lagi nanti.",
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
              className="text-3xl md:text-5xl font-bold mb-8 text-slate-900"
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
            className="bg-white border border-blue-50 p-6 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-premium"
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
                  <label className="text-sm font-semibold text-slate-700 ml-3 uppercase tracking-widest">Nama Brand/Usaha</label>
                  <input
                    name="nama_brand"
                    type="text"
                    placeholder="Contoh: Kopi Senja"
                    value={formData.nama_brand}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-blue-100 focus:border-primary focus:bg-white outline-none transition-all font-medium text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <option value="Logo Design">Logo Design</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Feed IG Single">Feed IG Single</option>
                    <option value="Carousel 3 Slide">Carousel 3 Slide</option>
                    <option value="Carousel 5 Slide">Carousel 5 Slide</option>
                    <option value="Poster Single">Poster Single</option>
                    <option value="Banner Design">Banner Design</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 ml-3 uppercase tracking-widest">Deadline</label>
                  <input
                    name="deadline"
                    type="text"
                    placeholder="Contoh: 3 Hari / 1 Minggu"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-blue-100 focus:border-primary focus:bg-white outline-none transition-all font-medium text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 ml-3 uppercase tracking-widest">WhatsApp</label>
                  <input
                    name="kontak_wa"
                    type="tel"
                    placeholder="Contoh: 082249634912"
                    required
                    minLength={10}
                    maxLength={15}
                    pattern="[0-9+]*"
                    title="Masukkan nomor WhatsApp yang valid (10-15 digit)"
                    value={formData.kontak_wa}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-blue-100 focus:border-primary focus:bg-white outline-none transition-all font-medium text-slate-900"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 ml-3 uppercase tracking-widest">Target Audiens</label>
                  <input
                    name="target_audiens"
                    type="text"
                    placeholder="Contoh: Remaja, Pekerja, dll"
                    value={formData.target_audiens}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-blue-100 focus:border-primary focus:bg-white outline-none transition-all font-medium text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-700 ml-3 uppercase tracking-widest">Brief/Kebutuhan Desain</label>
                <textarea
                  name="brief_singkat"
                  rows={4}
                  placeholder="Ceritakan detail kebutuhan desain Anda..."
                  value={formData.brief_singkat}
                  onChange={handleChange}
                  className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-blue-100 focus:border-primary focus:bg-white outline-none transition-all resize-none font-medium text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 ml-3 uppercase tracking-widest">Referensi Desain</label>
                  <input
                    name="referensi_desain"
                    type="text"
                    placeholder="Link (Pinterest/Behance) atau deskripsi"
                    value={formData.referensi_desain}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-blue-100 focus:border-primary focus:bg-white outline-none transition-all font-medium text-slate-900"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 ml-3 uppercase tracking-widest">File/Asset (Jika ada)</label>
                  <input
                    name="file_asset"
                    type="text"
                    placeholder="Link Google Drive/Dropbox"
                    value={formData.file_asset}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-blue-100 focus:border-primary focus:bg-white outline-none transition-all font-medium text-slate-900"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 pt-6">
                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="w-full sm:w-auto cta-gradient text-white px-8 md:px-14 py-4 md:py-5 rounded-2xl font-semibold shadow-xl btn-shadow transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
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
