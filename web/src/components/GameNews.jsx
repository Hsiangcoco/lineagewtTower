import { Link } from 'react-router-dom';
import '../assets/sass/GameNews.scss';
import { useState } from 'react';

export default function GameNews() {
    // 最新資料
    const [newsList, setNewsList] = useState([
        { title: "[2月第一週更新]2/5 天堂W 更新說明", link: "/NewsContent",  date: "2025/02/05" },
       
    ]);

    // 舊資料
    const [oldNews, setOldNews] = useState([

        { title: "[1月第四週更新] 1/22 天堂W 更新說明", link: "/NewsContent",  date: "2025/01/22" },
    ]);

    // 點擊載入更多的處理函數
    const loadMore = () => {
        if (oldNews.length > 0) {
            // 從舊資料中移除前幾筆，並加入到 newsList
            const newItems = oldNews.slice(0, 3); // 每次加載3筆
            setNewsList((prevNews) => [...prevNews, ...newItems]);
            setOldNews((prevOldNews) => prevOldNews.slice(3)); // 刪除已經加載的資料
        }
    };

    return (
        <div className="GN-content-bg">
            {/* 動態渲染 newsList 資料 */}
            {newsList.map((item, index) => (
                <div className="GN-content-textbox" key={index}>
                    <div className="GN-content-textbox-1">
                        <img src="./images/gamenews-content-img-1.png" alt="" />
                        <Link to={item.link}>
                            <p>{item.title}</p>
                        </Link>
                    </div>
                    <div className="GN-content-text-1">
                        <p>天堂Ｗ攻略聖所</p>
                        <p>{item.date}</p>
                    </div>
                </div>
            ))}

            {/* 更多內容按鈕 */}
            {oldNews.length > 0 ? (
                <button className="load-more-btn" onClick={loadMore}>
                    查看更多
                </button>
            ) : (
                <p className="no-more-data">沒有更多資料了</p>
            )}
        </div>
    );
}