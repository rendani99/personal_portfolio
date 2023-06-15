import { Home } from '@material-ui/icons'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
