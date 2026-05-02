"use client";

import { motion } from "framer-motion";
import { Layout, Palette, Share2, Utensils } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      desc: "Desain aplikasi dan website yang intuitif untuk pengalaman pengguna yang maksimal.",
      icon: <Layout size={28} />,
      delay: 0.1,
    },
    {
      title: "Logo & Branding",
      desc: "Identitas unik yang membangun kepercayaan dan daya tarik brand Anda di mata klien.",
      icon: <Palette size={28} />,
      delay: 0.2,
    },
    {
      title: "Social Media Design",
      desc: "Konten visual Instagram & TikTok yang estetik untuk meningkatkan engagement audiens.",
      icon: <Share2 size={28} />,
      delay: 0.3,
    },
    {
      title: "Poster Makanan UMKM",
      desc: "Fotografi & desain poster yang membuat menu makanan Anda terlihat jauh lebih lezat.",
      icon: <Utensils size={28} />,
      delay: 0.4,
    },
  ];

  return (
    <section id="services" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <span className="section-pill">Layanan Kami</span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-8 leading-tight text-slate-900"
          >
            Solusi Desain <span className="gradient-text">Profesional</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg font-medium"
          >
            Kami fokus pada pertumbuhan bisnis Anda melalui identitas visual yang meyakinkan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay }}
              className="group p-10 rounded-[2.5rem] bg-white border border-blue-50 shadow-sm hover:border-primary/20 hover:shadow-premium transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-8 group-hover:cta-gradient group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
