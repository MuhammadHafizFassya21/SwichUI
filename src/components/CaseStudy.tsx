"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function CaseStudy() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-premium border border-blue-50"
        >
          {/* Subtle background element */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50" />
          
          <div className="flex flex-col md:flex-row gap-16 items-center relative z-10">
            <div className="md:w-1/3">
              <div className="w-20 h-20 rounded-[2rem] cta-gradient text-white flex items-center justify-center mb-10 shadow-lg btn-shadow">
                <Lightbulb size={36} />
              </div>
              <h3 className="text-4xl font-black mb-6 leading-tight text-slate-900">
                Case Study: <br />
                <span className="text-primary">Kedai Kopi X</span>
              </h3>
              <p className="text-slate-500 font-bold italic text-sm">
                "Meningkatkan engagement pelanggan dengan identitas visual estetik."
              </p>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-blue-50">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">Problem</div>
                <p className="text-sm font-bold text-slate-600 leading-relaxed">
                  Tampilan media sosial kaku dan kurang menarik minat pelanggan muda.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">Solution</div>
                <p className="text-sm font-bold text-slate-600 leading-relaxed">
                  Redesign identitas visual dengan gaya minimalis & estetik.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-slate-50 border border-blue-50">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">Result</div>
                <p className="text-sm font-bold text-slate-600 leading-relaxed">
                  Engagement naik 40% dan brand terlihat jauh lebih premium.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
