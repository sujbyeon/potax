import { useRef } from "react";
import Header from "@/components/Header";
import profileImg from "@/assets/profile-kimsy.png";
import { motion, useInView } from "framer-motion";

const SERVICES = [
  { icon: "📋", title: "종합소득세 신고", desc: "개인사업자, 프리랜서, 임대소득자 등 모든 종합소득세 신고를 정확하고 신속하게 처리합니다.", tag: "개인" },
  { icon: "🏢", title: "법인세 신고", desc: "법인의 결산 및 세무조정, 법인세 신고를 전문적으로 대행합니다. 절세 방안도 함께 제안합니다.", tag: "법인" },
  { icon: "💼", title: "기장 대행", desc: "중소기업 및 소상공인을 위한 월별 기장 서비스. 체계적인 재무 관리로 사업에 집중하세요.", tag: "기장" },
  { icon: "🏠", title: "양도·상속·증여세", desc: "부동산 양도, 상속세, 증여세 등 자산 이전에 따른 세금 신고 및 절세 컨설팅을 제공합니다.", tag: "자산" },
  { icon: "🔍", title: "세무조사 대응", desc: "국세청 세무조사에 전문적으로 대응합니다. 풍부한 경험을 바탕으로 의뢰인의 권익을 보호합니다.", tag: "조사" },
  { icon: "🏗️", title: "재개발 재건축 컨설팅", desc: "재개발·재건축 초기 구역 분석부터 절세 구조 설계까지, 성공적인 투자 시작을 위해 함께합니다.", tag: "부동산" },
];

const CAREER = [
  { period: "현", org: "세무회계 평온 대표세무사" },
  { period: "전", org: "에스제이조세파트너스 대표세무사" },
  { period: "전", org: "세무법인 호연 세무사" },
  { period: "전", org: "좋은벗세무회계 세무사" },
];

const CASES = [
  "식품 중견기업 정기 세무조사 대응",
  "바이오 상장사 예치조사 조사대응",
  "금융 그룹사 세무조사 대응",
  "투자 및 증권사 세무조사 대응",
  "에스테틱·뷰티 중소기업 조사",
  "코스피 상장 제조 중견기업 조세불복",
  "대기업 건설 계열사 조세불복",
  "외국계 기업 한국지사장 상속세 신고 및 대응",
  "정부 중앙부처 국장급 개인 증여신고",
  "스타트업 세무 구조화",
  "기업인 상속 및 조사 시뮬레이션",
  "예술관련 재단법인 자문 및 컨설팅",
  "정부 중앙부처 장관급 청문회 대응자료 검토",
  "외국납부세액공제관련 경정청구",
  "승계조합원 청산금 양도소득세",
];

const BLOG_CATEGORIES = [
  { icon: "📰", title: "평온한 소식", href: "https://blog.naver.com/PostList.naver?blogId=po-tax&from=postList&categoryNo=6", desc: "세무회계 평온의 최신 소식과 공지사항" },
  { icon: "📝", title: "기장 및 신고 가이드", href: "https://blog.naver.com/PostList.naver?blogId=po-tax&from=postList&categoryNo=6", desc: "기장 대행과 각종 세금 신고에 대한 실무 가이드" },
  { icon: "🏠", title: "재산세 가이드", href: "https://blog.naver.com/PostList.naver?blogId=po-tax&from=postList&categoryNo=7&parentCategoryNo=7", desc: "양도세, 상속·증여세, 지방세 관련 절세 전략" },
  { icon: "💡", title: "컨설팅 가이드", href: "https://blog.naver.com/PostList.naver?blogId=po-tax&from=postList&categoryNo=10&parentCategoryNo=10", desc: "세무조사, 불복·경정청구, 컨설팅 실무 안내" },
  { icon: "⚖️", title: "판례 및 실무 가이드", href: "https://blog.naver.com/PostList.naver?blogId=po-tax&from=postList&categoryNo=14", desc: "주요 세법 판례와 실무 적용 사례 분석" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// Reusable animated section wrapper
const FadeSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.68, 0, 1.1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* 1. HERO */}
      <section id="home" className="relative min-h-screen flex items-center navy-gradient overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px]" />
          <div className="absolute bottom-[15%] left-[5%] w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px]" />
          <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-gold-glow/[0.02] blur-[80px]" />
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10"
              style={{
                width: 3 + Math.random() * 5,
                height: 3 + Math.random() * 5,
                top: `${10 + Math.random() * 80}%`,
                left: `${5 + Math.random() * 90}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 text-xs text-muted-foreground backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                세무회계 평온
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 0.68, 0, 1.1] }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.15]">
                  <span className="text-foreground">평온한 세법 가이드,</span>
                  <br />
                  <span className="text-gold-gradient">세무회계 평온</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-base sm:text-lg leading-relaxed max-w-lg"
              >
                <span className="text-foreground font-semibold">현장에서 단련된 세무 전문가만이 줄 수 있는 조언이 있습니다.</span>{" "}
                <span className="text-muted-foreground">스타트업부터 대기업 그룹사까지, 복잡한 세무 이슈·세무조사 대응·부동산 상속증여 등 다양한 현장을 누빈 전문가가 직접 함께합니다. 수천 건의 실전 경험이 쌓은 신뢰를 바탕으로, 세무회계 평온이 든든한 파트너가 되겠습니다.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="flex flex-wrap gap-3"
              >
                <button
                  onClick={() => scrollTo("contact")}
                  className="gold-gradient text-primary-foreground border-0 rounded-xl px-7 py-4 cursor-pointer font-bold text-sm hover:opacity-90 transition-all hover:shadow-[0_8px_30px_hsla(20,23%,53%,0.3)] hover:-translate-y-0.5"
                >
                  상담 신청하기
                </button>
                <button
                  onClick={() => scrollTo("profile")}
                  className="bg-transparent text-foreground border border-border rounded-xl px-6 py-4 cursor-pointer text-sm hover:border-primary/40 transition-all hover:bg-secondary/30"
                >
                  대표세무사 소개 →
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: -5 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 0.68, 0, 1.1] }}
            >
              <div className="glass-surface rounded-3xl p-8 space-y-6 animate-float hero-card-glow">
                <div className="flex items-center gap-4 pb-4 border-b border-border/50">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-2xl">⚖️</div>
                  <div>
                    <p className="font-serif font-bold text-lg text-foreground">세무회계 평온</p>
                    <p className="text-xs text-muted-foreground">김성열 대표세무사</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {CAREER.map((c, i) => (
                    <motion.div
                      key={c.org}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-[10px] tracking-wider text-primary font-semibold bg-primary/10 px-2.5 py-1 rounded-full min-w-[28px] text-center">
                        {c.period}
                      </span>
                      <span className="text-sm text-foreground">{c.org}</span>
                    </motion.div>
                  ))}
                </div>

                <a href="tel:02-866-5006" className="flex items-center gap-3 bg-secondary/30 rounded-xl p-4 hover:bg-secondary/50 transition-colors group">
                  <span className="text-xl group-hover:scale-110 transition-transform">📞</span>
                  <div>
                    <p className="text-xs text-muted-foreground">대표 전화</p>
                    <p className="font-bold text-sm text-foreground">02-866-5006</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 rounded-full bg-primary/60" />
          </div>
        </motion.div>
      </section>

      {/* 2. PROFILE */}
      <section id="profile" className="py-24 lg:py-32 bg-secondary/30 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeSection>
              <div className="bg-card border border-border rounded-3xl p-10 text-center relative overflow-hidden group">
                <div className="absolute inset-0 gold-gradient opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
                <div className="w-32 h-32 rounded-full bg-secondary mx-auto mb-6 overflow-hidden ring-4 ring-primary/10 ring-offset-4 ring-offset-card">
                  <img src={profileImg} alt="김성열 세무사" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-foreground mb-1">김성열 세무사</h3>
                <p className="text-sm text-muted-foreground mb-5">세무회계 평온 대표세무사</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["한국과학영재고", "연세대학교", "前 좋은벗세무회계", "前 세무법인 호연"].map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeSection>

            <FadeSection delay={0.15} className="space-y-6">
              <p className="text-xs tracking-[3px] text-primary font-medium">ABOUT</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                김성열 대표세무사
                <br />
                <span className="text-primary">소개</span>
              </h2>
              <div className="accent-bar" />
              <p className="text-muted-foreground leading-relaxed">
                좋은벗세무회계와 세무법인 호연에서 근무하며 스타트업부터 중견기업, 상장사, 대기업 그룹사를 대상으로
                컨설팅 및 조사 대응, 불복, 상속·증여 업무를 수행하며 실제적인 경험을 쌓아왔습니다.
              </p>

              <div className="space-y-3">
                {CAREER.map(({ period, org }, i) => (
                  <FadeSection key={org} delay={0.2 + i * 0.08}>
                    <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 hover:border-primary/30 transition-colors">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        {period}
                      </span>
                      <span className="text-sm text-foreground">{org}</span>
                    </div>
                  </FadeSection>
                ))}
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-xs tracking-[2px] text-muted-foreground font-medium">학력</p>
                {["한국과학영재고 졸업", "연세대학교 졸업"].map((edu) => (
                  <div key={edu} className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 hover:border-primary/30 transition-colors">
                    <span className="text-lg">🎓</span>
                    <span className="text-sm text-foreground">{edu}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollTo("contact")}
                className="bg-secondary hover:bg-secondary/80 text-foreground border-0 rounded-xl px-7 py-4 cursor-pointer font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                지금 바로 상담 신청 →
              </button>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* 3. CASES */}
      <section id="cases" className="py-24 lg:py-32 bg-background relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-16">
            <p className="text-xs tracking-[3px] text-primary font-medium mb-3">TRACK RECORD</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">주요 업무사례</h2>
            <div className="accent-bar mx-auto mb-6" />
          </FadeSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CASES.map((c, i) => (
              <FadeSection key={i} delay={i * 0.04}>
                <div className="bg-card border border-border rounded-xl px-5 py-4 flex items-start gap-3 hover:border-primary/30 hover:bg-card/80 transition-all group">
                  <span className="text-primary mt-0.5 group-hover:scale-125 transition-transform">✓</span>
                  <span className="text-sm text-foreground leading-relaxed">{c}</span>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BLOG GUIDE */}
      <section id="guide" className="py-24 lg:py-32 bg-secondary/30 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-16">
            <p className="text-xs tracking-[3px] text-primary font-medium mb-3">TAX GUIDE</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">평온한 세법 가이드</h2>
            <div className="accent-bar mx-auto mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              실무에 바로 적용할 수 있는 세법 정보와 절세 전략을 블로그에서 만나보세요.
            </p>
          </FadeSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_CATEGORIES.map((cat, i) => (
              <FadeSection key={cat.title} delay={i * 0.08}>
                <a
                  href={cat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-all hover:-translate-y-1.5 block relative overflow-hidden h-full hover:shadow-[0_20px_50px_hsla(200,95%,5%,0.3)]"
                >
                  <div className="absolute inset-0 gold-gradient opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {cat.icon}
                      </div>
                      <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-primary transition-colors">{cat.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.desc}</p>
                    <span className="text-xs text-primary font-medium group-hover:tracking-wider transition-all">블로그에서 보기 →</span>
                  </div>
                </a>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section id="services" className="py-24 lg:py-32 bg-background relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-16">
            <p className="text-xs tracking-[3px] text-primary font-medium mb-3">OUR SERVICES</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">전문 세무 서비스</h2>
            <div className="accent-bar mx-auto mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              다양한 세무 분야에 걸친 전문 지식으로 최적의 솔루션을 제공합니다.
            </p>
          </FadeSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <FadeSection key={s.title} delay={i * 0.08}>
                <div className="service-card bg-card border border-border rounded-2xl p-7 cursor-pointer relative overflow-hidden group h-full">
                  <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
                  <div className="absolute inset-0 gold-gradient opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                        {s.icon}
                      </div>
                      <span className="text-[10px] tracking-wider text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT */}
      <section id="contact" className="py-24 lg:py-32 navy-gradient relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeSection className="text-center mb-12">
            <p className="text-xs tracking-[3px] text-primary font-medium mb-3">CONSULTATION</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">상담 신청</h2>
            <div className="accent-bar mx-auto mb-6" />
            <p className="text-muted-foreground">
              편하신 방법으로 문의해 주시면 성심껏 상담해 드리겠습니다.
            </p>
          </FadeSection>

          <div className="grid sm:grid-cols-3 gap-4">
            <FadeSection delay={0.1}>
              <a
                href="tel:02-866-5006"
                className="glass-surface rounded-2xl p-8 text-center hover:border-primary/40 border border-transparent transition-all hover:-translate-y-1.5 block group hover:shadow-[0_20px_50px_hsla(200,95%,5%,0.4)]"
              >
                <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">📞</span>
                <h3 className="font-bold text-lg text-foreground mb-1">전화 상담</h3>
                <p className="text-sm text-muted-foreground mb-4">바로 전화 연결됩니다</p>
                <span className="inline-block gold-gradient text-primary-foreground border-0 rounded-xl px-6 py-3 font-bold text-sm">
                  02-866-5006
                </span>
              </a>
            </FadeSection>

            <FadeSection delay={0.2}>
              <a
                href="sms:010-9450-7458"
                className="glass-surface rounded-2xl p-8 text-center hover:border-primary/40 border border-transparent transition-all hover:-translate-y-1.5 block group hover:shadow-[0_20px_50px_hsla(200,95%,5%,0.4)]"
              >
                <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">💬</span>
                <h3 className="font-bold text-lg text-foreground mb-1">문자 상담</h3>
                <p className="text-sm text-muted-foreground mb-4">문자로 상담 요청</p>
                <span className="inline-block bg-secondary text-foreground border border-border rounded-xl px-6 py-3 font-bold text-sm">
                  010-9450-7458
                </span>
              </a>
            </FadeSection>

            <FadeSection delay={0.3}>
              <div className="glass-surface rounded-2xl p-8 text-center border border-transparent h-full">
                <span className="text-4xl block mb-3">🏢</span>
                <h3 className="font-bold text-lg text-foreground mb-1">방문 상담</h3>
                <p className="text-sm text-muted-foreground mb-4">사무실 주소</p>
                <p className="text-xs text-foreground font-medium mb-4">강남구 선릉로121길 15, 4층</p>
                <div className="flex gap-2 justify-center">
                  <a
                    href="https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%84%A0%EB%A6%89%EB%A1%9C121%EA%B8%B8%2015"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#03c75a] text-white rounded-lg px-3 py-1.5 font-bold text-[10px] hover:opacity-90 transition-opacity"
                  >
                    네이버 지도
                  </a>
                  <a
                    href="https://map.kakao.com/?q=%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%84%A0%EB%A6%89%EB%A1%9C121%EA%B8%B8%2015"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#fee500] text-[#191919] rounded-lg px-3 py-1.5 font-bold text-[10px] hover:opacity-90 transition-opacity"
                  >
                    카카오맵
                  </a>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="accent-bar mx-auto mb-6" />
          <p className="text-xs text-muted-foreground">
            세무회계 평온 | 대표세무사 김성열 | 평온한 세법 가이드
          </p>
          <p className="text-xs text-muted-foreground">
            T. 02-866-5006 | M. 010-9450-7458
          </p>
          <p className="text-xs text-muted-foreground/50">
            © 2025 세무회계 평온. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
