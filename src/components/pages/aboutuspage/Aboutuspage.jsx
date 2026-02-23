import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { num: "500+", label: "Brands Served" },
  { num: "1000+", label: "Media Placements" },
  { num: "50+", label: "Expert Team" },
  { num: "98%", label: "Client Satisfaction" },
];

const highlights = [
  { icon: "📡", title: "Pan-India Media Network", desc: "Deep relationships with top journalists, editors, and media houses across print, digital, and broadcast." },
  { icon: "🎯", title: "Strategy-First Approach", desc: "Every campaign begins with a thorough understanding of your brand, audience, and goals." },
  { icon: "📊", title: "Measurable ROI", desc: "We track every placement, mention, and impression to demonstrate real value for your investment." },
];

const purposeCards = [
  { icon: "🎯", title: "Our Mission", border: "border-t-blue-700", desc: "To deliver strategic, impactful, and measurable public relations solutions that help Indian businesses build brand credibility, strengthen media presence, and achieve sustained growth." },
  { icon: "🔭", title: "Our Vision", border: "border-t-yellow-500", desc: "To be India's most trusted and result-driven PR agency — recognized for transforming brands through authentic storytelling and innovative communication strategies." },
  { icon: "🤝", title: "Our Promise", border: "border-t-green-500", desc: "Every client is a long-term partner. We commit to transparency, consistent communication, and delivering results that go beyond press releases." },
  { icon: "💡", title: "Our Approach", border: "border-t-purple-500", desc: "We blend creativity with data-backed strategy. From media pitching to crisis communication, our approach is always proactive, personalized, and powered by genuine insights." },
];

const values = [
  { icon: "✅", title: "Integrity", desc: "Honest, transparent communication — with our clients and with the media." },
  { icon: "🚀", title: "Innovation", desc: "Constantly evolving strategies to stay ahead of media trends and audience behaviors." },
  { icon: "🏅", title: "Excellence", desc: "Highest standards in every press release, pitch, and campaign we run." },
  { icon: "🤝", title: "Partnership", desc: "Your success is our success. We work as an extension of your team." },
  { icon: "📊", title: "Results-Driven", desc: "We measure outcomes that matter to your business, not just outputs." },
  { icon: "🌐", title: "Reach", desc: "Extensive media network across India to reach the right audience." },
];

const whyUs = [
  { num: "01", title: "Pan-India Media Relationships", desc: "Strong relationships with 500+ journalists, bloggers, and editors across national and regional media." },
  { num: "02", title: "Industry-Specific Expertise", desc: "Deep domain knowledge across 15+ industries — from startups to corporates, tech to healthcare." },
  { num: "03", title: "End-to-End PR Services", desc: "Press release writing to ORM, event PR to crisis management — your one-stop PR solution." },
  { num: "04", title: "Transparent Reporting", desc: "Real-time dashboards and monthly reports so you always know where your investment is going." },
  { num: "05", title: "Fast Turnaround Time", desc: "Agile team ensures quick execution — from concept to coverage — without compromising quality." },
  { num: "06", title: "Affordable, Scalable Packages", desc: "Flexible PR packages designed to grow with your business — startup to enterprise." },
];

const achievements = [
  { icon: "🏢", num: "500+", label: "Brands Successfully Represented" },
  { icon: "📰", num: "1000+", label: "Media Placements Secured" },
  { icon: "🌐", num: "200+", label: "Media Outlets Partnered" },
  { icon: "⭐", num: "98%", label: "Client Retention Rate" },
];

const testimonials = [
  { initials: "RK", text: "PRX India completely transformed our brand's media presence. Within 3 months, we were featured in 20+ leading publications. Their team is professional, proactive, and truly understands our industry.", name: "Rajesh Kumar", role: "CEO, TechStart India" },
  { initials: "PS", text: "The team handled our product launch PR flawlessly — from press release writing to media pitching. We got coverage in all the top business dailies. Highly recommend PRX India!", name: "Priya Sharma", role: "Founder, HealthPlus Wellness" },
  { initials: "AM", text: "PRX India's crisis management team saved our brand's reputation during a critical time. Their quick thinking and media connections made all the difference.", name: "Ankit Mehta", role: "Director, Retail Empire Group" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const SectionTag = ({ children, light = false }) => (
  <span className={`inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3 ${light ? "bg-white/10 text-blue-200" : "bg-blue-50 text-blue-700"}`}>
    {children}
  </span>
);

const FadeUp = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <>
      <Helmet>
        <title>About PRX India | India's Leading PR & Brand Building Agency</title>
        <meta name="description" content="PRX India is a premier Public Relations agency dedicated to building powerful brands, managing corporate reputation, and driving media visibility across India." />
        <meta name="keywords" content="PRX India, PR agency India, public relations company, brand building India, media relations, press release distribution, ORM, corporate communications, reputation management India" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://prxindia.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prxindia.com/about" />
        <meta property="og:title" content="About PRX India | PR That Builds Brands" />
        <meta property="og:description" content="India's trusted PR agency for corporate communications, brand reputation, and media outreach." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PRX India",
            "url": "https://prxindia.com",
            "description": "PRX India is a leading Public Relations agency in India specializing in brand building, media relations, corporate communications, and reputation management.",
            "foundingDate": "2023",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9211986515",
              "contactType": "Customer Support",
              "email": "Info@prxindia.com"
            }
          }
        `}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2463] via-[#1e50a2] to-[#3a7bd5] py-24 px-6 text-center">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-sm text-blue-200 mb-4">
            <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link> › <span className="text-white">About Us</span>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            PR That <span className="text-yellow-400">Builds Brands.</span><br />Reputation That Lasts.
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            PRX India is India's trusted Public Relations partner — helping businesses amplify their voice, build credibility, and grow their brand story across every media channel.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-4xl font-extrabold text-yellow-400 leading-none">{s.num}</div>
                <div className="text-xs text-blue-200 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0a2463] to-[#3a7bd5] rounded-2xl h-96 flex flex-col items-center justify-center p-10 text-center shadow-2xl">
                <div className="text-7xl mb-5">🏆</div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">PRX India</h3>
                <p className="text-blue-200 text-sm leading-relaxed">Driving brand visibility through strategic PR, media relations, and corporate communications across India and beyond.</p>
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-yellow-400 flex flex-col items-center justify-center text-[#0a2463] font-extrabold text-center shadow-xl shadow-yellow-300/40">
                <span className="font-serif text-2xl leading-none">2+</span>
                <span className="text-xs leading-tight mt-0.5">Years of<br />Excellence</span>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={150}>
            <SectionTag>Who We Are</SectionTag>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0a2463] leading-snug mb-4">
              India's Premier <span className="text-[#3a7bd5]">Public Relations</span> Agency
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              PRX India was founded with one clear purpose — to help businesses build a powerful, credible presence in today's competitive media landscape. We are a full-service PR agency that combines strategic thinking with creative storytelling to deliver measurable results.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              From startups to established corporations, PRX India delivers tailored PR solutions that create lasting impact. Our approach is data-driven, relationship-focused, and results-oriented.
            </p>
            <div className="flex flex-col gap-4">
              {highlights.map((h) => (
                <div key={h.title} className="flex items-start gap-4 bg-slate-50 border-l-4 border-blue-400 rounded-xl px-5 py-4">
                  <span className="text-2xl mt-0.5 flex-shrink-0">{h.icon}</span>
                  <div>
                    <strong className="block text-[#0a2463] text-sm font-semibold mb-0.5">{h.title}</strong>
                    <p className="text-slate-500 text-sm">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── MISSION / VISION ── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <SectionTag>Our Purpose</SectionTag>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0a2463]">
            Mission, Vision & <span className="text-[#3a7bd5]">Core Values</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
          {purposeCards.map((c, i) => (
            <FadeUp key={c.title} delay={i * 100}>
              <div className={`bg-white rounded-2xl p-8 border border-slate-100 border-t-4 ${c.border} shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 h-full`}>
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-serif text-xl font-bold text-[#0a2463] mb-3">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <SectionTag>What We Stand For</SectionTag>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0a2463]">
            The Values That <span className="text-[#3a7bd5]">Drive Us</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <FadeUp key={v.title} delay={i * 80}>
              <div className="group bg-slate-50 border border-slate-100 rounded-2xl p-7 text-center hover:bg-[#0a2463] transition-all duration-300 cursor-default h-full">
                <div className="w-14 h-14 rounded-xl bg-blue-50 group-hover:bg-white/10 flex items-center justify-center text-2xl mx-auto mb-4 transition-colors">{v.icon}</div>
                <h4 className="font-bold text-[#0a2463] group-hover:text-white mb-2 transition-colors">{v.title}</h4>
                <p className="text-sm text-slate-500 group-hover:text-blue-100 leading-relaxed transition-colors">{v.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 px-6 bg-[#0a2463]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionTag light>Why PRX India</SectionTag>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Why Brands Choose <span className="text-yellow-400">PRX India</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {whyUs.map((w, i) => (
              <FadeUp key={w.num} delay={i * 80}>
                <div className="flex gap-5 items-start bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 h-full">
                  <span className="font-serif text-4xl font-extrabold text-yellow-400 leading-none w-12 flex-shrink-0">{w.num}</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1.5">{w.title}</h4>
                    <p className="text-blue-200 text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <SectionTag>Our Impact</SectionTag>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0a2463]">
            Achievements That <span className="text-[#3a7bd5]">Speak for Themselves</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => (
            <FadeUp key={a.label} delay={i * 100}>
              <div className="bg-white rounded-2xl p-7 text-center border border-slate-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-3">{a.icon}</div>
                <div className="font-serif text-4xl font-extrabold text-[#1e50a2] leading-none">{a.num}</div>
                <div className="text-sm text-slate-500 mt-2 font-medium">{a.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <SectionTag>Client Stories</SectionTag>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0a2463]">
            What Our <span className="text-[#3a7bd5]">Clients Say</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 100}>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-7 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <div className="font-serif text-6xl text-blue-300/40 leading-none mb-1">"</div>
                <div className="text-yellow-400 tracking-widest text-sm mb-3">★★★★★</div>
                <p className="text-slate-500 text-sm leading-relaxed italic flex-1 mb-5">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1e50a2] to-[#3a7bd5] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{t.initials}</div>
                  <div>
                    <div className="font-bold text-sm text-[#0a2463]">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0a2463] to-[#1e50a2] text-center">
        <div className="max-w-2xl mx-auto">
          <SectionTag light>Let's Connect</SectionTag>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your <span className="text-yellow-400">Brand Story?</span>
          </h2>
          <p className="text-blue-200 text-base mb-10 leading-relaxed">
            Partner with PRX India and let us craft a PR strategy that puts your brand in front of the right audience — at the right time, through the right channels.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-yellow-400 text-[#0a2463] font-bold px-8 py-3.5 rounded-lg hover:bg-yellow-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300">
              Get Free Consultation
            </Link>
            <Link to="/contact" className="border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}