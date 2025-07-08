"use client";

import { Instagram, Youtube, Music } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo/Name */}
          <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
            Michelle Limanjae
          </h3>

          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            <a
              href="https://www.instagram.com/michellelimanjae"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-black transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@michellelimanjae"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-black transition-all duration-200"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://open.spotify.com/artist/0wT6VYTDxvlMKaRuNUs1M3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-black transition-all duration-200"
              aria-label="Spotify"
            >
              <Music size={24} />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-8 mb-8 text-sm">
            <a href="#home" className="hover:text-accent transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#music" className="hover:text-accent transition-colors">
              Music
            </a>
            <a href="#booking" className="hover:text-accent transition-colors">
              Book Me
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {currentYear} Michelle Limanjae. All rights reserved.</p>
            <p className="mt-2">Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 