import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const educationYogas = [
  {
    title: "बुध-गुरु योग",
    description: "बुध और गुरु की युति या परस्पर दृष्टि होने पर जातक अत्यंत बुद्धिमान एवं विद्वान होता है। ऐसा जातक शास्त्रों में पारंगत होता है।",
  },
  {
    title: "सरस्वती योग",
    description: "गुरु, शुक्र और बुध केंद्र या त्रिकोण में हों तो सरस्वती योग बनता है। इससे जातक विद्या, कला एवं साहित्य में निपुण होता है।",
  },
  {
    title: "भद्र योग",
    description: "बुध ग्रह अपनी राशि (मिथुन/कन्या) में केंद्र भाव में हो तो भद्र योग बनता है। ऐसा जातक शिक्षा में अत्यंत सफल होता है।",
  },
  {
    title: "हंस योग",
    description: "गुरु अपनी राशि (धनु/मीन) या उच्च राशि (कर्क) में केंद्र भाव में हो तो हंस योग बनता है। ऐसा जातक उच्च शिक्षा प्राप्त करता है।",
  },
  {
    title: "विद्या योग",
    description: "पंचमेश और नवमेश की युति या परस्पर दृष्टि होने पर विद्या योग बनता है। ऐसा जातक शिक्षा में उत्कृष्ट प्रदर्शन करता है।",
  },
];

const bhavaStudy = [
  {
    bhava: "प्रथम भाव (लग्न)",
    relation: "जातक की बुद्धि, मानसिक क्षमता और सीखने की इच्छा का सूचक।",
  },
  {
    bhava: "द्वितीय भाव",
    relation: "वाणी, भाषा ज्ञान और प्रारंभिक शिक्षा का सूचक। इस भाव से भाषा और साहित्य की शिक्षा का विचार किया जाता है।",
  },
  {
    bhava: "चतुर्थ भाव",
    relation: "शैक्षणिक वातावरण, स्कूल और घरेलू शिक्षा का सूचक। माता का शिक्षा में योगदान भी इसी भाव से देखा जाता है।",
  },
  {
    bhava: "पंचम भाव",
    relation: "मुख्य शिक्षा भाव — बुद्धि, ज्ञान, स्मरण शक्ति, रचनात्मकता और उच्च शिक्षा का प्रमुख सूचक।",
  },
  {
    bhava: "नवम भाव",
    relation: "उच्च शिक्षा, आध्यात्मिक ज्ञान, शोध और विदेशी शिक्षा का सूचक। गुरु और धर्म से जुड़ी शिक्षा इसी भाव से देखी जाती है।",
  },
];

const ShikshaYog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-hindi mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            मुख्य पृष्ठ पर वापस जाएं
          </Link>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              ज्योतिष और शिक्षा
            </h1>
            <p className="text-primary font-heading text-lg">
              पंचम भाव और शिक्षा का संबंध
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xl">✦</span>
              <div className="h-px w-12 bg-primary" />
            </div>
          </motion.div>

          {/* Pancham Bhava */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
              पंचम भाव और शिक्षा
            </h2>
            <p className="text-muted-foreground font-hindi leading-relaxed mb-4">
              वैदिक ज्योतिष में पंचम भाव को विद्या भाव कहा जाता है। यह भाव बुद्धि, ज्ञान, 
              स्मरण शक्ति, रचनात्मकता और शिक्षा का प्रमुख सूचक है। पंचम भाव का स्वामी, 
              इसमें स्थित ग्रह और इस पर पड़ने वाली दृष्टि — ये सभी शिक्षा के स्तर को 
              निर्धारित करते हैं।
            </p>
            <p className="text-muted-foreground font-hindi leading-relaxed mb-6">
              बुध ग्रह को विद्या का कारक माना जाता है। गुरु (बृहस्पति) को ज्ञान और उच्च शिक्षा 
              का कारक माना जाता है। इन दोनों ग्रहों की कुंडली में शुभ स्थिति शिक्षा के लिए 
              अत्यंत लाभकारी होती है।
            </p>
          </motion.section>

          {/* Bhava Study */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
              विभिन्न भावों से शिक्षा का अध्ययन
            </h2>
            <div className="space-y-4">
              {bhavaStudy.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border p-5"
                >
                  <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">✦</span>
                    {item.bhava}
                  </h3>
                  <p className="text-muted-foreground font-hindi text-sm leading-relaxed pl-6">
                    {item.relation}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Education Yogas */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
              शिक्षा के उत्तम योग
            </h2>
            <p className="text-muted-foreground font-hindi leading-relaxed mb-8">
              कुंडली में कुछ विशेष ग्रह योग शिक्षा के लिए अत्यंत शुभ माने जाते हैं। 
              ये योग जातक को विद्या, बुद्धि और ज्ञान में उत्कृष्ट बनाते हैं:
            </p>

            <div className="grid gap-6">
              {educationYogas.map((yoga, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl border border-border overflow-hidden"
                >
                  <div className="bg-primary/10 px-5 py-3 border-b border-border">
                    <h3 className="font-heading font-semibold text-foreground flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      {yoga.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-muted-foreground font-hindi text-sm leading-relaxed">
                      {yoga.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShikshaYog;
