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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-8 tracking-[-0.05em] text-slate-900 max-w-5xl mx-auto">
            Desain Modern untuk <span className="text-primary">UMKM & Brand Anda</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            SwichUI membantu bisnis membangun tampilan visual yang lebih rapi, menarik, dan siap meningkatkan kepercayaan pelanggan.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 opacity-70">
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
      </div>
    </section>
  );
}
