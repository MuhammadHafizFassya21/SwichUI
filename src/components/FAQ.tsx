"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apa itu SwichUI?",
    answer: "SwichUI adalah jasa desain kreatif yang fokus membantu UMKM dan brand meningkatkan kualitas visual mereka. Kami menyediakan layanan desain UI/UX, Logo, Branding, serta materi promosi lainnya dengan sentuhan modern dan profesional."
  },
  {
    question: "Jasa apa saja yang ditawarkan?",
    answer: "Layanan utama kami meliputi Desain UI/UX (Landing Page & Mobile App), Desain Logo & Branding Identity, serta Desain Media Sosial & Marketing Kit (Poster, Banner, Feed Instagram)."
  },
  {
    question: "Berapa lama proses pengerjaannya?",
    answer: "Waktu pengerjaan bervariasi tergantung paket yang dipilih. Umumnya paket Kilat memakan waktu 1-3 hari kerja, sedangkan paket Lengkap atau Custom bisa memakan waktu 5-10 hari kerja."
  },
  {
    question: "Bagaimana cara melakukan pemesanan?",
    answer: "Anda bisa memesan langsung melalui tombol 'Order' di website ini atau menghubungi kami via WhatsApp untuk konsultasi gratis terlebih dahulu. Setelah deal, kami akan mengirimkan invoice dan memulai pengerjaan."
  },
  {
    question: "Apakah saya bisa melakukan revisi?",
    answer: "Tentu! Setiap paket desain kami sudah termasuk kuota revisi. Kami ingin memastikan Anda puas dengan hasil akhir desain yang kami berikan."
  },
  {
    question: "File apa saja yang akan saya dapatkan?",
    answer: "Anda akan mendapatkan file master (Figma/Source File), file gambar resolusi tinggi (PNG/JPG), serta file vektor (PDF/SVG) sesuai dengan paket yang Anda pilih."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="section-pill">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Pertanyaan yang Sering <span className="gradient-text">Diajukan</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            Temukan jawaban untuk pertanyaan umum tentang layanan dan proses kerja kami.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-slate-800 pr-8 leading-tight">
                  {faq.question}
                </span>
                <span className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  <ChevronDown className="text-primary" size={24} />
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
