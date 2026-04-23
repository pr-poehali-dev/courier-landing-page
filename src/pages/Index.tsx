import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

// ─── Data ────────────────────────────────────────────────────────────────────

const REGIONS = [
  { name: "Москва", base: 95000 },
  { name: "Петербург", base: 82000 },
  { name: "Краснодар", base: 68000 },
  { name: "Екатеринбург", base: 74000 },
  { name: "Казань", base: 70000 },
  { name: "Новосибирск", base: 72000 },
  { name: "Ростов", base: 66000 },
  { name: "Нижний Новгород", base: 68000 },
];

const ADVANTAGES = [
  {
    icon: "Zap",
    title: "Быстрые выплаты",
    desc: "Деньги на карту за 15 минут. Хоть каждый день, без комиссий и задержек.",
    accent: "#F5620F",
    bg: "#FFF4EE",
  },
  {
    icon: "Clock",
    title: "Гибкий график",
    desc: "Работаете когда хотите — утром, вечером или в выходные. Никаких обязательств.",
    accent: "#2DB356",
    bg: "#EDF9F1",
  },
  {
    icon: "MapPin",
    title: "Рядом с домом",
    desc: "Выбираете зону доставки сами. Берёте заказы в своём районе, знакомых улицах.",
    accent: "#F5620F",
    bg: "#FFF4EE",
  },
  {
    icon: "Shield",
    title: "Страховка и поддержка",
    desc: "Страхование на маршруте и живая поддержка 24/7. Вы не одни на дороге.",
    accent: "#2DB356",
    bg: "#EDF9F1",
  },
  {
    icon: "TrendingUp",
    title: "Бонусы и рост",
    desc: "Система рейтинга — чем выше оценка, тем больше выгодных заказов и бонусов.",
    accent: "#F5620F",
    bg: "#FFF4EE",
  },
  {
    icon: "Package",
    title: "Своё оборудование",
    desc: "Работаете на своём транспорте или арендуете наш электровелосипед по льготной ставке.",
    accent: "#2DB356",
    bg: "#EDF9F1",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Оставьте заявку",
    desc: "Заполните простую форму за 2 минуты. Паспорт и телефон — всё что нужно.",
  },
  {
    num: "02",
    title: "Пройдите инструктаж",
    desc: "30-минутное видео по безопасности и правилам. Смотрите в любое удобное время.",
  },
  {
    num: "03",
    title: "Получите приложение",
    desc: "Аккаунт создаётся за час. Скачиваете приложение — и сразу видите заказы.",
  },
  {
    num: "04",
    title: "Начинайте зарабатывать",
    desc: "Первый заказ — первые деньги. Выплата уже через 15 минут после выполнения.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Нужен ли опыт работы курьером?",
    a: "Нет, опыт не нужен. Мы обучаем всему сами через онлайн-инструктаж. Главное — желание работать и смартфон.",
  },
  {
    q: "Какой транспорт подходит?",
    a: "Любой: пешком, велосипед, самокат, мотоцикл, автомобиль. Для каждого транспорта — своя категория заказов и ставки.",
  },
  {
    q: "Как часто можно выводить деньги?",
    a: "Хоть каждый день. Минимальная сумма вывода — 500 ₽. Деньги приходят на карту за 15 минут.",
  },
  {
    q: "Можно ли совмещать с основной работой?",
    a: "Да, именно для этого мы создали гибкий график. Многие курьеры работают по вечерам или в выходные как дополнительный доход.",
  },
  {
    q: "Есть ли возрастные ограничения?",
    a: "Принимаем курьеров от 18 лет. Верхней границы нет — главное желание и возможность выполнять заказы.",
  },
  {
    q: "Что делать если клиент недоволен?",
    a: "Наша поддержка работает 24/7. Разбираем каждый спорный случай индивидуально и защищаем курьеров от необоснованных претензий.",
  },
];

// ─── Hook ────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
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
        <button className="bg-brand-orange text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-orange-600 transition-colors">
          Стать курьером
        </button>
      </div>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
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
            <span className="text-brand-orange">ОТ 80 000 ₽</span><br />
            В МЕСЯЦ
          </h1>

          <p className="text-lg text-gray-600 max-w-md leading-relaxed animate-fade-up delay-200">
            Работа курьером с гибким графиком, быстрыми выплатами и реальной поддержкой. Начни уже сегодня.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <button className="bg-brand-orange text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-orange-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-200">
              Стать курьером бесплатно
            </button>
            <button className="flex items-center justify-center gap-2 text-brand-dark font-semibold text-base px-6 py-4 rounded-2xl border-2 border-gray-200 hover:border-brand-orange/40 transition-colors">
              <Icon name="Play" size={18} className="text-brand-orange" />
              Как это работает
            </button>
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

// ─── Advantages ──────────────────────────────────────────────────────────────

function AdvantagesSection() {
  const { ref, inView } = useInView();

  return (
    <section id="advantages" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <span className="inline-block bg-brand-orange/10 text-brand-orange font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Почему мы
          </span>
          <h2 className="font-display text-5xl font-bold text-brand-dark tracking-tight">
            РАБОТАТЬ С НАМИ — ВЫГОДНО
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Мы думаем о курьере, а не только о заказе. Вот что делает нас другими.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv, i) => (
            <div
              key={adv.title}
              className={`rounded-2xl p-6 hover-lift cursor-default ${inView ? "animate-fade-up" : "opacity-0"}`}
              style={{ backgroundColor: adv.bg, animationDelay: `${i * 100}ms` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: adv.accent + "20" }}
              >
                <Icon name={adv.icon} fallback="Star" size={22} style={{ color: adv.accent }} />
              </div>
              <h3 className="font-display text-xl font-semibold text-brand-dark mb-2">{adv.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Calculator ──────────────────────────────────────────────────────────────

function CalculatorSection() {
  const { ref, inView } = useInView();
  const [regionIdx, setRegionIdx] = useState(0);
  const [hours, setHours] = useState(6);
  const [days, setDays] = useState(20);

  const region = REGIONS[regionIdx];
  const fullTimeHours = 8 * 22;
  const userHours = hours * days;
  const earned = Math.round(region.base * (userHours / fullTimeHours));
  const earnedFormatted = earned.toLocaleString("ru-RU");
  const perDay = Math.round(earned / days).toLocaleString("ru-RU");

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="https://cdn.poehali.dev/projects/698e1e53-b7e8-42df-8427-f4dff6b68240/files/25dabbb6-f84f-49b7-bde8-c2deaa3d3e8c.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/90 to-brand-dark/80 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className={`text-center mb-12 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <span className="inline-block bg-brand-orange/20 text-brand-orange font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Калькулятор заработка
          </span>
          <h2 className="font-display text-5xl font-bold text-white tracking-tight">
            ПОСЧИТАЙ СВОЙ ДОХОД
          </h2>
          <p className="text-gray-400 text-lg mt-4">Настрой под себя и узнай, сколько ты можешь заработать</p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 ${inView ? "animate-fade-up delay-200" : "opacity-0"}`}>
          {/* Controls */}
          <div className="lg:col-span-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-8">
            {/* Region */}
            <div>
              <label className="font-semibold text-white text-sm mb-3 block">Регион работы</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {REGIONS.map((r, i) => (
                  <button
                    key={r.name}
                    onClick={() => setRegionIdx(i)}
                    className={`text-xs font-medium px-3 py-2.5 rounded-xl transition-all duration-200 ${
                      i === regionIdx
                        ? "bg-brand-orange text-white shadow-lg"
                        : "bg-white/8 text-gray-400 hover:bg-white/15 hover:text-white border border-white/10"
                    }`}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Hours slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-semibold text-white text-sm">Часов в день</label>
                <span className="font-display text-xl font-bold text-brand-orange">{hours} ч</span>
              </div>
              <input
                type="range" min={2} max={12} step={1} value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full"
                style={{ background: `linear-gradient(to right, #F5620F ${((hours - 2) / 10) * 100}%, #374151 ${((hours - 2) / 10) * 100}%)` }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>2 часа</span><span>12 часов</span>
              </div>
            </div>

            {/* Days slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-semibold text-white text-sm">Дней в месяц</label>
                <span className="font-display text-xl font-bold text-brand-orange">{days} дн</span>
              </div>
              <input
                type="range" min={5} max={28} step={1} value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full"
                style={{ background: `linear-gradient(to right, #F5620F ${((days - 5) / 23) * 100}%, #374151 ${((days - 5) / 23) * 100}%)` }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>5 дней</span><span>28 дней</span>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-brand-orange rounded-3xl p-8 flex-1 flex flex-col justify-center text-center">
              <div className="text-orange-100 text-sm font-medium mb-2">Ваш доход в месяц</div>
              <div className="font-display text-5xl font-bold text-white mb-1 leading-none">{earnedFormatted}</div>
              <div className="font-display text-3xl font-bold text-orange-200 mb-4">₽</div>
              <div className="w-full h-px bg-white/20 mb-4" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-display text-2xl font-bold text-white">{perDay}</div>
                  <div className="text-xs text-orange-100 mt-0.5">₽ в день</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-white">{hours * days}</div>
                  <div className="text-xs text-orange-100 mt-0.5">часов итого</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
              <div className="text-gray-400 text-xs mb-1">Средний доход в {region.name}</div>
              <div className="font-display text-2xl font-bold text-white">{region.base.toLocaleString("ru-RU")} ₽</div>
              <div className="text-gray-500 text-xs mt-1">при полной занятости</div>
            </div>

            <button className="w-full bg-brand-green text-white font-bold text-sm py-4 rounded-2xl hover:bg-green-600 transition-colors">
              Начать зарабатывать →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Process ─────────────────────────────────────────────────────────────────

function ProcessSection() {
  const { ref, inView } = useInView();

  return (
    <section id="process" className="py-24 bg-brand-gray" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <span className="inline-block bg-brand-green/10 text-brand-green font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Как начать
          </span>
          <h2 className="font-display text-5xl font-bold text-brand-dark tracking-tight">
            4 ШАГА ДО ПЕРВОГО ЗАКАЗА
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">От регистрации до первых денег — меньше суток</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-brand-orange via-brand-orange to-brand-green" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`relative ${inView ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="flex lg:justify-center mb-6">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center font-display text-3xl font-bold text-white shadow-lg"
                    style={{
                      background: i < 2 ? "#F5620F" : "#2DB356",
                      boxShadow: i < 2 ? "0 8px 24px rgba(245,98,15,0.3)" : "0 8px 24px rgba(45,179,86,0.3)"
                    }}
                  >
                    {step.num}
                  </div>
                </div>
                <div className="lg:text-center">
                  <h3 className="font-display text-xl font-semibold text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center mt-14 ${inView ? "animate-fade-up delay-500" : "opacity-0"}`}>
          <button className="bg-brand-orange text-white font-bold text-base px-10 py-4 rounded-2xl hover:bg-orange-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-200">
            Подать заявку — это бесплатно
          </button>
          <p className="text-gray-400 text-sm mt-3">Проверка занимает менее 24 часов</p>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

function FaqSection() {
  const { ref, inView } = useInView();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <div className={`text-center mb-16 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <span className="inline-block bg-brand-orange/10 text-brand-orange font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Вопросы и ответы
          </span>
          <h2 className="font-display text-5xl font-bold text-brand-dark tracking-tight">ЧАСТО СПРАШИВАЮТ</h2>
        </div>

        <div className={`space-y-2 ${inView ? "animate-fade-up delay-200" : "opacity-0"}`}>
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="w-full text-left flex items-center justify-between py-5 px-2 gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-brand-dark text-base">{item.q}</span>
                <div
                  className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                    open === i ? "bg-brand-orange rotate-45" : "bg-gray-100"
                  }`}
                >
                  <Icon name="Plus" size={16} className={open === i ? "text-white" : "text-gray-500"} />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-48 pb-5 px-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA + Footer ────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="py-24 bg-brand-gray">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-brand-dark rounded-3xl px-8 py-16 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-green/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <h2 className="font-display text-5xl font-bold text-white tracking-tight mb-4">ГОТОВ НАЧАТЬ?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
              Присоединяйся к 15 000+ курьеров по всей России. Первые деньги — уже завтра.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-orange text-white font-bold text-base px-10 py-4 rounded-2xl hover:bg-orange-500 transition-all hover:scale-105 shadow-xl shadow-orange-900/30">
                Стать курьером бесплатно
              </button>
              <button className="flex items-center justify-center gap-2 text-white font-semibold text-base px-8 py-4 rounded-2xl border-2 border-white/20 hover:border-white/40 transition-colors">
                <Icon name="MessageCircle" size={18} />
                Задать вопрос
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-dark py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-display text-xl font-bold text-white">
          Курьер<span className="text-brand-orange">Про</span>
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-300 transition-colors">Конфиденциальность</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Условия работы</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Контакты</a>
        </div>
        <div className="text-xs text-gray-600">© 2026 КурьерПро</div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AdvantagesSection />
      <CalculatorSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}