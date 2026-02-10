import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "होम", href: "/#home" },
  { label: "परिचय", href: "/#about" },
  { label: "सेवाएं", href: "/#services" },
  { label: "ज्योतिष ज्ञान", href: "/#knowledge" },
  { label: "संपर्क", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname !== "/") {
        window.location.href = href;
        return;
      }
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-maroon/95 backdrop-blur-md shadow-lg">
      {/* Top bar */}
      <div className="bg-primary/20 py-1 px-4 text-center">
        <p className="text-saffron-glow text-xs md:text-sm font-hindi">
          ॐ || श्री गणेशाय नमः || ॐ
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-saffron-glow text-2xl font-heading">ॐ</span>
            <div className="hidden sm:block">
              <p className="text-primary-foreground font-heading text-sm leading-tight">
                ज्योतिष अनुसंधान संस्थान
              </p>
              <p className="text-saffron-light text-xs">
                पं. अजय कुमार त्रिपाठी
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-2 text-sm text-primary-foreground/80 hover:text-saffron-glow transition-colors font-hindi rounded-md hover:bg-primary/10"
              >
                {item.label}
              </button>
            ))}
            <a href="tel:9415756722">
              <Button size="sm" className="ml-2 bg-primary hover:bg-saffron-light text-primary-foreground font-hindi">
                <Phone className="h-3 w-3" />
                अभी कॉल करें
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-80 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-3 text-left text-primary-foreground/80 hover:text-saffron-glow hover:bg-primary/10 rounded-md transition-colors font-hindi"
              >
                {item.label}
              </button>
            ))}
            <a href="tel:9415756722" className="mt-2">
              <Button className="w-full bg-primary hover:bg-saffron-light text-primary-foreground font-hindi">
                <Phone className="h-4 w-4" />
                अभी कॉल करें
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
