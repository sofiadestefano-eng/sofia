import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { siteData } from '../data/siteData'

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
)
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
)

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
            <a href={siteData.redes.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-crema transition-colors" aria-label="Instagram"><InstagramIcon size={18} /></a>
            <a href={siteData.redes.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-crema transition-colors" aria-label="LinkedIn"><LinkedinIcon size={18} /></a>
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
