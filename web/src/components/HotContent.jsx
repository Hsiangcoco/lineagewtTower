import { Link } from 'react-router-dom';
import '../assets/sass/HotContent.scss';

export default function HotContent() {
    const sections = [
        {
            header: "最新內容",
            items: [
                { text: "2/5 天堂W 更新說明", link: "/NewsContent" },
                { text: "特別直播Director's Talk獎勵說明", link: "/NewsContent" },
                { text: "「藝術家的咒語卡片箱(刻印)」暫時無法使用說明", link: "/NewsContent" },
            ],
        },
        {
            header: "熱門攻略",
            items: [
                { text: "職業轉換-修羅轉戰士特輯", link: "/StrategyContent" },
                { text: "魔眼素質最新攻略", link: "/StrategyContent" },
                { text: "通行證2600元價值真的要買嗎？", link: "" },
            ],
        },
        {
            header: "熱門影片",
            items: [
                { text: "【2月第一週更新】肩甲&T恤機率製作可選擇!! 月靈禮包兌換須知!", link: "https://youtu.be/_ieO0hqt69w", external: true },
                { text: "傳說中的轉運儀式！！血祭真的管用？", link: "https://youtu.be/3tuTwJNIW6w", external: true },
                { text: "一萬訂閱粉絲回饋！點完裝備買了鑽石禮包，結局讓我猶豫課金！", link: "https://youtu.be/53o2F5TL4Tc", external: true },
                { text: "【1月第四週更新】春節活動經驗收藏要先拿!CM木偶任務記得接", link: "https://youtu.be/hPWiY0EFjCA", external: true },
                { text: "觀眾狂喊轉卡？！最後被金變和觀眾玩壞了！", link: "https://youtu.be/Ilt3QjBeQVs", external: true },
                { text: "史上最衰紀錄！94次合成只成功1次？", link: "https://youtu.be/QI0aiVgIDS4", external: true },
            ],
        },
    ];

    return (
        <>
            <div className="HotContent-page-right">
                {sections.map((section, index) => (
                    <div className="HotContent-top-1" key={index}>
                        <div className="header">{section.header}</div>
                        {section.items.map((item, idx) => (
                            <div className="item" key={idx}>
                                {item.external ? (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.text}
                                    </a>
                                ) : (
                                    <Link to={item.link} >
                                        {item.text}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                ))}

                <div className="HotContent-ad-placement">
                    <div className="ad-header">
                        <div className="ad-header-content">
                            <span className="ad-title">廣告專區</span>
                            <span className="ad-label">AD</span>
                        </div>
                    </div>
                    <div className="ad-content">
                        <div className="ad-placeholder">
                            <span className="ad-placeholder-text">廣告版位</span>
                            <span className="ad-size">300 x 250</span>
                        </div>
                    </div>
                    <div className="ad-footer">聯繫我們進行廣告投放</div>
                </div>
            </div>
        </>
    );
}