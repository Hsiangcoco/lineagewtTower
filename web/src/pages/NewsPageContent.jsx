
import Topbar from "../components/Topbar";
import HotContent from "../components/HotContent";
import Footer from "../components/Footer";
import '../assets/sass/Allpage.scss'
import NewsContent from "../UpdataPage/News/NewsContent";

export default function NewsPageContent() {
    return (
        <>
            <div id="NPC-Allpage">
                <div id="All-page-topbar">
                    <Topbar />
                </div>
                <div id="All-page-mix">
                    <div className="All-page-left">
                        <div className="Top-title">
                            <img src="../images/gamenews-img-1.png" alt="" />
                            <p>遊戲公告</p>
                        </div>
                        <div className="GameNews">
                            <NewsContent />
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