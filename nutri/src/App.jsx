import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
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

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #ffffff;
    color: #333333;
    margin: 0;
    padding: 0;
  }
`

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
`

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContent>
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
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  )
}

export default App
