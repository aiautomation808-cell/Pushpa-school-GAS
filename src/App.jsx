import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { CursorFollower } from './components/CursorFollower.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Academics from './pages/Academics.jsx'
import Admissions from './pages/Admissions.jsx'
import Gallery from './pages/Gallery.jsx'
import News from './pages/News.jsx'
import Contact from './pages/Contact.jsx'
import SchoolMIS from './pages/SchoolMIS.jsx'
import TcSearch from './pages/TcSearch.jsx'
import CbseInfo from './pages/CbseInfo.jsx'
import MandatoryDisclosure from './pages/MandatoryDisclosure.jsx'
import Committee from './pages/Committee.jsx'
import StarsOfPushpa from './pages/StarsOfPushpa.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col font-sans relative overflow-x-hidden">
      <CursorFollower />
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/school-mis" element={<SchoolMIS />} />
          <Route path="/tc-search" element={<TcSearch />} />
          <Route path="/cbse-info" element={<CbseInfo />} />
          <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/stars-of-pushpa" element={<StarsOfPushpa />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
