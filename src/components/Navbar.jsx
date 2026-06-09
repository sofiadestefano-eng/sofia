import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuAbierto(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-crema/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-medium text-verde-oscuro tracking-wide">
          Sofía Destefano
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {siteData.nav.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-sm transition-colors duration-200 hover:text-verde-oscuro ${
                  location.pathname === item.path ? 'text-verde-oscuro font-medium' : 'text-texto/70'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contacto"
          className="hidden md:inline-block bg-verde-oscuro text-crema text-sm px-5 py-2.5 rounded-full hover:bg-verde-medio transition-colors duration-200"
        >
          Contacto
        </Link>
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="md:hidden p-2 text-texto"
          aria-label="Menú"
        >
          {menuAbierto ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {menuAbierto && (
        <div className="md:hidden bg-crema border-t border-crema-oscura px-6 py-4 flex flex-col gap-4">
          {siteData.nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-base py-1 transition-colors ${
                location.pathname === item.path ? 'text-verde-oscuro font-medium' : 'text-texto/70'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contacto" className="mt-2 bg-verde-oscuro text-crema text-sm px-5 py-2.5 rounded-full text-center">
            Contacto
          </Link>
        </div>
      )}
    </header>
  )
}
