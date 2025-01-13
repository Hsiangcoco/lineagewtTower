import './App.css'
import BannerSilder from './components/BannerSlider';
import Footer from './components/Footer';
import NewsCard from './components/NewsCard';
import Porfession from './components/Profession';
import Topbar from './components/Topbar';
import UpdataContent from './components/UpdataContent';
import YoutubeScroll from './components/Youtubescroll';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>

<Home></Home>
      {/* <Routes >
        <Route path='/' element={<Topbar />}></Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes> */}
    </>
  )
}

export default App
