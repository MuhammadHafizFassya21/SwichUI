import Link from "next/link";
import { Send } from "lucide-react";

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 md:pt-24 pb-10 md:pb-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 mb-16 md:mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-semibold uppercase tracking-tighter mb-8 block">
              Swich<span className="text-primary">UI</span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-10 font-medium">
              Creative agency yang berdedikasi membantu UMKM dan Startup naik kelas melalui desain visual yang estetik, profesional, dan berdaya jual tinggi.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/swichui/" target="_blank" className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/6282249634912" target="_blank" className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-8 uppercase tracking-widest text-slate-500">Layanan</h4>
            <ul className="space-y-5">
              <li><Link href="#services" className="text-slate-400 hover:text-white transition-colors font-medium">UI/UX Design</Link></li>
              <li><Link href="#services" className="text-slate-400 hover:text-white transition-colors font-medium">Logo & Branding</Link></li>
              <li><Link href="#services" className="text-slate-400 hover:text-white transition-colors font-medium">Social Media Design</Link></li>
              <li><Link href="#services" className="text-slate-400 hover:text-white transition-colors font-medium">Poster UMKM</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-8 uppercase tracking-widest text-slate-500">Kontak</h4>
            <ul className="space-y-5">
              <li className="text-slate-400 font-medium">
                <span className="block text-xs uppercase text-slate-600 mb-1">Email</span>
                <a href="mailto:swichui.official@gmail.com" className="hover:text-white transition-colors">
                  swichui.official@gmail.com
                </a>
              </li>
              <li className="text-slate-400 font-bold">
                <span className="block text-xs uppercase text-slate-600 mb-1">WhatsApp</span>
                <a href="https://wa.me/6282249634912" target="_blank" className="hover:text-white transition-colors">
                  0822 4963 4912
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} SwichUI. All rights reserved. Creative Design Partner for Growing Brands.
          </p>
        </div>
      </div>
    </footer>
  );
}
