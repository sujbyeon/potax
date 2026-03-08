import { useState, useEffect, useRef, RefObject } from "react";
import Header from "@/components/Header";
import { toast } from "sonner";

const SERVICES = [
  { icon: "📋", title: "종합소득세 신고", desc: "개인사업자, 프리랜서, 임대소득자 등 모든 종합소득세 신고를 정확하고 신속하게 처리합니다.", tag: "개인" },
  { icon: "🏢", title: "법인세 신고", desc: "법인의 결산 및 세무조정, 법인세 신고를 전문적으로 대행합니다. 절세 방안도 함께 제안합니다.", tag: "법인" },
  { icon: "💼", title: "기장 대행", desc: "중소기업 및 소상공인을 위한 월별 기장 서비스. 체계적인 재무 관리로 사업에 집중하세요.", tag: "기장" },
  { icon: "🏠", title: "양도·상속·증여세", desc: "부동산 양도, 상속세, 증여세 등 자산 이전에 따른 세금 신고 및 절세 컨설팅을 제공합니다.", tag: "자산" },
  { icon: "🔍", title: "세무조사 대응", desc: "국세청 세무조사에 전문적으로 대응합니다. 풍부한 경험을 바탕으로 의뢰인의 권익을 보호합니다.", tag: "조사" },
  { icon: "📊", title: "창업 세무 컨설팅", desc: "창업 초기 사업 형태 선택부터 절세 구조 설계까지, 성공적인 사업 시작을 위해 함께합니다.", tag: "창업" },
];

const STATS = [
  { value: "15+", label: "년 경력" },
  { value: "2,000+", label: "고객사" },
  { value: "98%", label: "고객 만족도" },
  { value: "0건", label: "세무조사 패소" },
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
        {/* Decorative elements */}
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
            {/* Left content */}
            <div className={`fade-up ${heroIn ? "visible" : ""} space-y-8`}>
              <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                서울 강남구 테헤란로 소재
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">믿을 수 있는</span>
                  <br />
                  <span className="text-gold-gradient">세무 파트너</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                15년 이상의 전문 경험으로 개인·법인 세무신고부터
                절세 전략 수립까지, 복잡한 세금 문제를
                명쾌하게 해결해 드립니다.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("contact")}
                  className="gold-gradient text-primary-foreground border-0 rounded-xl px-7 py-4 cursor-pointer font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  무료 상담 신청하기
                </button>
                <button
                  onClick={() => scrollTo("services")}
                  className="bg-transparent text-foreground border border-border rounded-xl px-6 py-4 cursor-pointer text-sm hover:border-primary/40 transition-colors"
                >
                  서비스 알아보기 →
                </button>
              </div>
            </div>

            {/* Right card */}
            <div className={`fade-up delay-2 ${heroIn ? "visible" : ""}`}>
              <div className="glass-surface rounded-3xl p-8 space-y-6 animate-float">
                <div className="flex items-center gap-4 pb-4 border-b border-border">
                  <span className="text-4xl">⚖️</span>
                  <div>
                    <p className="font-serif font-bold text-lg text-foreground">이준혁 세무사 사무소</p>
                    <p className="text-xs text-muted-foreground">공인 세무사 · 세무학 석사</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {STATS.map((s) => (
                    <div key={s.label} className="text-center py-3">
                      <p className="text-2xl font-bold text-gold-gradient">{s.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 bg-secondary/30 rounded-xl p-4">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="text-xs text-muted-foreground">전화 상담</p>
                    <p className="font-bold text-sm text-foreground">02-1234-5678</p>
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
            {/* Left - Card */}
            <div className={`fade-up ${profileIn ? "visible" : ""}`}>
              <div className="bg-card border border-border rounded-3xl p-10 text-center">
                <div className="w-28 h-28 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center">
                  <span className="text-5xl">👨‍💼</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-foreground mb-1">이준혁 세무사</h3>
                <p className="text-sm text-muted-foreground mb-4">공인 세무사 | 세무학 석사</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["국세청 출신", "前 대형 세무법인", "세무사 협회 정회원"].map((t) => (
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

            {/* Right - Content */}
            <div className={`fade-up delay-2 ${profileIn ? "visible" : ""} space-y-6`}>
              <p className="text-xs tracking-[3px] text-primary font-medium">ABOUT</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                세금 문제,
                <br />
                저와 함께 해결하세요
              </h2>
              <div className="accent-bar" />
              <p className="text-muted-foreground leading-relaxed">
                국세청 근무 경험과 대형 세무법인에서 쌓은 15년 이상의 실전 경험을 바탕으로,
                고객 한 분 한 분에게 맞춤화된 세무 솔루션을 제공합니다.
                단순 신고 대행을 넘어 장기적인 절세 전략까지 함께 고민합니다.
              </p>

              <div className="space-y-3">
                {[
                  ["🎓", "한국세무대학 세무학 석사"],
                  ["🏛️", "국세청 조사국 근무 (5년)"],
                  ["💼", "삼일 세무법인 시니어"],
                  ["📜", "세무사 자격증 제12345호"],
                ].map(([icon, text]) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3"
                  >
                    <span className="text-lg">{icon}</span>
                    <span className="text-sm text-foreground">{text}</span>
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

      {/* CONTACT */}
      <section id="contact" ref={contactRef} className="py-20 lg:py-28 navy-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`fade-up ${contactIn ? "visible" : ""} text-center mb-12`}>
            <p className="text-xs tracking-[3px] text-primary font-medium mb-3">CONSULTATION</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">무료 상담 신청</h2>
            <div className="accent-bar mx-auto mb-6" />
            <p className="text-muted-foreground">
              첫 상담은 무료입니다. 24시간 이내 연락드리겠습니다.
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
                무료 상담 신청하기
              </button>

              <p className="text-[11px] text-muted-foreground/40 text-center">
                입력하신 정보는 상담 목적으로만 사용되며 안전하게 보호됩니다.
              </p>
            </div>
          )}

          <div className={`fade-up delay-2 ${contactIn ? "visible" : ""} grid grid-cols-3 gap-3 mt-8`}>
            {[
              ["📞", "전화", "02-1234-5678"],
              ["📧", "이메일", "tax@example.com"],
              ["📍", "위치", "강남구 테헤란로 123"],
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
            이준혁 세무사 사무소 | 사업자등록번호: 123-45-67890 | 서울 강남구 테헤란로 123
          </p>
          <p className="text-xs text-muted-foreground/50">
            © 2025 이준혁 세무사 사무소. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
