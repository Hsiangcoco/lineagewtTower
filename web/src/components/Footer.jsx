import '../assets/sass/Footer.scss'

export default function Footer() {
    return (
        <>
            <div className="LT-footer ">
                <div className="LT-footer-bg-1">
                    <ul className="LT-footer-titletop">
                        <a href="./page/gamenews.html">
                            <p>遊戲公告</p>
                        </a>
                        <li className="LT-footer-content" >
                            <a href="./page/gamenews.html">
                                更新公告
                            </a>
                        </li>
                        <li className="LT-footer-content"><a href="">維修公告</a></li>
                    </ul>
                </div>
                <div className="LT-footer-bg-1">
                    <ul className="LT-footer-titletop">
                        <a href="./page/Strategy.html">
                            <p>更新資訊</p>
                        </a>
                        <li className="LT-footer-content">
                            <a href="./page/gameupdata.html">
                                CM情報</a>
                        </li>
                        <li className="LT-footer-content"><a href="">更新分析</a></li>
                    </ul>
                </div>
                <div className="LT-footer-bg-1">

                    <ul className="LT-footer-titletop">
                        <a href="./page/Strategy.html">
                            <p>遊戲攻略</p>
                        </a>
                        <li className="LT-footer-content">
                            <a href="./page/Strategy.html">
                                轉職專區</a>
                        </li>
                        <li className="LT-footer-content"><a href="">遊戲小知識</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}