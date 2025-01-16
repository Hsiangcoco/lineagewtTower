import Topbar from "../components/Topbar";
import HotContent from "../components/HotContent";
import HotNews from "../components/HotNews";
import GameNews from "../components/GameNews";
import Footer from "../components/Footer";
import '../assets/sass/Allpage.scss'

export default function NewsPage() {
    return (
        <>
            <div id="NP-Allpage">
                <div id="All-page-topbar">
                    <Topbar />
                </div>
                <div id="All-page-mix">
                    <div className="All-page-left">
                        <div className="Top-title">
                            <img src="../images/gamenews-img-1.png" alt="" />
                            <p>遊戲公告</p>
                        </div>
                        <div className="HotNews">
                            <HotNews />
                        </div>
                        <div className="GameNews">
                            <GameNews></GameNews>
                        </div>
                    </div>
                    <div className="All-page-right">
                        <HotContent />
                    </div>
                </div>
                <div className="All-page-Footer">
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}