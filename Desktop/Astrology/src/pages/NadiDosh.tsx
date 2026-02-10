import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const scholars = [
  {
    name: "पराशर मुनि",
    rules: [
      "यदि वर और वधू दोनों की नाड़ी एक ही हो परंतु राशि भिन्न हो तो दोष नहीं माना जाता।",
      "यदि दोनों की राशि एक ही हो परंतु नक्षत्र भिन्न हो तो भी नाड़ी दोष समाप्त हो जाता है।",
    ],
  },
  {
    name: "वराहमिहिर",
    rules: [
      "यदि वर और वधू के नक्षत्र भिन्न हों और ग्रह मैत्री शुभ हो तो नाड़ी दोष का प्रभाव क्षीण हो जाता है।",
      "ग्रहों की शुभ दृष्टि होने पर नाड़ी दोष का प्रभाव न्यूनतम हो जाता है।",
    ],
  },
  {
    name: "भृगु ऋषि",
    rules: [
      "यदि वर या वधू में से किसी एक की कुंडली में गुरु केंद्र में हो तो नाड़ी दोष समाप्त हो जाता है।",
      "शुक्र और गुरु की युति या दृष्टि से नाड़ी दोष का निवारण होता है।",
    ],
  },
  {
    name: "जैमिनी ऋषि",
    rules: [
      "यदि दोनों कुंडलियों में शुभ ग्रहों का बाहुल्य हो तो नाड़ी दोष का प्रभाव नगण्य हो जाता है।",
      "आत्मकारक ग्रह की शुभ स्थिति नाड़ी दोष को क्षीण करती है।",
    ],
  },
  {
    name: "मन्त्रेश्वर",
    rules: [
      "यदि सप्तमेश शुभ स्थिति में हो और पापकर्तरी योग न हो तो नाड़ी दोष का प्रभाव कम हो जाता है।",
      "नवांश कुंडली में शुभ योग होने पर नाड़ी दोष का विशेष प्रभाव नहीं पड़ता।",
    ],
  },
];

const NadiDosh = () => {
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
              नाड़ी दोष एवं नाड़ी दोष परिहार
            </h1>
            <p className="text-primary font-heading text-lg">
              विद्वानों के अनुसार नियम
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xl">✦</span>
              <div className="h-px w-12 bg-primary" />
            </div>
          </motion.div>

          {/* Nadi Dosh Description */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
              नाड़ी दोष क्या है?
            </h2>
            <p className="text-muted-foreground font-hindi leading-relaxed mb-4">
              अष्टकूट मिलान पद्धति में नाड़ी को सबसे अधिक 8 अंक प्रदान किए गए हैं, जो इसके 
              महत्व को दर्शाता है। नाड़ी तीन प्रकार की होती है — <span className="font-semibold text-foreground">आदि (वात), 
              मध्य (पित्त) और अन्त्य (कफ)</span>।
            </p>
            <p className="text-muted-foreground font-hindi leading-relaxed mb-4">
              यदि वर और वधू दोनों की नाड़ी एक ही हो तो इसे नाड़ी दोष कहा जाता है। इस स्थिति 
              में गुण मिलान में नाड़ी के 8 अंक शून्य हो जाते हैं। नाड़ी दोष को संतान एवं स्वास्थ्य 
              की दृष्टि से अत्यंत हानिकारक माना जाता है।
            </p>

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
              <h4 className="font-heading font-semibold text-accent mb-2">नाड़ी दोष के प्रभाव:</h4>
              <ul className="space-y-2 text-muted-foreground font-hindi text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  संतान प्राप्ति में बाधा या विलम्ब
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  पति-पत्नी के स्वास्थ्य पर प्रतिकूल प्रभाव
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  दाम्पत्य जीवन में कलह और मतभेद
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  मानसिक तनाव एवं अशांति
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Scholars' Rules */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
              विद्वानों के अनुसार नाड़ी दोष परिहार
            </h2>
            <p className="text-muted-foreground font-hindi leading-relaxed mb-8">
              प्राचीन ज्योतिष ग्रंथों में विभिन्न विद्वानों ने नाड़ी दोष के परिहार (निवारण) के 
              विशेष नियम बताए हैं। इन नियमों के अनुसार कुछ विशेष स्थितियों में नाड़ी दोष 
              का प्रभाव क्षीण हो जाता है:
            </p>

            <div className="space-y-6">
              {scholars.map((scholar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl border border-border overflow-hidden"
                >
                  <div className="bg-primary/10 px-5 py-3 border-b border-border">
                    <h3 className="font-heading font-semibold text-foreground flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      {scholar.name}
                    </h3>
                  </div>
                  <div className="p-5 space-y-3">
                    {scholar.rules.map((rule, rIndex) => (
                      <p key={rIndex} className="text-muted-foreground font-hindi text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-primary mt-0.5">✦</span>
                        {rule}
                      </p>
                    ))}
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

export default NadiDosh;
