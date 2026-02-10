import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-maroon text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-saffron-glow text-3xl font-heading">ॐ</span>
              <div>
                <p className="font-heading text-lg text-primary-foreground">
                  ज्योतिष अनुसंधान संस्थान
                </p>
                <p className="text-saffron-light text-sm">
                  पं. अजय कुमार त्रिपाठी (ज्योतिषी)
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm font-hindi leading-relaxed">
              वैदिक ज्योतिष के माध्यम से जीवन की सही दिशा। कुंडली विश्लेषण, भविष्यफल, 
              ग्रह-दोष निवारण एवं धार्मिक मार्गदर्शन।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-saffron-glow">ज्योतिष ज्ञान</h4>
            <div className="space-y-2">
              <Link
                to="/patri-milan"
                className="block text-primary-foreground/60 hover:text-saffron-light transition-colors text-sm font-hindi"
              >
                विवाह हेतु पत्री मिलान
              </Link>
              <Link
                to="/nadi-dosh"
                className="block text-primary-foreground/60 hover:text-saffron-light transition-colors text-sm font-hindi"
              >
                नाड़ी दोष एवं परिहार
              </Link>
              <Link
                to="/shiksha-yog"
                className="block text-primary-foreground/60 hover:text-saffron-light transition-colors text-sm font-hindi"
              >
                ज्योतिष और शिक्षा
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-saffron-glow">संपर्क</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-saffron-light mt-0.5 shrink-0" />
                <div className="text-sm font-hindi">
                  <a href="tel:9415756722" className="text-primary-foreground/60 hover:text-saffron-light transition-colors">
                    9415756722
                  </a>
                  ,{" "}
                  <a href="tel:7355516734" className="text-primary-foreground/60 hover:text-saffron-light transition-colors">
                    7355516734
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-saffron-light mt-0.5 shrink-0" />
                <a
                  href="mailto:astroajay2002@gmail.com"
                  className="text-sm text-primary-foreground/60 hover:text-saffron-light transition-colors font-hindi"
                >
                  astroajay2002@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-saffron-light mt-0.5 shrink-0" />
                <p className="text-sm text-primary-foreground/60 font-hindi">
                  ई–1/345, सेक्टर–जी, एल.डी.ए. कॉलोनी, कानपुर रोड, लखनऊ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 text-center">
          <p className="text-primary-foreground/40 text-sm font-hindi">
            || श्री राम || — ज्योतिष अनुसंधान संस्थान, लखनऊ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
