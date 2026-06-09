import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function Resultados() {
  return (
    <div className="pt-24">
      <section className="py-20 px-6 text-center bg-gradient-to-b from-crema to-crema-oscura">
        <p className="text-sm uppercase tracking-[0.2em] text-verde-medio mb-4">Resultados</p>
        <h1 className="font-display text-5xl md:text-6xl text-verde-oscuro max-w-2xl mx-auto mb-6">Lo que dicen quienes transitaron el proceso</h1>
        <p className="text-texto/60 max-w-lg mx-auto">Cada historia es única. Lo que comparten es haber decidido dar un paso.</p>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {siteData.testimonios.map((t) => (
            <div key={t.nombre} className="bg-crema-oscura border border-crema-oscura rounded-2xl p-8">
              <p className="font-display text-xl italic text-texto/80 leading-relaxed mb-8">"{t.texto}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-verde-claro flex items-center justify-center text-verde-oscuro text-xs font-medium flex-shrink-0">
                  {t.nombre.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-medium text-verde-oscuro">{t.nombre}</p>
                  <p className="text-xs text-texto/50">{t.cargo}{t.empresa ? ` · ${t.empresa}` : ''}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-verde-oscuro text-crema py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: '+200', label: 'Sesiones realizadas' },
              { n: '+40', label: 'Empresas acompañadas' },
              { n: '10+', label: 'Años de experiencia' },
              { n: '98%', label: 'Clientes satisfechos' },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-display text-5xl md:text-6xl text-crema mb-2">{item.n}</p>
                <p className="text-sm text-crema/50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-crema-oscura">
        <h2 className="font-display text-4xl text-verde-oscuro mb-4">¿Querés ser parte del próximo proceso?</h2>
        <p className="text-texto/60 mb-8 max-w-sm mx-auto text-sm">Hablemos y encontremos juntos el camino que tiene sentido para vos.</p>
        <Link to="/contacto" className="inline-flex items-center gap-2 bg-verde-oscuro text-crema text-sm px-8 py-3.5 rounded-full hover:bg-verde-medio transition-colors">
          Contactar a Sofía <ArrowRight size={15} />
        </Link>
      </section>
    </div>
  )
}
