"use client";

import { motion } from "framer-motion";

export default function TrustIndicators() {
  const stats = [
    { number: "100+", label: "Desain Selesai" },
    { number: "50+", label: "UMKM Dibantu" },
    { number: "95%", label: "Klien Puas" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-blue-50/50 rounded-[3rem] p-10 md:p-14 border border-blue-100 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center md:border-r last:border-0 border-blue-200/50"
              >
                <div className="text-5xl font-black text-primary mb-3 tracking-tighter">
                  {stat.number}
                </div>
                <div className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
