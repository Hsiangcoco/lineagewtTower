import '../assets/sass/about.scss'

export default function About() {
    return (
        <>
            <div class="about-content-bg">
                <div class="streamer-profile">
                    <header class="profile-header">
                        <div class="profile-info">
                            <img src="../images/person_icon.png" alt="祥可可遊戲頻道" class="profile-avatar"/>
                                <div class="profile-details">
                                    <h1 class="profile-name">祥可可遊戲頻道 GamesShow</h1>
                                    <p class="profile-stats">@HsiangCo6666 · 記得按讚訂閱分享～</p>
                                </div>
                                <button class="follow-button"><a href="https://www.youtube.com/@HsiangCo6666">訂閱</a></button>
                        </div>
                    </header>


                    <main class="profile-content">
                        <article class="about-section">
                            <p class="intro-text">
                                我是一名熱愛遊戲的創作者，曾經懷抱成為電競職業選手的夢想，雖然沒成功，但這段經歷讓我更加堅定地追求我對遊戲的熱情。既然你能看到這裡，表示我們在這個熱愛遊戲的世界相遇了，真是太棒了！
                            </p>

                            <div class="game-interests">
                                <p>平常我沉迷於各式各樣的遊戲，像是《APEX》、《LOL英雄聯盟》、《天堂W》、《暗黑破壞神4》以及各種 Steam
                                    平台上的熱門單機遊戲。無論是快節奏的競技遊戲還是單人冒險，我都全情投入，並且樂於跟大家分享我的心得與發現。</p>
                            </div>

                            <div class="channel-focus">
                                <p>現在我專注於《天堂W》，但我也計劃未來探索更多不同類型的遊戲，和大家一起發現更多樂趣！🎮</p>
                            </div>


                            <div class="channel-highlights">
                                <h2>目前頻道的三大主軸：</h2>
                                <ul class="highlights-list">
                                    <li>每週二、四，帶給你最精彩的遊戲直播！</li>
                                    <li>不定時發布有趣的遊戲精華，隨時隨地笑翻你！</li>
                                    <li>直播後，會帶來最真實、深入的遊戲評測，助你更好地了解遊戲。</li>
                                </ul>
                            </div>


                            <div class="contact-info">
                                <p>合作配合歡迎來信: hsiang840606@gmail.com</p>
                            </div>
                        </article>


                        <footer class="social-links">
                            <p class="social-text">期待與你一起在遊戲中相遇、共同冒險！👋</p>
                            <div class="social-icons">
                                <a href="https://www.instagram.com/hsiangcoco/" target="_blank" class="social-icon instagram">
                                    <img src="../images/icon_ig.png" alt="Instagram" />
                                </a>
                                <a href="https://www.facebook.com/Hsiangcoco8746" target="_blank" class="social-icon facebook">
                                    <img src="../images/icon_fb.png" alt="Facebook" />
                                </a>
                            </div>
                        </footer>
                    </main>
                </div>

            </div>
        </>
    )
}