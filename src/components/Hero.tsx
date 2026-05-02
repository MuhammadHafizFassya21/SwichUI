"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden main-gradient">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] -mr-64 -mt-32 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-100 rounded-full blur-[100px] -ml-48 -mb-24 opacity-60" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-xs font-semibold uppercase tracking-widest mb-8 border border-blue-100">
            <Sparkles size={14} />
            <span>Creative Design Agency</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-8 tracking-[-0.05em] text-slate-900 max-w-2xl">
            Desain Modern untuk <br />
            <span className="text-primary">UMKM & Brand Anda</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
            SwichUI membantu bisnis membangun tampilan visual yang lebih rapi, menarik, dan siap meningkatkan kepercayaan pelanggan.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="https://wa.me/6282249634912?text=Halo%20SwichUI,%20saya%20tertarik%20dengan%20jasa%20desain%20Anda"
              className="cta-gradient text-white px-10 py-4 rounded-2xl font-semibold text-center shadow-xl btn-shadow transition-all hover:scale-105 active:scale-95"
            >
              Konsultasi Gratis
            </a>
            <a
              href="#portfolio"
              className="bg-white border border-blue-100 text-slate-700 px-10 py-4 rounded-2xl font-semibold text-center transition-all hover:bg-blue-50 hover:border-blue-200 shadow-sm"
            >
              Lihat Portofolio
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 opacity-70">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <ShieldCheck size={16} className="text-primary" />
              <span>UI/UX Design</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <ShieldCheck size={16} className="text-primary" />
              <span>Logo & Branding</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <ShieldCheck size={16} className="text-primary" />
              <span>Fast Delivery</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white aspect-[4/3]">
            <Image
              src="/assets/swichui.png"
              alt="SwichUI Design Mockup"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
