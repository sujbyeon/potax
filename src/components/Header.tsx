import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubMenu {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: SubMenu[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "평온한 소식", href: "/news" },
  { label: "기장 및 신고 가이드", href: "https://blog.naver.com/PostList.naver?blogId=po-tax&from=postList&categoryNo=6" },
  {
    label: "재산세 가이드",
    href: "https://blog.naver.com/PostList.naver?blogId=po-tax&from=postList&categoryNo=7&parentCategoryNo=7",
    children: [
      { label: "양도", href: "/property-tax/transfer" },
      { label: "상속 및 증여", href: "/property-tax/inheritance" },
      { label: "지방세", href: "/property-tax/local" },
    ],
  },
  {
    label: "컨설팅 가이드",
    href: "https://blog.naver.com/PostList.naver?blogId=po-tax&from=postList&categoryNo=10&parentCategoryNo=10",
    children: [
      { label: "조사", href: "/consulting/audit" },
      { label: "불복 및 경정청구", href: "/consulting/appeal" },
      { label: "컨설팅", href: "/consulting/general" },
    ],
  },
  { label: "판례 및 실무 가이드", href: "https://blog.naver.com/PostList.naver?blogId=po-tax&from=postList&categoryNo=14" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
            <span className="text-2xl">⚖️</span>
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
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="flex items-center gap-1 text-[13px] font-medium text-foreground/80 hover:text-primary px-3 py-2 rounded-lg transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 min-w-[180px] bg-card border border-border rounded-xl shadow-xl shadow-background/40 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-[13px] text-foreground/70 hover:text-primary hover:bg-secondary/50 transition-colors"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-[13px] font-medium text-foreground/80 hover:text-primary px-3 py-2 rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </div>
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
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenMobileDropdown(
                            openMobileDropdown === item.label ? null : item.label
                          )
                        }
                        className="flex items-center justify-between w-full text-sm font-medium text-foreground/80 hover:text-primary py-3 px-2 transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openMobileDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openMobileDropdown === item.label && (
                        <div className="pl-4 pb-2 space-y-1">
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="block text-sm font-medium text-foreground/80 hover:text-primary py-3 px-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
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
