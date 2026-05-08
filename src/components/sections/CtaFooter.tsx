import Icon from "@/components/ui/icon";
import { PARTNER_LINKS } from "./data";

const ALL_RUSSIA = PARTNER_LINKS.filter((p) => !p.moscowOnly);
const MOSCOW_ONLY = PARTNER_LINKS.filter((p) => p.moscowOnly);

function CtaBtn({ p }: { p: typeof PARTNER_LINKS[number] }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 text-white font-bold text-base px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-xl"
        style={{ backgroundColor: p.color, boxShadow: `0 8px 24px ${p.color}40` }}
      >
        <span>{p.icon}</span>
        {p.brand} — {p.label}
      </a>
      <span className="text-xs text-gray-500">Реклама · erid: {p.erid}</span>
    </div>
  );
}

export function CtaSection() {
  return (
    <section className="py-24 bg-brand-gray">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-brand-dark rounded-3xl px-8 py-16 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-green/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative space-y-8">
            <div>
              <h2 className="font-display text-5xl font-bold text-white tracking-tight mb-4">ГОТОВ НАЧАТЬ?</h2>
              <p className="text-gray-400 text-lg max-w-md mx-auto">
                Присоединяйся к 15 000+ курьеров по всей России. Первые деньги — уже завтра.
              </p>
            </div>

            {/* Все регионы */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Все регионы России</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                {ALL_RUSSIA.map((p) => <CtaBtn key={p.id} p={p} />)}
              </div>
            </div>

            {/* Только Москва и МО */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Icon name="MapPin" size={13} className="text-rose-400" />
                <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest">Только Москва и Московская область</p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                {MOSCOW_ONLY.map((p) => <CtaBtn key={p.id} p={p} />)}
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <a
                href="#faq"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base px-8 py-4 rounded-2xl border-2 border-white/20 hover:border-white/40 transition-colors"
              >
                <Icon name="HelpCircle" size={18} />
                Часто задаваемые вопросы
              </a>
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
      <div className="max-w-6xl mx-auto px-6 flex justify-center">
        <div className="text-xs text-gray-600">© 2026 КурьерПро</div>
      </div>
    </footer>
  );
}