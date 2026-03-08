import { useState, useEffect, useRef, RefObject } from "react";
import Header from "@/components/Header";
import { toast } from "sonner";
import profileImg from "@/assets/profile-kimsy.png";

const SERVICES = [
  { icon: "📋", title: "종합소득세 신고", desc: "개인사업자, 프리랜서, 임대소득자 등 모든 종합소득세 신고를 정확하고 신속하게 처리합니다.", tag: "개인" },
  { icon: "🏢", title: "법인세 신고", desc: "법인의 결산 및 세무조정, 법인세 신고를 전문적으로 대행합니다. 절세 방안도 함께 제안합니다.", tag: "법인" },
  { icon: "💼", title: "기장 대행", desc: "중소기업 및 소상공인을 위한 월별 기장 서비스. 체계적인 재무 관리로 사업에 집중하세요.", tag: "기장" },
  { icon: "🏠", title: "양도·상속·증여세", desc: "부동산 양도, 상속세, 증여세 등 자산 이전에 따른 세금 신고 및 절세 컨설팅을 제공합니다.", tag: "자산" },
  { icon: "🔍", title: "세무조사 대응", desc: "국세청 세무조사에 전문적으로 대응합니다. 풍부한 경험을 바탕으로 의뢰인의 권익을 보호합니다.", tag: "조사" },
  { icon: "📊", title: "창업 세무 컨설팅", desc: "창업 초기 사업 형태 선택부터 절세 구조 설계까지, 성공적인 사업 시작을 위해 함께합니다.", tag: "창업" },
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
];

function useInView(threshold = 0.15): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const [heroRef, heroIn] = useInView(0.1);
  const [servicesRef, servicesIn] = useInView(0.05);
  const [profileRef, profileIn] = useInView(0.1);
  const [casesRef, casesIn] = useInView(0.05);
  const [contactRef, contactIn] = useInView(0.05);

  const handleSubmit = () => {
    if (form.name && form.phone) {
      setSubmitted(true);
      toast.success("상담 신청이 완료되었습니다!");
    } else {
      toast.error("성함과 연락처를 입력해주세요.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center navy-gradient overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[15%] w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-[20%] left-[10%] w-96 h-96 rounded-full bg-primary/3 blur-3xl" />
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/10"
              style={{
                width: 4 + Math.random() * 4,
                height: 4 + Math.random() * 4,
                top: `${15 + Math.random() * 70}%`,
                left: `${10 + Math.random() * 80}%`,
                animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={`fade-up ${heroIn ? "visible" : ""} space-y-8`}>
              <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                평온한 세법 가이드
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">평온한</span>
                  <br />
                  <span className="text-gold-gradient">세무 파트너</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                스타트업부터 중견기업, 상장사, 대기업 그룹사까지.
                컨설팅, 조사 대응, 불복, 상속·증여 업무의
                실전 경험으로 복잡한 세금 문제를 해결합니다.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("contact")}
                  className="gold-gradient text-primary-foreground border-0 rounded-xl px-7 py-4 cursor-pointer font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  상담 신청하기
                </button>
                <button
                  onClick={() => scrollTo("services")}
                  className="bg-transparent text-foreground border border-border rounded-xl px-6 py-4 cursor-pointer text-sm hover:border-primary/40 transition-colors"
                >
                  서비스 알아보기 →
                </button>
              </div>
            </div>

            <div className={`fade-up delay-2 ${heroIn ? "visible" : ""}`}>
              <div className="glass-surface rounded-3xl p-8 space-y-6 animate-float">
                <div className="flex items-center gap-4 pb-4 border-b border-border">
                  <span className="text-4xl">⚖️</span>
                  <div>
                    <p className="font-serif font-bold text-lg text-foreground">세무회계 평온</p>
                    <p className="text-xs text-muted-foreground">김성열 대표세무사</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {CAREER.map((c) => (
                    <div key={c.org} className="flex items-center gap-3">
                      <span className="text-[10px] tracking-wider text-primary font-semibold bg-primary/10 px-2.5 py-1 rounded-full min-w-[28px] text-center">
                        {c.period}
                      </span>
                      <span className="text-sm text-foreground">{c.org}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 bg-secondary/30 rounded-xl p-4">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="text-xs text-muted-foreground">대표 전화</p>
                    <p className="font-bold text-sm text-foreground">02-866-5006</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" ref={servicesRef} className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`fade-up ${servicesIn ? "visible" : ""} text-center mb-16`}>
            <p className="text-xs tracking-[3px] text-primary font-medium mb-3">OUR SERVICES</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">전문 세무 서비스</h2>
            <div className="accent-bar mx-auto mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              다양한 세무 분야에 걸친 전문 지식으로 최적의 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`fade-up delay-${Math.min(i + 1, 5)} ${servicesIn ? "visible" : ""} service-card bg-card border border-border rounded-2xl p-7 cursor-pointer`}
              >
                <div className="h-1 w-full rounded-t-2xl gold-gradient -mt-7 -mx-7 mb-6" style={{ width: "calc(100% + 56px)" }} />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="text-[10px] tracking-wider text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section id="profile" ref={profileRef} className="py-20 lg:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={`fade-up ${profileIn ? "visible" : ""}`}>
              <div className="bg-card border border-border rounded-3xl p-10 text-center">
                <div className="w-28 h-28 rounded-full bg-secondary mx-auto mb-6 overflow-hidden">
                  <img src={profileImg} alt="김성열 세무사" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-foreground mb-1">김성열 세무사</h3>
                <p className="text-sm text-muted-foreground mb-4">세무회계 평온 대표세무사</p>
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
            </div>

            <div className={`fade-up delay-2 ${profileIn ? "visible" : ""} space-y-6`}>
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
                {CAREER.map(({ period, org }) => (
                  <div
                    key={org}
                    className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3"
                  >
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {period}
                    </span>
                    <span className="text-sm text-foreground">{org}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-xs tracking-[2px] text-muted-foreground font-medium">학력</p>
                {["한국과학영재고 졸업", "연세대학교 졸업"].map((edu) => (
                  <div key={edu} className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3">
                    <span className="text-lg">🎓</span>
                    <span className="text-sm text-foreground">{edu}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollTo("contact")}
                className="bg-secondary hover:bg-secondary/80 text-foreground border-0 rounded-xl px-7 py-4 cursor-pointer font-semibold text-sm transition-colors"
              >
                지금 바로 상담 신청 →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" ref={casesRef} className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`fade-up ${casesIn ? "visible" : ""} text-center mb-16`}>
            <p className="text-xs tracking-[3px] text-primary font-medium mb-3">TRACK RECORD</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">주요 업무사례</h2>
            <div className="accent-bar mx-auto mb-6" />
          </div>

          <div className={`fade-up delay-1 ${casesIn ? "visible" : ""} grid sm:grid-cols-2 lg:grid-cols-3 gap-4`}>
            {CASES.map((c, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl px-5 py-4 flex items-start gap-3"
              >
                <span className="text-primary mt-0.5">✓</span>
                <span className="text-sm text-foreground leading-relaxed">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={contactRef} className="py-20 lg:py-28 navy-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`fade-up ${contactIn ? "visible" : ""} text-center mb-12`}>
            <p className="text-xs tracking-[3px] text-primary font-medium mb-3">CONSULTATION</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">상담 신청</h2>
            <div className="accent-bar mx-auto mb-6" />
            <p className="text-muted-foreground">
              방문 또는 전화 상담이 필요하신 경우, 아래로 연락주시면 친절하게 상담해드리겠습니다.
            </p>
          </div>

          {submitted ? (
            <div className={`fade-up delay-1 ${contactIn ? "visible" : ""} glass-surface rounded-3xl p-12 text-center space-y-4`}>
              <span className="text-5xl block">✅</span>
              <h3 className="text-2xl font-bold text-foreground">상담 신청이 완료되었습니다!</h3>
              <p className="text-muted-foreground">빠른 시간 내에 연락드리겠습니다. 감사합니다. 😊</p>
            </div>
          ) : (
            <div className={`fade-up delay-1 ${contactIn ? "visible" : ""} glass-surface rounded-3xl p-8 space-y-5`}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  ["name", "성함 *", "홍길동", "text"],
                  ["phone", "연락처 *", "010-0000-0000", "tel"],
                  ["email", "이메일", "example@email.com", "email"],
                ].map(([k, l, p, t]) => (
                  <div key={k} className={k === "email" ? "sm:col-span-2" : ""}>
                    <label className="block text-xs text-muted-foreground mb-2 font-medium">{l}</label>
                    <input
                      type={t}
                      placeholder={p}
                      value={form[k as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                      className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label className="block text-xs text-muted-foreground mb-2 font-medium">상담 유형</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                  >
                    <option value="" className="bg-card text-foreground">선택해주세요</option>
                    {["종합소득세", "법인세", "기장 대행", "양도·상속·증여세", "세무조사 대응", "창업 컨설팅", "기타"].map(
                      (o) => (
                        <option key={o} value={o} className="bg-card text-foreground">{o}</option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-muted-foreground mb-2 font-medium">문의 내용</label>
                <textarea
                  placeholder="궁금하신 내용을 자유롭게 적어주세요"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-vertical"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full gold-gradient text-primary-foreground border-0 rounded-xl py-4 cursor-pointer font-bold text-sm hover:opacity-90 transition-opacity"
              >
                상담 신청하기
              </button>

              <p className="text-[11px] text-muted-foreground/40 text-center">
                입력하신 정보는 상담 목적으로만 사용되며 안전하게 보호됩니다.
              </p>
            </div>
          )}

          <div className={`fade-up delay-2 ${contactIn ? "visible" : ""} grid grid-cols-3 gap-3 mt-8`}>
            {[
              ["📞", "대표 전화", "02-866-5006"],
              ["📱", "핸드폰", "010-9450-7458"],
              ["📍", "위치", "강남구청역 도보 10분"],
            ].map(([icon, label, val]) => (
              <div key={label} className="glass-surface rounded-2xl p-4 text-center">
                <p className="text-xl mb-1">{icon}</p>
                <p className="text-[10px] text-muted-foreground">{label}</p>
                <p className="text-xs text-foreground font-medium mt-1">{val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
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
