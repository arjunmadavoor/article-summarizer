import Hero from './components/Hero'
import Demo from './components/Demo'
import Login from './components/Login'
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";
import './App.css'
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
      <div className="app">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
  )
}

export default App


{/* <Routes>
<Route path='/' element={<Login />} />
<Hero />
<Demo />
<Routes/> */}