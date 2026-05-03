"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Feed IG Single",
      price: "35K",
      features: ["1 Desain Feed IG", "Pilihan Ukuran Square/Portrait", "Format JPG/PNG", "1x Revisi"],
      featured: false,
      delay: 0.1,
    },
    {
      name: "Poster Single",
      price: "50K",
      features: ["1 Desain Poster", "Siap Cetak (CMYK/RGB)", "File High-Res", "2x Revisi"],
      featured: false,
      delay: 0.2,
    },
    {
      name: "Banner Design",
      price: "75K",
      features: ["2 Konsep Desain", "Siap Cetak (X-Banner/Y-Banner)", "File High-Res", "Revisi 2x"],
      featured: false,
      delay: 0.3,
    },
    {
      name: "Logo Design",
      price: "150K",
      features: ["2 Konsep Desain", "Master File (AI/EPS/PNG)", "Filosofi Logo", "Revisi 3x"],
      featured: true,
      delay: 0.4,
    },
    {
      name: "Carousel 3 Slide",
      price: "100K",
      features: ["3 Slide Feed IG", "Desain Berkelanjutan", "Format JPG/PNG", "2x Revisi"],
      featured: false,
      delay: 0.5,
    },
    {
      name: "Carousel 5 Slide",
      price: "150K",
      features: ["5 Slide Feed IG", "Desain Berkelanjutan", "Format JPG/PNG", "2x Revisi"],
      featured: false,
      delay: 0.6,
    },
    {
      name: "UI/UX Design",
      price: "450K",
      features: ["Mobile/Desktop Basic", "Interactive Prototype", "Aset Siap Developer", "Desain Modern"],
      featured: false,
      delay: 0.7,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <span className="section-pill">Paket Harga</span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-8 leading-tight text-slate-900"
          >
            Desain Profesional, Harga Tetap <span className="gradient-text">Terjangkau</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg font-medium"
          >
            Kualitas desain premium yang dirancang khusus untuk budget UMKM & Startup.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: plan.delay }}
              className={`relative p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] transition-all duration-500 flex flex-col group ${
                plan.featured
                  ? "cta-gradient text-white shadow-2xl shadow-blue-200 scale-[1.05] z-10"
                  : "bg-white border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-100"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg z-20">
                  Paling Populer
                </div>
              )}
              
              <div className="mb-8">
                <h4 className={`text-lg font-bold mb-1 transition-colors ${plan.featured ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h4>
                <div className="flex items-baseline gap-1">
                  <span className={`text-xs font-bold uppercase tracking-wider ${plan.featured ? "text-blue-100" : "text-slate-400"}`}>Mulai</span>
                  <div className="flex items-start">
                    <span className={`text-sm font-black mt-1 ${plan.featured ? "text-white" : "text-slate-900"}`}>Rp</span>
                    <span className={`text-3xl md:text-4xl font-black tracking-tight ${plan.featured ? "text-white" : "text-slate-900"}`}>
                      {plan.price}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-start gap-3 text-sm font-semibold leading-tight ${plan.featured ? "text-white" : "text-slate-600"}`}>
                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${plan.featured ? "bg-white/20 text-white" : "bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white"}`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/6282249634912"
                className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${
                  plan.featured
                    ? "bg-white text-primary shadow-lg hover:bg-blue-50 hover:scale-[1.02] active:scale-95"
                    : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-blue-100 active:scale-95"
                }`}
              >
                Pilih Paket
              </a>
            </motion.div>
          ))}
        </div>
        
        <p className="mt-16 text-center text-slate-400 text-sm font-bold italic">
          * Harga dapat disesuaikan dengan tingkat kesulitan dan kebutuhan proyek.
        </p>
      </div>
    </section>
  );
}
