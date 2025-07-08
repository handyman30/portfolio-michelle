"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
            <span className="text-accent">Introduction</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gray-200">
              {/* Temporary placeholder - replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400 text-lg">Add michelle-2.jpg to public/assets/</p>
              </div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-2xl font-bold mb-2">Michelle Limanjae</p>
                <p className="text-lg">Jakarta, Indonesia</p>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Michelle Limanjae is a Jakarta-based singer-songwriter and music producer combining
              90s to early 2000s alternative sound with multiple genres such as soul, rock, and
              melodically leaning to pop.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Her vocal delivery is mostly described as bold, melodic, sloppy and expressive to
              captivate audience. Previously residing in Melbourne, Australia for 10 years, she
              has 6 releases and gained recognition from Australian local radio stations such as
              FBI Radio & Triple R.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Moved back to Indonesia in 2023, she rapidly gained recognition in Jakarta's indie
              music scene, followed by an iconic "Sunday Morning Rewind" Music Video release and
              many local gigs that supported her to showcase her live performances.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 py-4 my-8">
              <p className="text-xl italic text-gray-800">
                "Michelle Limanjae is an Indonesian musician, singer-songwriter blending
                sweet-melancholic melodies with gritty guitar textures. Her music lies in the
                sweet spot between alternative pop, dream rock, and grunge — soft now,
                powerful, nostalgic. You may think early 2000s indie movie soundtracks with a
                storm brewing underneath."
              </p>
            </blockquote>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Alternative</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Soul</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Rock</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Pop</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Dream Rock</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Grunge</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 