import './App.css'
import HomePage from './Components/HomePage'
import Register from './Components/Register'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </>
  )
}

export default App
