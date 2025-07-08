"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, ExternalLink } from "lucide-react";
import Image from "next/image";

const MusicSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const releases = [
    {
      title: "Born To Die",
      year: "2024",
      cover: "/api/placeholder/300/300",
      spotify: "https://open.spotify.com/track/2Ey4KW9BUslbeFdcIteMG9",
      youtube: "#",
      bgColor: "bg-red-100",
    },
    {
      title: "Sunday Morning Rewind",
      year: "2023",
      cover: "/api/placeholder/300/300",
      spotify: "https://open.spotify.com/track/1sHCfFTKm2UmIIogtmslUE",
      youtube: "https://www.youtube.com/watch?v=h6i_BGmUFJQ",
      featured: true,
      bgColor: "bg-yellow-100",
    },
    {
      title: "Sane",
      year: "2022",
      cover: "/api/placeholder/300/300",
      spotify: "https://open.spotify.com/track/5k1ACx7gQtA9dPJOetH9sP",
      youtube: "#",
      bgColor: "bg-purple-100",
    },
    {
      title: "Almond Chai",
      year: "2022",
      cover: "/api/placeholder/300/300",
      spotify: "https://open.spotify.com/track/1MbdbQxCRvZ1qqtqPvUjJP",
      youtube: "#",
      bgColor: "bg-orange-100",
    },
    {
      title: "Pluviophile Song",
      year: "2022",
      cover: "/api/placeholder/300/300",
      spotify: "https://open.spotify.com/track/1V4jC0vJ5525lEF1bFgPX2",
      youtube: "#",
      bgColor: "bg-blue-100",
    },
    {
      title: "Hey Dear Heidi",
      year: "2021",
      cover: "/api/placeholder/300/300",
      spotify: "https://open.spotify.com/track/1PcOIrzDua4tQqOsmNRxPW",
      youtube: "#",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <section id="music" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
            <span className="text-accent">DISCOGRAPHY</span>
          </h2>
          <p className="text-xl text-gray-600">6 Releases • Alternative Soul Rock</p>
          <p className="text-sm text-gray-500 mt-2">83 monthly listeners on Spotify</p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/h6i_BGmUFJQ"
                title="Michelle Limanjae - Sunday Morning Rewind"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-6 bg-gradient-to-r from-gray-900 to-black">
              <h3 className="text-2xl font-bold text-white mb-2">Sunday Morning Rewind</h3>
              <p className="text-gray-300">Official Music Video • 2023</p>
            </div>
          </div>
        </motion.div>

        {/* Releases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className={`aspect-square relative ${release.bgColor}`}>
                  {/* Placeholder design for album covers */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className="w-24 h-24 bg-white/50 rounded-full mb-4" />
                    <h4 className="text-xl font-bold text-gray-800 text-center">{release.title}</h4>
                    <p className="text-gray-600">{release.year}</p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                      <a
                        href={release.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-full p-3 hover:bg-accent transition-colors"
                        aria-label="Listen on Spotify"
                      >
                        <Play size={24} className="text-black" />
                      </a>
                      {release.youtube !== "#" && (
                        <a
                          href={release.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white rounded-full p-3 hover:bg-accent transition-colors"
                          aria-label="Watch on YouTube"
                        >
                          <ExternalLink size={24} className="text-black" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">{release.title}</h3>
                  <p className="text-gray-600">{release.year}</p>
                  {release.featured && (
                    <span className="inline-block mt-2 px-3 py-1 bg-accent text-black text-sm rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Streaming Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">Available on all streaming platforms</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://open.spotify.com/artist/5K55BGvBnx6VqKgrzKY5Hn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <Play size={20} />
              Spotify
            </a>
            <a
              href="https://www.youtube.com/@michellelimanjae"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <Play size={20} />
              YouTube Music
            </a>
            <a
              href="https://music.apple.com/artist/michelle-limanjae/1534833641"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <Play size={20} />
              Apple Music
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MusicSection; 