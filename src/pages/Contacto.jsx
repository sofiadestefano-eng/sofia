import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, MessageCircle, Mail, Instagram, Linkedin } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setEnviando(true)
    console.log('Formulario enviado:', data)
    await new Promise((r) => setTimeout(r, 1200))
    setEnviado(true)
    setEnviando(false)
    reset()
  }

  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-gradient-to-b from-crema to-crema-oscura text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-verde-medio mb-4">Contacto</p>
        <h1 className="font-display text-5xl md:text-6xl text-verde-oscuro max-w-xl mx-auto mb-4">Hablemos</h1>
        <p className="text-texto/60 max-w-md mx-auto">La primera conversación es sin costo. Contame qué estás buscando y vemos cómo puedo acompañarte.</p>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-3xl text-verde-oscuro mb-8">Enviame un mensaje</h2>
            {enviado ? (
              <div className="bg-verde-claro/40 border border-verde-claro rounded-xl p-6 text-center">
                <p className="font-display text-2xl text-verde-oscuro mb-2">¡Gracias!</p>
                <p className="text-sm text-texto/60">Recibí tu mensaje. Te voy a responder en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div>
                  <label className="block text-sm text-texto/70 mb-1.5">Nombre <span className="text-red-400">*</span></label>
                  <input type="text" placeholder="Tu nombre" className={`w-full bg-white/70 border rounded-xl px-4 py-3 text-sm outline-none focus:border-verde-medio transition-colors ${errors.nombre ? 'border-red-300' : 'border-crema-oscura'}`} {...register('nombre', { required: 'El nombre es obligatorio' })} />
                  {errors.nombre && <p className="text-xs text-red-400 mt-1">{errors.nombre.message}</p>}
                </div>
                <div>
                  <label className="block text-sm text-texto/70 mb-1.5">Email <span className="text-red-400">*</span></label>
                  <input type="email" placeholder="hola@ejemplo.com" className={`w-full bg-white/70 border rounded-xl px-4 py-3 text-sm outline-none focus:border-verde-medio transition-colors ${errors.email ? 'border-red-300' : 'border-crema-oscura'}`} {...register('email', { required: 'El email es obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' } })} />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm text-texto/70 mb-1.5">Me interesa</label>
                  <select className="w-full bg-white/70 border border-crema-oscura rounded-xl px-4 py-3 text-sm outline-none focus:border-verde-medio transition-colors text-texto/70" {...register('tipo')}>
                    <option value="">Seleccioná una opción</option>
                    <option value="personal">Coaching personal</option>
                    <option value="empresas">Coaching para mi empresa / equipo</option>
                    <option value="info">Solo quiero información</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-texto/70 mb-1.5">Mensaje <span className="text-red-400">*</span></label>
                  <textarea rows={5} placeholder="Contame un poco sobre lo que estás buscando..." className={`w-full bg-white/70 border rounded-xl px-4 py-3 text-sm outline-none focus:border-verde-medio transition-colors resize-none ${errors.mensaje ? 'border-red-300' : 'border-crema-oscura'}`} {...register('mensaje', { required: 'El mensaje es obligatorio' })} />
                  {errors.mensaje && <p className="text-xs text-red-400 mt-1">{errors.mensaje.message}</p>}
                </div>
                <button type="submit" disabled={enviando} className="w-full bg-verde-oscuro text-crema py-3.5 rounded-full text-sm flex items-center justify-center gap-2 hover:bg-verde-medio transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                  {enviando ? 'Enviando...' : <><span>Enviar mensaje</span><Send size={14} /></>}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl text-verde-oscuro mb-6">Otras formas de contactarme</h2>
              <div className="space-y-4">
                <a href={`mailto:${siteData.email}`} className="flex items-center gap-3 text-sm text-texto/70 hover:text-verde-oscuro transition-colors">
                  <span className="w-9 h-9 rounded-full bg-crema-oscura flex items-center justify-center"><Mail size={15} /></span>{siteData.email}
                </a>
                <a href={siteData.redes.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-texto/70 hover:text-verde-oscuro transition-colors">
                  <span className="w-9 h-9 rounded-full bg-crema-oscura flex items-center justify-center"><MessageCircle size={15} /></span>WhatsApp
                </a>
                <a href={siteData.redes.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-texto/70 hover:text-verde-oscuro transition-colors">
                  <span className="w-9 h-9 rounded-full bg-crema-oscura flex items-center justify-center"><Instagram size={15} /></span>Instagram
                </a>
                <a href={siteData.redes.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-texto/70 hover:text-verde-oscuro transition-colors">
                  <span className="w-9 h-9 rounded-full bg-crema-oscura flex items-center justify-center"><Linkedin size={15} /></span>LinkedIn
                </a>
              </div>
            </div>
            <div className="bg-crema-oscura rounded-2xl p-6">
              <p className="font-display text-xl text-verde-oscuro mb-2">Primera sesión gratuita</p>
              <p className="text-sm text-texto/60 leading-relaxed">Ofrezco una sesión exploratoria de 30 minutos sin costo para conocernos y evaluar si hay fit para trabajar juntos.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
