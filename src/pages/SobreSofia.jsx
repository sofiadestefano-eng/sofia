import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SobreSofia() {
  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-gradient-to-b from-crema to-crema-oscura">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-verde-medio mb-4">Sobre Sofía</p>
          <h1 className="font-display text-5xl md:text-6xl text-verde-oscuro mb-8 leading-tight">
            Creo en el poder de las conversaciones honestas
          </h1>
          <p className="text-texto/60 text-lg leading-relaxed max-w-2xl">
            Soy coach profesional, facilitadora y acompañante de procesos de cambio. Mi trabajo nace de la convicción de que cada persona tiene adentro suyo todo lo que necesita para vivir mejor.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-crema-oscura rounded-2xl aspect-[3/4] flex items-center justify-center text-texto/30 text-sm">
            [ Foto de Sofía ]
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-3xl text-verde-oscuro mb-4">Mi historia</h2>
              <p className="text-texto/60 leading-relaxed text-sm">Comencé mi camino en el coaching hace más de 10 años, luego de transitar mis propios procesos de transformación personal. Entendí que el cambio genuino no viene de afuera: viene de animarse a mirar adentro con honestidad y curiosidad.</p>
            </div>
            <p className="text-texto/60 leading-relaxed text-sm">Trabajo con herramientas del coaching ontológico, la psicología positiva y metodologías de desarrollo organizacional. Cada proceso es diferente, porque cada persona y cada equipo tiene su propio ritmo y sus propias preguntas.</p>
            <p className="text-texto/60 leading-relaxed text-sm">Mi lugar favorito de trabajo es ese espacio íntimo donde alguien decide dejar de hacer lo que ya no le funciona y se permite imaginar algo nuevo.</p>
          </div>
        </div>
      </section>

      <section className="bg-crema-oscura py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl text-verde-oscuro mb-12 text-center">Formación y credenciales</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: 'Coaching Ontológico Profesional', inst: 'Escuela de Nuevos Paradigmas', año: '2014' },
              { titulo: 'Certificación ICF — ACC', inst: 'International Coaching Federation', año: '2016' },
              { titulo: 'Facilitación de equipos', inst: 'Instituto de Formación en Liderazgo', año: '2018' },
              { titulo: 'Psicología Positiva aplicada', inst: 'Universidad de Palermo', año: '2020' },
            ].map((item) => (
              <div key={item.titulo} className="bg-white/60 rounded-xl p-6 border border-crema-oscura">
                <p className="text-xs text-verde-medio uppercase tracking-wider mb-1">{item.año}</p>
                <p className="font-medium text-texto text-sm mb-1">{item.titulo}</p>
                <p className="text-xs text-texto/50">{item.inst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="font-display text-4xl text-verde-oscuro mb-12 text-center">Lo que guía mi trabajo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { titulo: 'Presencia', desc: 'Cada sesión es un espacio exclusivo para vos, sin distracciones ni apuro.' },
            { titulo: 'Honestidad', desc: 'Trabajo con lo que hay, no con lo que se quiere escuchar.' },
            { titulo: 'Confianza', desc: 'Creo profundamente en la capacidad de cada persona para encontrar su camino.' },
          ].map((v) => (
            <div key={v.titulo} className="text-center">
              <h3 className="font-display text-2xl text-verde-oscuro mb-3">{v.titulo}</h3>
              <p className="text-sm text-texto/60 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-verde-oscuro text-crema text-center">
        <h2 className="font-display text-3xl mb-4">¿Querés conocerme un poco más?</h2>
        <p className="text-crema/60 text-sm mb-8 max-w-sm mx-auto">Una primera conversación es sin costo y sin compromiso.</p>
        <Link to="/contacto" className="inline-flex items-center gap-2 bg-crema text-verde-oscuro text-sm px-8 py-3 rounded-full hover:bg-crema-oscura transition-colors">
          Escribime <ArrowRight size={15} />
        </Link>
      </section>
    </div>
  )
}
