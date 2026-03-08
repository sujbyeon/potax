import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo-pyeongon.png";

const NAV_SECTIONS = [
  { label: "대표 소개", id: "profile" },
  { label: "전문 서비스", id: "services" },
  { label: "업무 사례", id: "cases" },
  { label: "세법 가이드", id: "guide" },
  { label: "상담 신청", id: "contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-background/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 cursor-pointer flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
            }}
          >
            <img src={logoImg} alt="세무회계 평온 로고" className="w-9 h-9 object-contain" />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold font-serif text-foreground leading-tight">
                세무회계 평온
              </span>
              <span className="text-[10px] tracking-[2px] text-muted-foreground font-medium">
                TAX CONSULTING
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_SECTIONS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[13px] font-medium text-foreground/80 hover:text-primary px-3 py-2 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              className="hidden lg:flex gold-gradient text-primary-foreground rounded-lg px-5 py-2 text-[13px] font-bold hover:opacity-90 transition-opacity border-0"
              onClick={() => scrollTo("contact")}
            >
              상담 신청
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴 열기"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1">
              {NAV_SECTIONS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block text-sm font-medium text-foreground/80 hover:text-primary py-3 px-2 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="gold-gradient text-primary-foreground rounded-lg w-full mt-3 font-bold border-0"
                onClick={() => scrollTo("contact")}
              >
                상담 신청
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
