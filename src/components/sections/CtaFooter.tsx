import Icon from "@/components/ui/icon";

export function CtaSection() {
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

export function Footer() {
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
