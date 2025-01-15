import './App.css'
import About from './components/about';
import BannerSilder from './components/BannerSlider';
import Footer from './components/Footer';
import GameNews from './components/GameNews';
import GameStrategy from './components/GameStrategy';
import GameUpdata from './components/GameUpdata';
import HotContent from './components/HotContent';
import HotNews from './components/HotNews';
import NewsCard from './components/NewsCard';
import Porfession from './components/Profession';
import Topbar from './components/Topbar';
import UpdataContent from './components/UpdataContent';
import YoutubeScroll from './components/Youtubescroll';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsContent from './UpdataPage/News/NewsContent';
import UpdataCm from './UpdataPage/Updata/UpdataCm';
import StrategyContent from './UpdataPage/Strategy/StrategyConent';


function App() {

  return (
    <>
      <StrategyContent></StrategyContent>
      {/* <Routes >
        <Route path='/' element={<Topbar />}></Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes> */}
    </>
  )
}

export default App
