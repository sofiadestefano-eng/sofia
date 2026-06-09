import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { siteData } from '../data/siteData'

import heroImg from '../assets/hero.jpg'

export default function Home() {
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16 relative overflow-hidden">
        {/* Background image at 20% opacity */}
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-80" />
        </div>
        {/* Gradient overlay to blend with site colors */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-crema/60 to-crema-oscura/80"></div>

        <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.2em] text-verde-medio mb-6">Coaching · Transformación · Propósito</p>
          <h1 className="font-display text-5xl md:text-7xl font-medium text-verde-oscuro leading-tight max-w-3xl mb-6 text-balance">
            Coaching para líderes
          </h1>
          <p className="text-lg text-texto/60 max-w-xl leading-relaxed mb-10">
            Trabajo con personas y organizaciones en procesos de cambio genuino, desde el autoconocimiento y la acción consciente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link to="/contacto" className="bg-verde-oscuro text-crema px-8 py-3.5 rounded-full text-sm hover:bg-verde-medio transition-colors duration-200 flex items-center gap-2">
              Agendá una sesión <ArrowRight size={16} />
            </Link>
            <Link to="/servicios" className="text-sm text-texto/60 hover:text-verde-oscuro transition-colors border border-texto/20 px-8 py-3.5 rounded-full">
              Ver servicios
            </Link>
          </div>
        </div>
        <a href="#servicios" className="relative z-10 mt-16 text-texto/30 hover:text-texto/60 transition-colors animate-bounce" aria-label="Seguir">
          <ChevronDown size={24} />
        </a>
      </section>

      <section id="servicios" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-verde-medio mb-3">¿Con quién trabajo?</p>
          <h2 className="font-display text-4xl md:text-5xl text-verde-oscuro">Dos caminos, un mismo norte</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {siteData.servicios.map((s) => (
            <div key={s.id} className="bg-white/60 border border-crema-oscura rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
              <p className="text-xs uppercase tracking-widest text-verde-medio mb-2">{s.subtitulo}</p>
              <h3 className="font-display text-3xl text-verde-oscuro mb-4">{s.titulo}</h3>
              <p className="text-texto/60 text-sm leading-relaxed mb-6">{s.descripcion}</p>
              <ul className="space-y-2 mb-8">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-texto/70 flex items-start gap-2">
                    <span className="text-verde-suave mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>
              <Link to="/servicios" className="text-sm text-verde-oscuro font-medium hover:underline flex items-center gap-1">
                {s.cta} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-verde-oscuro text-crema py-20 px-6 text-center">
        <blockquote className="font-display text-3xl md:text-4xl italic max-w-2xl mx-auto leading-relaxed opacity-90">
          "El cambio no comienza afuera. Comienza cuando decidís mirarte sin miedo."
        </blockquote>
        <p className="mt-6 text-crema/50 text-sm">— Sofía Destefano</p>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-verde-medio mb-3">Lo que dicen</p>
          <h2 className="font-display text-4xl md:text-5xl text-verde-oscuro">Resultados reales</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {siteData.testimonios.slice(0, 2).map((t) => (
            <div key={t.nombre} className="bg-crema-oscura rounded-2xl p-8 border border-crema-oscura">
              <p className="font-display text-xl italic text-texto/80 leading-relaxed mb-6">"{t.texto}"</p>
              <div>
                <p className="text-sm font-medium text-verde-oscuro">{t.nombre}</p>
                <p className="text-xs text-texto/50">{t.cargo}{t.empresa ? ` · ${t.empresa}` : ''}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/resultados" className="text-sm text-verde-oscuro border border-verde-oscuro px-6 py-2.5 rounded-full hover:bg-verde-oscuro hover:text-crema transition-all duration-200">
            Ver todos los testimonios
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-crema-oscura text-center">
        <h2 className="font-display text-4xl md:text-5xl text-verde-oscuro mb-4">¿Listo/a para empezar?</h2>
        <p className="text-texto/60 mb-8 max-w-md mx-auto">Una conversación sin compromiso puede ser el primer paso de algo grande.</p>
        <Link to="/contacto" className="bg-verde-oscuro text-crema px-8 py-3.5 rounded-full text-sm hover:bg-verde-medio transition-colors duration-200 inline-flex items-center gap-2">
          Escribime <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  )
}
