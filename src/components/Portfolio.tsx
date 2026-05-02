"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Aplikasi Pengiriman Premium",
      category: "UI/UX",
      image: "/assets/portfolio-1.png",
      desc: "Tampilan modern & intuitif.",
    },
    {
      title: "Startup Identity",
      category: "Branding",
      image: "/assets/portfolio-2.png",
      desc: "Logo futuristik & profesional.",
    },
    {
      title: "Gourmet Burger",
      category: "Social Media",
      image: "/assets/portfolio-3.png",
      desc: "Poster makanan menggugah selera.",
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="section-pill">Portofolio</span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-semibold mb-8 leading-tight text-slate-900"
            >
              Karya <span className="gradient-text">Terbaik Kami</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-lg font-medium"
            >
              Hasil nyata transformasi brand yang membantu klien tampil lebih meyakinkan.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <a href="https://www.instagram.com/swichui/" target="_blank" className="cta-gradient text-white px-8 py-3.5 rounded-xl text-sm font-semibold shadow-lg btn-shadow transition-all inline-block">
               Cek Instagram →
             </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-blue-50 transition-all hover:shadow-premium duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-semibold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full border border-blue-100 shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-slate-500 font-medium text-sm">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
