"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      text: "Desain dari SwichUI bikin jualan burger saya terlihat seperti brand internasional. Customer jadi lebih percaya!",
      author: "Budi Santoso",
      role: "Owner, Burger Joy",
    },
    {
      text: "UI/UX yang dikerjakan sangat clean dan gampang dipahami user kami. Sangat puas dengan hasilnya!",
      author: "Lina Wijaya",
      role: "Founder, AgriTech App",
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <span className="section-pill">Testimoni</span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-6 text-slate-900"
          >
            Suara <span className="gradient-text">Klien Kami</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] relative shadow-sm border border-blue-50 group hover:bg-white hover:shadow-premium transition-all duration-500"
            >
              <div className="text-primary/10 absolute top-10 right-10 group-hover:text-primary/20 transition-colors">
                <Quote size={80} />
              </div>
              
              <div className="flex gap-1 mb-8">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                 ))}
              </div>

              <p className="text-xl font-bold text-slate-700 mb-10 italic leading-relaxed relative z-10">
                &quot;{review.text}&quot;
              </p>
              
              <div className="flex items-center gap-5 border-t border-blue-100 pt-8">
                <div className="w-14 h-14 rounded-2xl cta-gradient text-white flex items-center justify-center font-black text-xl shadow-md">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg">{review.author}</h4>
                  <p className="text-sm text-primary font-black uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
