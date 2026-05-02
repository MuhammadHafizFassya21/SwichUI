"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Layanan", href: "#services" },
    { name: "Portofolio", href: "#portfolio" },
    { name: "Harga", href: "#pricing" },
    { name: "Proses", href: "#process" },
    { name: "Order", href: "#order" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-blue-100 py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-medium tracking-tighter uppercase text-slate-900">
          Swich<span className="text-primary">UI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#order"
            className="cta-gradient text-white px-7 py-2.5 rounded-xl text-sm font-medium shadow-lg btn-shadow transition-all hover:scale-105 active:scale-95"
          >
            Konsultasi Gratis
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-blue-100 transition-all duration-300 overflow-hidden shadow-xl ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-8 gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-900"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#order"
            className="cta-gradient text-white text-center py-4 rounded-2xl font-medium mt-2 shadow-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Konsultasi Gratis
          </Link>
        </nav>
      </div>
    </header>
  );
}
