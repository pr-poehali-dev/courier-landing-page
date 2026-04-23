import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useInView } from "./useInView";
import { STEPS, FAQ_ITEMS } from "./data";

export function ProcessSection() {
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

export function FaqSection() {
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
