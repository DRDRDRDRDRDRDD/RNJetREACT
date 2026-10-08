import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Application from './pages/Application'
import Ink from './pages/Ink'
import Marking from './pages/Marking'
import Products from './pages/Products'
import PrinterDetail from './pages/PrinterDetail'   

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/application" element={<Application />} />
          <Route path="/ink" element={<Ink />} />
          <Route path="/marking" element={<Marking />} />
          <Route path="/products" element={<Products />} />

          {/* ОДИН динамический роут вместо 21 */}
          <Route path="/products/:slug" element={<PrinterDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App