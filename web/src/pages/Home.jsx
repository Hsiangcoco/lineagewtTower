import { Link } from 'react-router-dom'
import '../assets/css/home.css'


export default function Home() {

    <Link to='#'>


    </Link>

    return (
        <>
                <div className="page-1">
                    <div id="LT-header">
                        <div className="LT-Topbar">
                            <Link to='#'>
                                <h1 className="LT-title">
                                    <img src="/images/logo.svg" alt="" />
                                    天堂W攻略聖所
                                </h1>
                            </Link>
                            <div className='LT-Navbar'>
                                <Link to='#'>
                                    <p>遊戲公告</p>
                                </Link>
                                <Link to='#'>
                                    <p>更新資訊</p>
                                </Link>
                                <Link to='#'>
                                    <p>遊戲攻略</p>
                                </Link>
                                <Link to='#'>
                                    <p>關於網站</p>
                                </Link>
                            </div>

                            <div className="LT-announcement">
                                <div className="LT-announcement-1">
                                    <p>最新公告</p>
                                </div>
                                <div className="LT-announcement-scroll slideText">
                                    <ul>
                                        <li>
                                            <Link to='#'>
                                                Director’s Talk 直播 2024.11.29 19:00直播
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='#'>
                                                01/08 Youtube影片上架 一月第二週更新內容
                                            </Link>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}