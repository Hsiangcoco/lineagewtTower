import './App.css'
import BannerSilder from './components/BannerSlider';
import Topbar from './components/Topbar';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>

    <Topbar></Topbar>
    <BannerSilder></BannerSilder>
      {/* <Routes >
        <Route path='/' element={<Topbar />}></Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes> */}
    </>
  )
}

export default App
