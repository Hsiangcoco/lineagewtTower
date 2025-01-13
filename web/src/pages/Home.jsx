import { Link } from 'react-router-dom'
import '../assets/sass/Home.scss'
import Topbar from '../components/Topbar'
import BannerSlider from '../components/BannerSlider'
import UpdataContent from '../components/UpdataContent'
import NewsCard from '../components/NewsCard'
import YoutubeScroll from '../components/Youtubescroll'
import Porfession from '../components/Profession'
import Footer from '../components/Footer'


export default function Home() {
    return (
        <>
            <div>
                <div className='Home-page-1'>
                    <div className='Topbar'>
                        <Topbar />
                    </div>
                    <div className='Home-page-1-Banner'>
                        <BannerSlider />
                        <UpdataContent />
                    </div>
                </div>

                <div className='Home-page-2'>
                    <h2 className="update-info-title">更新資訊專區</h2>
                    <p className="update-info-description">以下為最新的更新資訊，請點擊進入查看詳細內容！</p>
                    <NewsCard />
                </div>

                <div className='Home-page-3'>
                    <h2 className="guide-videos-title">攻略影片專區</h2>
                    <p className="guide-videos-description">以下為最新的攻略影片，幫助您輕鬆提升遊戲技巧！</p>
                    <YoutubeScroll />
                </div>

                <div className='Home-page-4'>
                    <h2 className="profession-title">職業專區</h2>
                    <Porfession />
                </div>
                <div className='Home-Footer'>
                    <div className='Footertext'>
                        <p>此網站為熱心整理無任何商業用途</p>
                    </div>
                    <Footer />

                </div>





            </div>
        </>

    )
}