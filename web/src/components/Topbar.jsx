import { Link } from "react-router-dom"
import '../assets/sass/Topbar.scss'
import { useEffect, useState } from "react";

export default function Topbar() {

    const AnnouncementScroll = () => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const announcements = [
            "Director’s Talk 直播 2024.11.29 19:00直播",
            "01/08 Youtube影片上架 一月第二週更新內容",
            "天堂W全新職業即將登場！",
            "02/15 新年活動公告：限時獎勵等你拿",
        ];

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
            }, 3000); // 每 3 秒切換一次

            return () => clearInterval(interval); // 清除 interval
        }, [announcements.length]);

        return (
            <div className="LT-announcement-scroll">
                <ul style={{ transform: `translateY(-${currentIndex * 25}px)` }}>
                    {announcements.map((announcement, index) => (
                        <li key={index} className={currentIndex === index ? "active" : ""}>
                            <Link to="#">{announcement}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <>
            <Link to='#'>
            </Link>
            <div className="LT-Topbar-page">
                <div id="LT-header">
                    <div className="LT-Topbar">
                        <Link to='#'>
                            <h1 className="LT-title">
                                <img className="logoimg" src="/images/logo.svg" alt="" />
                                天堂W攻略聖所
                            </h1>
                        </Link>
                        <div className='LT-Navbar'>
                            <Link to='#'>
                                <p className="LT-navbartitle">遊戲公告</p>
                            </Link>
                            <Link to='#'>
                                <p className="LT-navbartitle">更新資訊</p>
                            </Link>
                            <Link to='#'>
                                <p className="LT-navbartitle">遊戲攻略</p>
                            </Link>
                            <Link to='#'>
                                <p className="LT-navbartitle">關於網站</p>
                            </Link>
                        </div>

                        <div className="LT-announcement">
                            <div className="LT-announcement-1">
                                <p>最新公告</p>
                            </div>
                            <div>
                                <AnnouncementScroll></AnnouncementScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}