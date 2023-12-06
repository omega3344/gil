import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import Pages...................
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Portfolio from '../pages/Portfolio/Portfolio'
import Contact from '../pages/Contact/Contact'

// Import Components................
import Nav from '../components/Nav/Nav'
import Theme from '../components/Theme/Theme'

export default function router() {
  return (
    <BrowserRouter>
      <Nav />
      <Theme />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </BrowserRouter>
  )
}
