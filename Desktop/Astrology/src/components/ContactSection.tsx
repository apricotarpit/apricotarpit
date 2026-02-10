import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-hindi text-sm tracking-wider">हमसे जुड़ें</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            संपर्क करें
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-xl">✦</span>
            <div className="h-px w-12 bg-primary" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Phone */}
            <Card className="border-border hover:border-primary/30 transition-colors bg-card">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">फ़ोन नंबर</h4>
                  <div className="space-y-1">
                    <a
                      href="tel:9415756722"
                      className="block text-muted-foreground hover:text-primary transition-colors font-hindi"
                    >
                      📞 9415756722
                    </a>
                    <a
                      href="tel:7355516734"
                      className="block text-muted-foreground hover:text-primary transition-colors font-hindi"
                    >
                      📞 7355516734
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-border hover:border-primary/30 transition-colors bg-card">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">ईमेल</h4>
                  <a
                    href="mailto:astroajay2002@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors font-hindi"
                  >
                    astroajay2002@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="border-border hover:border-primary/30 transition-colors bg-card">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">पता</h4>
                  <p className="text-muted-foreground font-hindi text-sm leading-relaxed">
                    ई–1/345 (बुढ़ा पार्क ट्यूबवेल के सामने),<br />
                    सेक्टर–जी, एल.डी.ए. कॉलोनी,<br />
                    कानपुर रोड, लखनऊ
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* WhatsApp & Consultation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* WhatsApp Card */}
            <Card className="border-primary/20 bg-accent/5">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-600/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  WhatsApp से सम्पर्क करें
                </h3>
                <p className="text-muted-foreground font-hindi text-sm mb-6">
                  कुण्डली के विषय में ऑनलाइन जानकारी प्राप्त करें।
                  WhatsApp पर अपनी जानकारी भेजें — नाम, जन्म दिनांक, जन्म समय एवं स्थान।
                </p>
                <a
                  href="https://wa.me/919415756722?text=नमस्कार%20पंडित%20जी,%20मुझे%20ज्योतिष%20परामर्श%20चाहिए।"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-primary-foreground font-hindi text-lg w-full"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp पर संदेश भेजें
                  </Button>
                </a>
                <p className="text-xs text-muted-foreground mt-3 font-hindi">
                  नंबर: 9415756722
                </p>
              </CardContent>
            </Card>

            {/* Consultation Fee */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6 text-center">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  परामर्श शुल्क
                </h4>
                <div className="text-4xl font-bold text-primary font-heading mb-2">₹1100</div>
                <p className="text-sm text-muted-foreground font-hindi">
                  सभी प्रकार की ज्योतिषीय सेवाओं हेतु
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
