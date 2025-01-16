import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NewsPage from './pages/NewsPage'
import NewsPageContent from './pages/NewsPageContent'
import StrategyPage from './pages/StrategyPage'
import StrategyPageContent from './pages/StrategyPageContent'
import UpdatePage from './pages/UpdatePage'
import UpdatePageContent from './pages/UpdatePageContent'
import AboutPage from './pages/AboutPage'




function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/News' element={<NewsPage />}></Route>
        <Route path='/NewsContent' element={<NewsPageContent />}></Route>
        <Route path='/Update' element={<UpdatePage />}></Route>
        <Route path='/UpdateContent' element={<UpdatePageContent />}></Route>
        <Route path='/Strategy' element={<StrategyPage />}></Route>
        <Route path='/StrategyContent' element={<StrategyPageContent />}></Route>
        <Route path='/AboutPage' element={<AboutPage />}></Route>
      </Routes>
    </>
  )
}

export default App
