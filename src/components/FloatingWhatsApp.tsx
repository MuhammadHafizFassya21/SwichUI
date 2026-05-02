"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      href="https://wa.me/6282249634912?text=Halo%20SwichUI,%20saya%20tertarik%20dengan%20jasa%20desain%20Anda"
      target="_blank"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-2xl shadow-2xl hover:scale-110 transition-transform flex items-center gap-3 group"
    >
      <div className="absolute right-full mr-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl border border-slate-100 dark:border-slate-800 pointer-events-none">
        Tanya Desain?
      </div>
      <MessageCircle size={28} />
    </motion.a>
  );
}
