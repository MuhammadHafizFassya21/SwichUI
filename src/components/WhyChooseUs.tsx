"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, DollarSign, Users } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Modern & Kekinian",
      desc: "Desain yang relevan dengan tren pasar saat ini.",
      icon: <Sparkles size={24} />,
    },
    {
      title: "Proses Cepat",
      desc: "Tanpa drama, hasil langsung terasa manfaatnya.",
      icon: <Zap size={24} />,
    },
    {
      title: "Harga Terjangkau",
      desc: "Investasi desain yang sangat balik modal.",
      icon: <DollarSign size={24} />,
    },
    {
      title: "Fokus UMKM",
      desc: "Kami mengerti tantangan bisnis kecil.",
      icon: <Users size={24} />,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-slate-50 rounded-[4rem] p-6 md:p-20 shadow-sm border border-blue-50 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="section-pill mb-10">Kenapa Kami?</span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-16 leading-tight text-slate-900"
            >
              Partner Desain <br />
              <span className="gradient-text">Pilihan Brand Anda</span>
            </motion.h2>

            <div className="space-y-10">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-8"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white text-primary flex items-center justify-center shadow-sm border border-blue-100">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-slate-900">{reason.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="flex flex-col items-center justify-center text-center">
               <div className="relative z-10">
                  <span className="text-6xl md:text-9xl font-black mb-2 tracking-tighter gradient-text">100%</span>
                  <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-slate-500">Kepuasan Klien</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
