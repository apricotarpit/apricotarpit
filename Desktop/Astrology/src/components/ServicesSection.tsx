import { motion } from "framer-motion";
import {
  Sun,
  Calendar,
  Heart,
  Shield,
  Zap,
  Globe,
  Clock,
  Gem,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Sun,
    title: "भविष्यफल",
    description: "ग्रहों की स्थिति के अनुसार आपके भविष्य का सटीक विश्लेषण और मार्गदर्शन।",
  },
  {
    icon: Calendar,
    title: "वर्षफल",
    description: "वार्षिक राशिफल और ग्रहों के प्रभाव का विस्तृत अध्ययन।",
  },
  {
    icon: Heart,
    title: "वर वधू मिलाप (पत्री मिलान)",
    description: "36 गुणों के आधार पर वर-वधू की कुंडली का सटीक मिलान।",
  },
  {
    icon: Shield,
    title: "मांगलिक दोष परिहार",
    description: "मांगलिक दोष की पहचान एवं उचित उपाय और निवारण।",
  },
  {
    icon: Zap,
    title: "नाड़ी दोष परिहार",
    description: "नाड़ी दोष का विश्लेषण और शास्त्रोक्त परिहार विधि।",
  },
  {
    icon: Globe,
    title: "ग्रहों की सही स्थिति",
    description: "जन्म कुंडली में ग्रहों की स्थिति और उनके प्रभाव का अध्ययन।",
  },
  {
    icon: Clock,
    title: "महादशा एवं अन्तर्दशा",
    description: "दशा-अन्तर्दशा का विश्लेषण और उनके प्रभावों का आकलन।",
  },
  {
    icon: Gem,
    title: "मुहूर्त, ग्रह रत्न एवं निवारण",
    description: "शुभ मुहूर्त, उपयुक्त रत्न चयन और ग्रह दोष निवारण।",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-hindi text-sm tracking-wider">क्या-क्या सेवाएं उपलब्ध हैं</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            हमारी सेवाएं
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-xl">✦</span>
            <div className="h-px w-12 bg-primary" />
          </div>

          {/* Fee Banner */}
          <div className="inline-block bg-accent text-accent-foreground rounded-full px-8 py-3 shadow-lg">
            <span className="font-hindi text-lg">
              परामर्श शुल्क — <span className="font-bold text-2xl">₹1100</span> मात्र
            </span>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2 text-lg">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-hindi leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
