import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import HealthCoaching from './pages/HealthCoaching'
import Education from './pages/Education'
import Campaign from './pages/Campaign'
import Projects from './pages/Projects'
import Research from './pages/Research'
import ResourceCenter from './pages/ResourceCenter'
import Support from './pages/Support'



function App() {
  return (
    <Router>
      
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/health-coaching" element={<HealthCoaching />} />
            <Route path="/education" element={<Education />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/resource-center" element={<ResourceCenter />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        <Footer />
    </Router>
  )
}

export default App
