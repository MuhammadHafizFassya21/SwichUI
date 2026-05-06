"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { revealIn } from "@/lib/motion";

export default function Comparison() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <span className="section-pill">Real Results</span>
          <motion.h3 {...revealIn("up")} className="text-3xl md:text-4xl font-black mb-6 leading-tight text-slate-900">
            Transformasi <span className="gradient-text">Brand Visual</span>
          </motion.h3>
          <p className="text-slate-500 font-medium text-lg">
            Lihat bagaimana kami merubah tampilan brand yang kaku menjadi modern dan elegan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Before */}
          <motion.div {...revealIn("left")} className="relative group">
            <div className="absolute top-6 left-6 z-20 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">
              Sebelum
            </div>
            <div className="relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 border-slate-100 bg-white shadow-sm">
              <div className="relative h-full w-full bg-slate-50 p-3 md:p-4">
                <Image
                  src="/assets/comparison-before-barbershop.png"
                  alt="Desain Sebelum"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Kurang Profesional & Jadul</p>
            </div>
          </motion.div>

          {/* After */}
          <motion.div {...revealIn("right", 0.08)} className="relative group">
            <div className="absolute top-6 left-6 z-20 cta-gradient text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">
              Sesudah
            </div>
            <div className="relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden border-8 border-blue-50 bg-white shadow-premium">
              <div className="relative h-full w-full bg-white p-3 md:p-4">
                <Image
                  src="/assets/comparison-after-barbershop.png"
                  alt="Desain Sesudah"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-transform group-hover:scale-105 duration-700"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-primary font-bold text-sm uppercase tracking-widest">Modern, Bersih & Melejit</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
