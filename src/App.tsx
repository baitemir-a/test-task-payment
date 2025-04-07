import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import { GlobalProvider } from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
