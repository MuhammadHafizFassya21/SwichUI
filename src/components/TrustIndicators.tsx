"use client";

import { motion } from "framer-motion";

export default function TrustIndicators() {
  const stats = [
    { number: "100+", label: "Desain Selesai" },
    { number: "50+", label: "UMKM Dibantu" },
    { number: "95%", label: "Klien Puas" },
  ];

  return (
    <section className="bg-primary py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 text-white">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter">
                {stat.number}
              </div>
              <div className="text-[10px] md:text-xs font-medium opacity-70 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
