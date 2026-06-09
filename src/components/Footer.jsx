import { Link } from 'react-router-dom'
import { Instagram, Linkedin, MessageCircle } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="bg-verde-oscuro text-crema/80">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-xl text-crema mb-2">Sofía Destefano</p>
          <p className="text-sm leading-relaxed">{siteData.descripcion}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-crema mb-4 uppercase tracking-widest">Navegación</p>
          <ul className="space-y-2">
            {siteData.nav.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-sm hover:text-crema transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-crema mb-4 uppercase tracking-widest">Contacto</p>
          <a href={`mailto:${siteData.email}`} className="text-sm hover:text-crema transition-colors block mb-4">{siteData.email}</a>
          <div className="flex gap-4">
            <a href={siteData.redes.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-crema transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
            <a href={siteData.redes.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-crema transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={siteData.redes.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-crema transition-colors" aria-label="WhatsApp"><MessageCircle size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-crema/10 px-6 py-4 max-w-6xl mx-auto">
        <p className="text-xs text-crema/40">© {new Date().getFullYear()} Sofía Destefano · Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
