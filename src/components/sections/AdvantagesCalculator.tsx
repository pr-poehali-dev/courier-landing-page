import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useInView } from "./useInView";
import { ADVANTAGES, REGIONS } from "./data";

export function AdvantagesSection() {
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

export function CalculatorSection() {
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
