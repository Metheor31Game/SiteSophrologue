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
      <body className="bg-blanc-casse text-foreground font-chill">
        <nav className="bg-vert-clair p-4 shadow-md flex justify-between items-center">
          <div className="text-lg font-bold text-vert-fonce">Sophrologie</div>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-vert-fonce hover:text-marron-doux">
              Accueil
            </Link>
            <Link
              href="/sophrologie"
              className="text-vert-fonce hover:text-marron-doux"
            >
              La Sophrologie
            </Link>
            <Link
              href="/sophrologue"
              className="text-vert-fonce hover:text-marron-doux"
            >
              Qui suis-je
            </Link>
            <Link
              href="/contact"
              className="text-vert-fonce hover:text-marron-doux"
            >
              Contact
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-vert-clair p-4 space-y-4">
            <Link
              href="/"
              className="text-vert-fonce hover:text-marron-doux"
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/sophrologie"
              className="text-vert-fonce hover:text-marron-doux"
              onClick={() => setMenuOpen(false)}
            >
              La Sophrologie
            </Link>
            <Link
              href="/sophrologue"
              className="text-vert-fonce hover:text-marron-doux"
              onClick={() => setMenuOpen(false)}
            >
              Le Sophrologue
            </Link>
            <Link
              href="/contact"
              className="text-vert-fonce hover:text-marron-doux"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}

        <main className="p-6 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
