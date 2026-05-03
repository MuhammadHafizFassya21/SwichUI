"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle2 } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Konsultasi",
      desc: "Diskusi via WhatsApp untuk memahami visi dan target audiens Anda secara detail.",
    },
    {
      num: "02",
      title: "Brief & Desain",
      desc: "Kami menyusun brief dan memulai proses kreatif dengan standar kualitas tinggi.",
    },
    {
      num: "03",
      title: "Revisi & Final",
      desc: "Proses penyempurnaan hingga hasil benar-benar memuaskan dan siap kirim.",
    },
  ];

  return (
    <section id="process" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-blue-200 opacity-30 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <span className="section-pill">Cara Kerja</span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-8 leading-tight text-slate-900"
          >
            Proses Kerja <span className="gradient-text">Rapi & Cepat</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg font-medium"
          >
            Langkah mudah untuk mendapatkan hasil desain yang profesional dan berdampak.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center relative group"
            >
              <div className="w-24 h-24 rounded-3xl bg-white border border-blue-100 flex items-center justify-center text-3xl font-black mx-auto mb-10 shadow-sm group-hover:border-primary group-hover:text-primary transition-all duration-500 relative z-10">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold mb-5 text-slate-900">{step.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {step.desc}
              </p>
              
              {/* Connector icon for desktop */}
              {index < 2 && (
                 <div className="hidden md:block absolute top-12 left-full -translate-x-1/2 z-20 text-blue-200">
                    <CheckCircle2 size={24} />
                 </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 bg-white border border-blue-50 w-fit mx-auto px-6 py-4 md:px-10 md:py-5 rounded-3xl shadow-sm text-center"
        >
          <Clock className="text-primary" size={24} />
          <span className="text-sm font-black uppercase tracking-widest text-slate-400">
            Estimasi Pengerjaan: <span className="text-slate-900">2-5 Hari Kerja</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
