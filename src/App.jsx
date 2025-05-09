import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChaptersPage from './pages/ChaptersPage'
import ChapterDetailPage from './pages/ChapterDetailPage'
import SlokPage from './pages/SlokPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import ScrollToTop from './utility/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-100">
      <ScrollToTop />
      <Routes>
        {/* Home route without header/footer */}
        <Route path="/" element={<HomePage />} />
        
        {/* All other routes with header/footer */}
        <Route path="*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/chapters" element={<ChaptersPage />} />
              <Route path="/chapter/:id" element={<ChapterDetailPage />} />
              <Route path="/slok/:chapter/:verse" element={<SlokPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App