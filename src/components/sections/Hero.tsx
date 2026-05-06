import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { PARTNER_LINKS } from "@/components/sections/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <span className="text-2xl font-display font-bold text-brand-dark tracking-tight">
          Курьер<span className="text-brand-orange">Про</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#advantages" className="hover:text-brand-orange transition-colors">Преимущества</a>
          <a href="#process" className="hover:text-brand-orange transition-colors">Как начать</a>
          <a href="#faq" className="hover:text-brand-orange transition-colors">FAQ</a>
        </div>
        <a href="#top" className="bg-brand-orange text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-orange-600 transition-colors">
          Стать курьером
        </a>
      </div>
    </nav>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg pt-16">
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-brand-green/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-white border border-brand-orange/20 rounded-full px-4 py-2 text-sm font-medium text-brand-orange shadow-sm animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse inline-block" />
            Набор открыт во всех регионах
          </div>

          <h1 className="font-display text-6xl lg:text-7xl font-bold text-brand-dark leading-[0.95] tracking-tight animate-fade-up delay-100">
            ЗАРАБАТЫВАЙ<br />
            <span className="text-brand-orange">ОТ 120 000 ₽</span><br />
            В МЕСЯЦ
          </h1>

          <p className="text-lg text-gray-600 max-w-md leading-relaxed animate-fade-up delay-200">
            Работа курьером с гибким графиком, быстрыми выплатами и реальной поддержкой. Начни уже сегодня.
          </p>

          <div className="space-y-3 animate-fade-up delay-300">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Выбери партнёра и начни сегодня</p>
            <div className="flex flex-wrap gap-3">
              {PARTNER_LINKS.map((p) => (
                <div key={p.id} className="flex flex-col gap-1">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 bg-white border-2 rounded-2xl px-5 py-3.5 transition-all duration-200 hover:scale-105 hover:shadow-xl"
                    style={{ borderColor: p.color }}
                  >
                    <span className="text-2xl">{p.icon}</span>
                    <div className="text-left">
                      <div className="text-xs font-medium text-gray-400 leading-none mb-0.5">{p.brand}</div>
                      <div className="text-sm font-bold leading-none" style={{ color: p.color }}>{p.label}</div>
                    </div>
                    <Icon name="ArrowRight" size={16} className="ml-1 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" style={{ color: p.color }} />
                  </a>
                  <span className="text-[10px] text-gray-400 px-1">Реклама · erid: {p.erid}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-8 pt-4 animate-fade-up delay-400">
            {[
              { val: "15 000+", label: "Активных курьеров" },
              { val: "47", label: "Городов России" },
              { val: "15 мин", label: "Вывод денег" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-brand-dark">{s.val}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative animate-fade-up delay-300 hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://cdn.poehali.dev/projects/698e1e53-b7e8-42df-8427-f4dff6b68240/files/36742323-9791-4b67-b709-8bde70b8fd33.jpg"
              alt="Курьер КурьерПро"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
              <Icon name="TrendingUp" size={20} className="text-brand-green" />
            </div>
            <div>
              <div className="font-display text-lg font-bold text-brand-dark">+32%</div>
              <div className="text-xs text-gray-500">Рост дохода за месяц</div>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 bg-brand-orange text-white rounded-2xl shadow-xl p-4">
            <div className="font-display text-2xl font-bold">4.9 ★</div>
            <div className="text-xs opacity-80">Рейтинг платформы</div>
          </div>
        </div>
      </div>
    </section>
  );
}