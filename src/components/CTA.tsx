"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="cta-gradient rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl btn-shadow"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full -mr-32 -mb-32 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
              Siap Bertransformasi <br />
              <span className="text-white/80 text-3xl md:text-5xl">Secara Visual?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-14 font-medium">
              Jangan biarkan desain yang kurang menarik menghambat potensi bisnis Anda. Konsultasikan kebutuhan desain Anda secara GRATIS sekarang juga!
            </p>
            <a
              href="https://wa.me/6282249634912?text=Halo%20SwichUI,%20saya%20tertarik%20dengan%20jasa%20desain%20Anda"
              className="inline-flex items-center gap-4 bg-white text-primary hover:bg-blue-50 px-12 py-5 rounded-2xl font-black text-xl transition-all hover:scale-105 shadow-xl"
            >
              <MessageSquare size={24} />
              <span>Chat via WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
