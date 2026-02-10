import { motion } from "framer-motion";
import { Award, BookOpen, Users, MapPin, Phone, Mail } from "lucide-react";
import visitingCard from "@/assets/visiting-card-1.jpeg";

const features = [
  { icon: BookOpen, text: "वैदिक ज्योतिष विशेषज्ञ" },
  { icon: Users, text: "कुंडली मिलान एवं परामर्श" },
  { icon: Award, text: "वर्षों का अनुभव" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background kundali-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-hindi text-sm tracking-wider uppercase">हमारे बारे में</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            परिचय
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-xl">✦</span>
            <div className="h-px w-12 bg-primary" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* About paragraph */}
            <div className="mb-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">✦</span>
                पंडित जी का परिचय
              </h3>
              <p className="text-muted-foreground font-hindi leading-relaxed mb-6">
                पं. अजय कुमार त्रिपाठी एक अनुभवी वैदिक ज्योतिषाचार्य हैं, जो वर्षों से ज्योतिष के माध्यम 
                से लोगों के जीवन को सही दिशा देने का कार्य कर रहे हैं। वे कुंडली अध्ययन, भविष्यफल और 
                धार्मिक मार्गदर्शन के द्वारा जीवन की जटिल समस्याओं को सरल रूप में समझाकर समाधान 
                प्रदान करते हैं। उनकी कार्यशैली विश्वास, सत्यता और समर्पण पर आधारित है।
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">✦</span>
                अनुभव और विशेषज्ञता
              </h3>
              <p className="text-muted-foreground font-hindi leading-relaxed">
                पं. अजय कुमार त्रिपाठी को वैदिक ज्योतिष, कुंडली मिलान, ग्रह-दोष निवारण, पूजा-पाठ 
                मार्गदर्शन एवं वास्तु परामर्श में गहरा अनुभव प्राप्त है। उनकी सटीक गणना और 
                व्यावहारिक उपायों से अनेक लोगों को पारिवारिक, वैवाहिक, करियर और आर्थिक समस्याओं 
                में लाभ मिला है। वर्षों के अनुभव के साथ वे आज एक भरोसेमंद और सम्मानित ज्योतिषी 
                के रूप में पहचाने जाते हैं।
              </p>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2"
                >
                  <f.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-hindi text-foreground">{f.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Card & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Visiting Card Image */}
            <div className="rounded-xl overflow-hidden shadow-xl border-2 border-primary/20">
              <img
                src={visitingCard}
                alt="पं. अजय कुमार त्रिपाठी - विजिटिंग कार्ड"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Contact Info Card */}
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
                संपर्क जानकारी
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-primary mt-1 shrink-0" />
                  <div className="font-hindi text-sm">
                    <a href="tel:9415756722" className="text-foreground hover:text-primary transition-colors">
                      9415756722
                    </a>
                    ,{" "}
                    <a href="tel:7355516734" className="text-foreground hover:text-primary transition-colors">
                      7355516734
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-primary mt-1 shrink-0" />
                  <a
                    href="mailto:astroajay2002@gmail.com"
                    className="text-sm text-foreground hover:text-primary transition-colors font-hindi"
                  >
                    astroajay2002@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" />
                  <p className="text-sm text-muted-foreground font-hindi">
                    ई–1/345 (बुढ़ा पार्क ट्यूबवेल के सामने),
                    सेक्टर–जी, एल.डी.ए. कॉलोनी, कानपुर रोड, लखनऊ
                  </p>
                </div>
              </div>
            </div>

            {/* Required info card */}
            <div className="bg-secondary rounded-xl p-5 border border-primary/10">
              <p className="text-sm font-hindi text-foreground font-medium mb-2">
                कुण्डली हेतु आवश्यक जानकारी:
              </p>
              <p className="text-sm font-hindi text-muted-foreground">
                आपको बताना है — <span className="text-primary font-medium">नाम, जन्म दिनांक, 
                जन्म समय (सुबह/शाम) एवं स्थान (जिला)</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
