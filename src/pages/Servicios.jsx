import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function Servicios() {
  return (
    <div className="pt-24">
      <section className="py-20 px-6 text-center bg-gradient-to-b from-crema to-crema-oscura">
        <p className="text-sm uppercase tracking-[0.2em] text-verde-medio mb-4">Servicios</p>
        <h1 className="font-display text-5xl md:text-6xl text-verde-oscuro max-w-2xl mx-auto mb-6">¿Cómo puedo acompañarte?</h1>
        <p className="text-texto/60 max-w-lg mx-auto leading-relaxed">Cada proceso es único. Trabajo tanto con empresas que buscan transformar sus equipos como con personas que quieren avanzar en su vida personal o profesional.</p>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="space-y-16">
          {siteData.servicios.map((s, i) => (
            <div key={s.id} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-start`}>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-verde-medio mb-2">{s.subtitulo}</p>
                <h2 className="font-display text-4xl text-verde-oscuro mb-4">{s.titulo}</h2>
                <p className="text-texto/60 leading-relaxed mb-8">{s.descripcion}</p>
                <ul className="space-y-3 mb-8">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-texto/70">
                      <span className="mt-0.5 p-0.5 rounded-full bg-verde-claro text-verde-oscuro flex-shrink-0"><Check size={12} /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contacto" className="inline-flex items-center gap-2 bg-verde-oscuro text-crema text-sm px-7 py-3 rounded-full hover:bg-verde-medio transition-colors">
                  {s.cta} <ArrowRight size={15} />
                </Link>
              </div>
              <div className="flex-1 bg-crema-oscura rounded-2xl p-8 md:sticky md:top-24">
                <p className="font-display text-2xl text-verde-oscuro mb-6 italic">¿Para quién es?</p>
                {s.id === 'empresas' ? (
                  <ul className="space-y-3 text-sm text-texto/70">
                    <li className="flex gap-2"><span className="text-verde-suave">—</span>Equipos de liderazgo que quieren evolucionar</li>
                    <li className="flex gap-2"><span className="text-verde-suave">—</span>Empresas en procesos de cambio o crecimiento</li>
                    <li className="flex gap-2"><span className="text-verde-suave">—</span>Organizaciones que quieren mejorar su cultura</li>
                    <li className="flex gap-2"><span className="text-verde-suave">—</span>Líderes que buscan comunicarse mejor</li>
                    <li className="flex gap-2"><span className="text-verde-suave">—</span>RRHH que acompaña transiciones internas</li>
                  </ul>
                ) : (
                  <ul className="space-y-3 text-sm text-texto/70">
                    <li className="flex gap-2"><span className="text-dorado">—</span>Personas en transición laboral o personal</li>
                    <li className="flex gap-2"><span className="text-dorado">—</span>Profesionales que buscan más claridad</li>
                    <li className="flex gap-2"><span className="text-dorado">—</span>Emprendedores que quieren crecer con foco</li>
                    <li className="flex gap-2"><span className="text-dorado">—</span>Personas que quieren conocerse mejor</li>
                    <li className="flex gap-2"><span className="text-dorado">—</span>Quienes atraviesan decisiones importantes</li>
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-verde-oscuro text-crema py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-verde-suave mb-4">Mi metodología</p>
          <h2 className="font-display text-4xl mb-8">Cómo trabajo</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-10">
            {[
              { n: '01', titulo: 'Escucho', desc: 'Empezamos por entender dónde estás, qué querés y qué te detiene.' },
              { n: '02', titulo: 'Acompaño', desc: 'Diseñamos juntos un proceso a medida, con herramientas concretas y espacio para la reflexión.' },
              { n: '03', titulo: 'Activamos', desc: 'Transformamos la conciencia en acción real y sostenible en tu vida o tu organización.' },
            ].map((paso) => (
              <div key={paso.n}>
                <p className="font-display text-5xl text-verde-suave/30 mb-3">{paso.n}</p>
                <p className="font-medium text-crema mb-2">{paso.titulo}</p>
                <p className="text-sm text-crema/60 leading-relaxed">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
