import { Outlet } from 'react-router-dom'
import './App.css'
import Navebar from './Header/Navebar'
import Footer from './Footer/Footer'

function App() {

  return (
    <>
      <Navebar />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default App
