import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ownerPhoto from "@/assets/owner-photo.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-maroon pt-24"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 kundali-pattern opacity-30" />
      
      {/* Floating symbols */}
      <div className="absolute top-32 left-10 text-saffron-glow/20 text-3xl font-heading animate-float">श्री राम</div>
      <div className="absolute bottom-20 right-10 text-saffron-glow/15 text-4xl font-heading animate-float" style={{ animationDelay: "1s" }}>श्री राम</div>
      <div className="absolute top-40 right-20 text-gold/10 text-5xl font-heading animate-spin-slow">☸</div>
      <div className="absolute bottom-40 left-20 text-saffron-glow/10 text-4xl animate-glow">✦</div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center lg:text-left"
          >
            {/* Top decorative line */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-saffron-glow" />
              <Star className="h-4 w-4 text-saffron-glow animate-glow" />
              <span className="text-saffron-glow text-sm font-hindi tracking-wider">|| श्री राम ||</span>
              <Star className="h-4 w-4 text-saffron-glow animate-glow" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-saffron-glow" />
            </div>

            {/* Main heading */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl text-saffron-glow font-heading mb-4 drop-shadow-lg"
            >
              श्री राम
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 leading-tight"
            >
              ज्योतिष अनुसंधान संस्थान
            </motion.h1>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-saffron-light font-heading mb-2">
                पं. अजय कुमार त्रिपाठी
              </p>
              <p className="text-saffron-glow/80 text-lg font-hindi mb-2">
                (ज्योतिषी)
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-primary-foreground/70 text-base md:text-lg font-hindi max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              वैदिक ज्योतिष के माध्यम से जीवन की सही दिशा — कुंडली विश्लेषण, भविष्यफल, 
              ग्रह-दोष निवारण एवं धार्मिक मार्गदर्शन
            </motion.p>

            {/* Fee badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="inline-block mb-8"
            >
              <div className="bg-primary/20 border border-saffron-glow/30 rounded-full px-6 py-2 backdrop-blur-sm">
                <span className="text-saffron-glow font-hindi text-lg">
                  परामर्श शुल्क — <span className="font-bold text-xl">₹1100</span> मात्र
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a href="tel:9415756722">
                <Button size="lg" className="bg-primary hover:bg-saffron-light text-primary-foreground font-hindi text-lg px-8 shadow-lg">
                  <Phone className="h-5 w-5" />
                  अभी संपर्क करें
                </Button>
              </a>
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 border border-saffron-glow/40 text-saffron-glow rounded-md hover:bg-saffron-glow/10 transition-colors font-hindi text-lg"
              >
                हमारी सेवाएं देखें
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Owner Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-saffron-glow/40 shadow-2xl relative">
              <img
                src={ownerPhoto}
                alt="पं. अजय कुमार त्रिपाठी"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-saffron-glow/20 scale-110 animate-pulse" />
            {/* Name badge below photo */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary/80 backdrop-blur-sm rounded-full px-5 py-1.5 border border-saffron-glow/30">
              <span className="text-saffron-glow font-hindi text-sm whitespace-nowrap">पं. अजय कुमार त्रिपाठी</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H0Z"
            fill="hsl(42, 60%, 96%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
