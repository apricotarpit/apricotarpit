import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    title: "विवाह हेतु पत्री मिलान",
    subtitle: "मांगलिक एवं नाड़ी दोष",
    description: "36 गुणों के आधार पर पत्री मिलान, मांगलिक दोष की विस्तृत जानकारी और उसके अपवाद।",
    link: "/patri-milan",
  },
  {
    title: "नाड़ी दोष परिहार",
    subtitle: "विद्वानों के अनुसार नियम",
    description: "नाड़ी दोष का विवरण और 5 विद्वानों के अनुसार नाड़ी दोष परिहार के नियम।",
    link: "/nadi-dosh",
  },
  {
    title: "ज्योतिष और शिक्षा",
    subtitle: "पंचम भाव और शिक्षा",
    description: "पंचम भाव और शिक्षा का संबंध, विभिन्न भावों से शिक्षा का अध्ययन और शिक्षा के उत्तम योग।",
    link: "/shiksha-yog",
  },
];

const KnowledgePreview = () => {
  return (
    <section id="knowledge" className="py-20 bg-background kundali-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-hindi text-sm tracking-wider">ज्योतिष शास्त्र से ज्ञान</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            ज्योतिष ज्ञान
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-xl">✦</span>
            <div className="h-px w-12 bg-primary" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <Link to={article.link}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 cursor-pointer bg-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <BookOpen className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-1">
                      {article.title}
                    </h3>
                    <p className="text-primary text-sm font-hindi mb-3">
                      {article.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground font-hindi leading-relaxed mb-4">
                      {article.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-hindi group-hover:gap-2 transition-all">
                      विस्तार से पढ़ें
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgePreview;
