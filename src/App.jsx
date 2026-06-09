import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SobreSofia from './pages/SobreSofia'
import Servicios from './pages/Servicios'
import Resultados from './pages/Resultados'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-sofia" element={<SobreSofia />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
