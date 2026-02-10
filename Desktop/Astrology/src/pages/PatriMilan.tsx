import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const gunData = [
  { gun: "वर्ण", maxPoints: 1, description: "जाति/वर्ग समानता" },
  { gun: "वश्य", maxPoints: 2, description: "परस्पर आकर्षण एवं प्रेम" },
  { gun: "तारा", maxPoints: 3, description: "स्वास्थ्य एवं दीर्घायु" },
  { gun: "योनि", maxPoints: 4, description: "शारीरिक एवं मानसिक अनुकूलता" },
  { gun: "ग्रह मैत्री", maxPoints: 5, description: "मानसिक सामंजस्य" },
  { gun: "गण", maxPoints: 6, description: "स्वभाव एवं व्यवहार" },
  { gun: "भकूट", maxPoints: 7, description: "परिवार एवं आर्थिक सुख" },
  { gun: "नाड़ी", maxPoints: 8, description: "संतान एवं स्वास्थ्य" },
];

const manglikExceptions = [
  "यदि मंगल अपनी राशि (मेष/वृश्चिक) में हो तो मांगलिक दोष नहीं लगता।",
  "यदि मंगल अपनी उच्च राशि (मकर) में हो तो दोष क्षीण हो जाता है।",
  "यदि मंगल पर शुभ ग्रहों (गुरु/शुक्र) की दृष्टि हो तो दोष कम हो जाता है।",
  "यदि वर और वधू दोनों मांगलिक हों तो दोष स्वतः समाप्त हो जाता है।",
  "यदि मंगल शुभ भाव (2, 12) में हो और अशुभ प्रभाव से मुक्त हो तो दोष नहीं माना जाता।",
];

const PatriMilan = () => {
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
              विवाह हेतु पत्री मिलान
            </h1>
            <p className="text-primary font-heading text-lg">
              मांगलिक एवं नाड़ी दोष
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xl">✦</span>
              <div className="h-px w-12 bg-primary" />
            </div>
          </motion.div>

          {/* Patri Milan Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
              पत्री मिलान (गुण मिलान)
            </h2>
            <p className="text-muted-foreground font-hindi leading-relaxed mb-6">
              हिन्दू विवाह पद्धति में वर-वधू की कुंडली मिलान का विशेष महत्व है। इसमें अष्टकूट 
              पद्धति के अनुसार 36 गुणों का मिलान किया जाता है। यदि 18 या उससे अधिक गुण 
              मिलते हैं तो विवाह शुभ माना जाता है। 25 से अधिक गुण मिलना उत्तम माना जाता है।
            </p>

            {/* Gun Table */}
            <div className="rounded-xl overflow-hidden border border-border shadow-sm mb-6">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary/10">
                    <TableHead className="font-heading text-foreground">क्रम</TableHead>
                    <TableHead className="font-heading text-foreground">गुण</TableHead>
                    <TableHead className="font-heading text-foreground text-center">अधिकतम अंक</TableHead>
                    <TableHead className="font-heading text-foreground">विवरण</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gunData.map((gun, index) => (
                    <TableRow key={index} className="hover:bg-secondary/50">
                      <TableCell className="font-hindi">{index + 1}</TableCell>
                      <TableCell className="font-heading font-semibold text-foreground">
                        {gun.gun}
                      </TableCell>
                      <TableCell className="text-center font-bold text-primary">
                        {gun.maxPoints}
                      </TableCell>
                      <TableCell className="text-muted-foreground font-hindi">
                        {gun.description}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-accent/5 font-bold">
                    <TableCell></TableCell>
                    <TableCell className="font-heading text-foreground">कुल</TableCell>
                    <TableCell className="text-center text-accent font-heading text-lg">36</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="bg-secondary rounded-xl p-5 border border-primary/10">
              <p className="font-hindi text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">ध्यान दें:</span> 18 से कम गुण मिलने 
                पर विवाह की अनुमति नहीं दी जाती। 18-24 गुण मध्यम और 25-36 गुण उत्तम माना जाता है। 
                नाड़ी (8 अंक) सबसे महत्वपूर्ण गुण है — इसके न मिलने पर गुण कुल 28 तक ही पहुँचते हैं।
              </p>
            </div>
          </motion.section>

          {/* Manglik Dosh */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
              मांगलिक दोष
            </h2>
            <p className="text-muted-foreground font-hindi leading-relaxed mb-4">
              जन्म कुंडली में मंगल ग्रह यदि प्रथम, चतुर्थ, सप्तम, अष्टम या द्वादश भाव में 
              स्थित हो तो उस जातक को मांगलिक कहा जाता है। मांगलिक दोष वैवाहिक जीवन में 
              कठिनाइयों का कारण माना जाता है। इसलिए विवाह से पूर्व मांगलिक दोष की जांच 
              अत्यंत आवश्यक है।
            </p>
            <p className="text-muted-foreground font-hindi leading-relaxed mb-6">
              मांगलिक दोष के प्रभाव से विवाह में विलम्ब, वैवाहिक कलह, दाम्पत्य सुख में कमी 
              और कभी-कभी विवाह विच्छेद जैसी समस्याएं उत्पन्न हो सकती हैं। परंतु उचित 
              ज्योतिषीय उपायों से इस दोष का निवारण संभव है।
            </p>
          </motion.section>

          {/* Manglik Exceptions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
              मांगलिक दोष का अपवाद
            </h2>
            <p className="text-muted-foreground font-hindi leading-relaxed mb-6">
              कुछ विशेष परिस्थितियों में मांगलिक दोष का प्रभाव क्षीण हो जाता है या समाप्त 
              हो जाता है। ये अपवाद निम्नलिखित हैं:
            </p>
            <div className="space-y-3">
              {manglikExceptions.map((exception, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border"
                >
                  <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground font-hindi text-sm leading-relaxed">
                    {exception}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PatriMilan;
