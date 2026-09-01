import React from 'react';
import { Code2, Activity, Utensils } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-8 sm:space-y-10 animate-fadeIn max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-playful">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-cream-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-charcoal-800">
            <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse"></span>
            <span>Välkommen till mitt hörn på internet</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-charcoal-800 tracking-tight leading-[1.15]">
            Hej! Jag heter <span className="text-terracotta-600 underline decoration-terracotta-200 decoration-wavy decoration-2">Mikael</span>.
          </h1>

          <p className="text-base sm:text-2xl text-charcoal-800/85 leading-relaxed font-normal">
            Jag är en mjukvaruutvecklare med stor passion för <span className="font-semibold text-charcoal-900">löpning</span>, <span className="font-semibold text-charcoal-900">teknik</span> och <span className="font-semibold text-charcoal-900">god mat</span>.
          </p>
        </div>

        {/* Decorative background avatar icon */}
        <div className="absolute right-6 -bottom-6 text-8xl sm:text-9xl opacity-10 pointer-events-none select-none">
          👨‍💻
        </div>
      </section>

      {/* Three Passion Pillars: Tech, Running & Food */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Utveckling & Kod */}
        <div className="bg-white rounded-3xl p-7 border border-cream-300 shadow-playful flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-playful-sm">
              <Code2 className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl font-bold text-charcoal-800">
              Teknik & Kod
            </h2>
            <p className="text-sm text-charcoal-800/75 leading-relaxed">
              Jag skriver framförallt kod i C# och .NET för robusta backend-lösningar och distribuerade system, kombinerat med modern frontend i TypeScript och React.
            </p>
          </div>

          <div className="pt-4 border-t border-cream-200 flex items-center gap-2 text-xs font-semibold text-amber-800">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>C#, .NET, TypeScript & Cloud</span>
          </div>
        </div>

        {/* Löpning & Träning */}
        <div className="bg-white rounded-3xl p-7 border border-cream-300 shadow-playful flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sage-100 text-sage-700 flex items-center justify-center shadow-playful-sm">
              <Activity className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl font-bold text-charcoal-800">
              Löpning & Träning
            </h2>
            <p className="text-sm text-charcoal-800/75 leading-relaxed">
              Långdistanslöpning är en stor del av vardagen. Allt från sköna återhämtningsrundor i skogen till målinriktad maratonträning.
            </p>
          </div>

          <div className="pt-4 border-t border-cream-200 flex items-center gap-2 text-xs font-semibold text-sage-800">
            <span className="w-2 h-2 rounded-full bg-sage-500"></span>
            <span>Halvmaraton, maraton & stig</span>
          </div>
        </div>

        {/* God Mat */}
        <div className="bg-white rounded-3xl p-7 border border-cream-300 shadow-playful flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-terracotta-100 text-terracotta-700 flex items-center justify-center shadow-playful-sm">
              <Utensils className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl font-bold text-charcoal-800">
              God Mat
            </h2>
            <p className="text-sm text-charcoal-800/75 leading-relaxed">
              Passion för vällagad mat, goda råvaror, vardagsfavoriter och helglyxiga smakupplevelser från grunden.
            </p>
          </div>

          <div className="pt-4 border-t border-cream-200 flex items-center gap-2 text-xs font-semibold text-terracotta-700">
            <span className="w-2 h-2 rounded-full bg-terracotta-500"></span>
            <span>Köksexperiment & smaker</span>
          </div>
        </div>
      </section>
    </div>
  );
};
