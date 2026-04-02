/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Star, Heart, Share2, Music, Volume2, VolumeX, Upload, Image as ImageIcon, RotateCcw } from 'lucide-react';

// Recipe 7: Atmospheric / Immersive Media inspiration
// Recipe 6: Warm Organic / Cultural inspiration

export default function App() {
  const [isMuted, setIsMuted] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [bgImage, setBgImage] = useState("https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?auto=format&fit=crop&q=80&w=1920");
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  // Festive instrumental background music
  const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Placeholder festive-like track

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      if (!isMuted) {
        audioRef.current.play().catch(err => console.log("Autoplay blocked or failed:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBgImage(imageUrl);
    }
  };

  const resetBackground = () => {
    setBgImage("https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?auto=format&fit=crop&q=80&w=1920");
  };

  return (
    <div className="min-h-screen bg-[#0a0502] text-[#f5f2ed] font-serif selection:bg-[#ff4e00]/30 overflow-hidden relative">
      
      {/* Audio Element */}
      <audio ref={audioRef} src={audioUrl} loop />
      
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <motion.img 
          key={bgImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          src={bgImage} 
          alt="Lebaran Background" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0502]/60 via-transparent to-[#0a0502]" />
        
        {/* Atmospheric Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff4e00]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5A5A40]/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Floating Elements (Stars/Particles) */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: Math.random() * 100 }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              y: [0, -20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3 + Math.random() * 4, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Star size={Math.random() * 8 + 4} className="text-yellow-200 fill-yellow-200/30" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">
        
        {/* Top Decoration */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 text-[#d4af37]">
            <div className="h-[1px] w-12 bg-current opacity-50" />
            <Moon className="fill-current" size={32} />
            <div className="h-[1px] w-12 bg-current opacity-50" />
          </div>
        </motion.div>

        {/* Hero Text */}
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.1em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-4 font-sans font-semibold"
          >
            Taqabbalallahu Minna Wa Minkum
          </motion.h2>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "circOut" }}
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          >
            Selamat Hari Raya <br />
            <span className="italic font-light text-[#f5f2ed]/90">Idul Fitri 1447 H</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-lg md:text-xl text-[#f5f2ed]/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Di hari yang fitri ini, mari kita bersihkan hati, tautkan kembali silaturahmi, 
            dan rayakan kemenangan dengan penuh syukur bersama keluarga tercinta.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <button 
            onClick={() => setShowMessage(true)}
            className="px-10 py-4 bg-[#d4af37] text-[#0a0502] rounded-full font-sans font-bold tracking-wider hover:bg-[#f5f2ed] transition-all duration-500 shadow-xl shadow-[#d4af37]/20 group overflow-hidden relative"
          >
            <span className="relative z-10">Buka Pesan Hangat</span>
            <motion.div 
              className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            />
          </button>
          
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="px-10 py-4 border border-[#d4af37]/50 rounded-full font-sans font-semibold hover:bg-[#d4af37]/10 transition-all duration-500 flex items-center gap-2 text-[#d4af37]"
          >
            <Upload size={18} />
            <span>Ganti Foto Keluarga</span>
          </button>

          {bgImage !== "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?auto=format&fit=crop&q=80&w=1920" && (
            <button 
              onClick={resetBackground}
              className="px-6 py-4 border border-[#f5f2ed]/20 rounded-full font-sans font-semibold hover:bg-[#f5f2ed]/10 transition-all duration-500 flex items-center gap-2 text-[#f5f2ed]/60"
              title="Reset Background"
            >
              <RotateCcw size={18} />
            </button>
          )}
        </motion.div>

        {/* Footer Micro-details */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-sans"
        >
          <span>Mohon Maaf Lahir & Batin</span>
          <div className="w-1 h-1 bg-[#d4af37] rounded-full" />
          <span>Keluarga Besar Kami</span>
        </motion.div>
      </main>

      {/* Floating Audio Control */}
      <motion.button
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 3 }}
        onClick={() => setIsMuted(!isMuted)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-[#0a0502]/50 backdrop-blur-md border border-[#f5f2ed]/10 rounded-full hover:bg-[#d4af37] hover:text-[#0a0502] transition-all duration-300"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </motion.button>

      {/* Message Modal */}
      <AnimatePresence>
        {showMessage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0a0502]/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#1a1512] border border-[#d4af37]/30 p-8 md:p-12 rounded-[2rem] max-w-lg w-full relative overflow-hidden"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-bl-full" />
              
              <button 
                onClick={() => setShowMessage(false)}
                className="absolute top-6 right-6 text-[#f5f2ed]/40 hover:text-[#f5f2ed]"
              >
                Tutup
              </button>

              <div className="text-center">
                <Heart className="mx-auto mb-6 text-[#d4af37] fill-[#d4af37]/20" size={48} />
                <h3 className="text-3xl font-bold mb-6">Untaian Doa</h3>
                <p className="text-[#f5f2ed]/80 leading-relaxed mb-8 italic">
                  "Semoga Allah menerima amal ibadah kita semua, mengampuni segala khilaf, 
                  dan mempertemukan kita kembali dengan Ramadhan berikutnya dalam keadaan 
                  sehat dan penuh keberkahan. Mari kita jadikan momen ini untuk saling 
                  memaafkan dan menebar kasih sayang."
                </p>
                <div className="h-[1px] w-24 bg-[#d4af37]/30 mx-auto mb-8" />
                <p className="font-sans text-sm tracking-widest uppercase text-[#d4af37]">
                  Salam Hangat, <br />
                  <span className="text-lg mt-2 block normal-case font-serif italic text-[#f5f2ed]">Sutriaman & Keluarga</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Styles for extra polish */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;600&display=swap');
        
        body {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
      `}} />
    </div>
  );
}
