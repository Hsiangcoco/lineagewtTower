import { Link } from 'react-router-dom'
import '../assets/sass/Footer.scss'

export default function Footer() {
    return (
        <>
            <div className="LT-footer ">
                <div className="LT-footer-bg-1">
                    <ul className="LT-footer-titletop">
                        <Link to=''>
                            <p>遊戲公告</p>
                        </Link>
                        <li className="LT-footer-content" >
                            <Link to=''>
                                更新公告

                            </Link>
                        </li>
                        <li className="LT-footer-content"><a href="">維修公告</a></li>
                    </ul>
                </div>
                <div className="LT-footer-bg-1">
                    <ul className="LT-footer-titletop">
                        <Link to=''>
                            <p>更新資訊</p>
                        </Link>
                        <li className="LT-footer-content">
                            <Link to=''>
                                CM情報
                            </Link>
                        </li>
                        <li className="LT-footer-content">
                            <Link to=''>
                                更新分析
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="LT-footer-bg-1">

                    <ul className="LT-footer-titletop">
                        <Link to=''>
                            <p>遊戲攻略</p>
                        </Link>
                        <li className="LT-footer-content">
                            <Link to=''>
                                轉職專區
                            </Link>
                        </li>
                        <li className="LT-footer-content">
                            <Link to=''>
                                遊戲小知識
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}