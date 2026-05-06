import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

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

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <div className="flex flex-col items-center gap-1">
              <a
                href="https://trk.ppdu.ru/click/Ux7hwE3U?erid=CQH36pWzJqVGXC5oLP8WVVNCNqJmbhiUPijGiu4zpwPd7G"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-orange-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-200"
              >
                Яндекс Еда
              </a>
              <span className="text-xs text-gray-400">Реклама · erid: CQH36pWzJqVGXC5oLP8WVVNCNqJmbhiUPijGiu4zpwPd7G</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <a
                href="https://trk.ppdu.ru/click?uid=328338&oid=1248&erid=2SDnjekBvAd&sub1=lending&landingId=73&siteId=21430"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-green-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-200"
              >
                ВкусВилл — Велокурьер
              </a>
              <span className="text-xs text-gray-400">Реклама · erid: 2SDnjekBvAd</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <a
                href="https://trk.ppdu.ru/click?uid=328338&oid=1248&erid=2SDnjekBvAd&sub1=lending&siteId=21430"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-green-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-200"
              >
                ВкусВилл — Автокурьер
              </a>
              <span className="text-xs text-gray-400">Реклама · erid: 2SDnjekBvAd</span>
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