// app/layout.tsx
"use client";

import "./globals.css";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="fr">
      <body className="bg-amber-50 text-brown-900 font-chill">
        <nav className="bg-amber-100 p-4 shadow-md flex justify-between items-center">
          <div className="text-lg font-bold">Sophrologie</div>
          
          {/* Menu desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-amber-700">Accueil</Link>
            <Link href="/sophrologie" className="hover:text-amber-700">La Sophrologie</Link>
            <Link href="/sophrologue" className="hover:text-amber-700">Le Sophrologue</Link>
            <Link href="/contact" className="hover:text-amber-700">Contact</Link>
          </div>
          
          {/* Bouton menu mobile */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {/* Menu mobile */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-amber-100 p-4 space-y-4">
            <Link href="/" className="hover:text-amber-700" onClick={() => setMenuOpen(false)}>Accueil</Link>
            <Link href="/sophrologie" className="hover:text-amber-700" onClick={() => setMenuOpen(false)}>La Sophrologie</Link>
            <Link href="/sophrologue" className="hover:text-amber-700" onClick={() => setMenuOpen(false)}>Le Sophrologue</Link>
            <Link href="/contact" className="hover:text-amber-700" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        )}
        
        <main className="p-6 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}