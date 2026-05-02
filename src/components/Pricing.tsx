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
      features: ["2 Konsep Desain", "Master File (AI/EPS/PNG)", "Filosofi Logo", "Revisi Sepuasnya"],
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
            className="text-4xl md:text-5xl font-black mb-8 leading-tight text-slate-900"
          >
            Investasi Desain <span className="gradient-text">Terjangkau</span>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: plan.delay }}
              className={`relative p-12 rounded-[3rem] transition-all duration-300 flex flex-col ${
                plan.featured
                  ? "bg-blue-50 border-2 border-primary shadow-premium scale-105 z-10"
                  : "bg-slate-50 border border-blue-100 hover:border-blue-200 hover:-translate-y-2"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 cta-gradient text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">
                  Paling Populer
                </div>
              )}
              <h4 className="text-xl font-black mb-2 text-slate-900">
                {plan.name}
              </h4>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-sm font-bold text-slate-400">Mulai</span>
                <span className={`text-5xl font-black ${plan.featured ? "text-primary" : "text-slate-900"}`}>
                  Rp{plan.price}
                </span>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-sm font-bold text-slate-600">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${plan.featured ? "bg-primary text-white" : "bg-blue-100 text-primary"}`}>
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/6282249634912"
                className={`block w-full py-5 rounded-2xl font-black text-center transition-all shadow-md ${
                  plan.featured
                    ? "cta-gradient text-white hover:scale-[1.02] btn-shadow"
                    : "bg-white text-primary border border-blue-100 hover:bg-blue-50"
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
