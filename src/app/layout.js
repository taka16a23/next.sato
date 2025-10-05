// import "@/assets/scss/global.css";
import "@/assets/scss/style.min.css";
import Link from 'next/link';
import Image from 'next/image';

import { ReduxProvider } from '@/redux/ReduxProvider';

import AliasRoutes from "@/routes/AliasRoutes";
import HeaderImg from '@/assets/images/header.webp';
import footers from '@/components/footers';
import axiosSetup from '@/helpers/interceptors';

export default function RootLayout({ children }) {
  axiosSetup()
  return (
    <html lang="ja">
      <body>
        <div id="root">
          <div className="wrapper">
            <div className="wrapper-inner">
              <div id="content">
                <header id="header">
                  <div className="header-inner">
                    <div className="container">
                      <div className="container-inner">
                        <div className="header-image">
                          <Link href={AliasRoutes.Top} as={AliasRoutes.Top} className="" alt="home" title="トップページへ">
                            <Image src={HeaderImg} alt="笹間山の頂上八畳岩から撮影された里自治会町内" height="236" width="944" priority={true}/>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="container-inner">
                        <div className="menu-area">
                          <ul className="menu-list">
                            <li className="menu-item">
                              <Link href={AliasRoutes.News} as={AliasRoutes.News} className="menu-label" alt="news">
                                おしらせ
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link href={AliasRoutes.Activities} as={AliasRoutes.Activities} className="menu-label" alt="activity">
                                活動報告
                              </Link>
                            </li>
                            <li className="menu-item dropdown">
                              <Link href={AliasRoutes.SecurityPortal} as={AliasRoutes.SecurityPortal} className="menu-label dropdown-label" alt="security">
                                防犯・防災<i className="mdi mdi-menu-down"></i>
                              </Link>
                              <ul className="dropdown-container">
                                <li className="dropdown-item">
                                  <Link href={AliasRoutes.SecurityPortal} as={AliasRoutes.SecurityPortal} className="dropdown-label" alt="security">
                                    防災統合情報
                                  </Link>
                                </li>
                                <li className="dropdown-item">
                                  <Link href={AliasRoutes.SecurityKnowledge} as={AliasRoutes.SecurityKnowledge} className="dropdown-label" alt="knowledge">
                                    防災予備知識
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item">
                              <Link href={`/board`} as={`/board`} className="menu-label" alt="board">
                                回覧板
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link href={AliasRoutes.Formats} className="menu-label" alt="form">
                                各種申請
                              </Link>
                            </li>
                            <li className="menu-item dropdown">
                              <Link href={`/about/rule`} as={`/about/rule`} className="menu-label dropdown-label" alt="about">
                                自治会案内<i className="mdi mdi-menu-down"></i>
                              </Link>
                              <ul className="dropdown-container">
                                <li className="dropdown-item">
                                  <Link href={`/about/rule`} as={`/about/rule`} className="dropdown-label" alt="rule">
                                    会則
                                  </Link>
                                </li>
                                <li className="dropdown-item">
                                  <Link href={`/about/hall`} as={`/about/hall`} className="dropdown-label" alt="hall">
                                    里公民館
                                  </Link>
                                </li>
                                <li className="dropdown-item">
                                  <Link href={`/about/group`} as={`/about/group`} className="dropdown-label" alt="group">
                                    ブロックと組
                                  </Link>
                                </li>
                                <li className="dropdown-item">
                                  <Link href={`/about/query`} as={`/about/query`} className="dropdown-label" alt="query">
                                    お問い合わせ
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                <div className="content-inner">
                  <ReduxProvider>
                    {children}
                  </ReduxProvider>
                </div>
                <footer id="footer">
                  <div className="footer-inner">
                    <div className="footer-container">
                      <div className="sitemap-area">
                        <div className="sitemap sitemap-news">
                          <h3 className="sitemap-title">
                            <Link href={AliasRoutes.News} as={AliasRoutes.News}>おしらせ</Link>
                          </h3>
                          <footers.NewsFooter/>
                        </div>
                        <div className="sitemap sitemap-activity">
                          <h3 className="sitemap-title">
                            <Link href={AliasRoutes.Activities} as={AliasRoutes.Activities}>ご報告</Link>
                          </h3>
                          <footers.ActivitiesFooter/>
                        </div>
                        <div className="sitemap sitemap-board">
                          <h3 className="sitemap-title">
                            <Link href={AliasRoutes.Board} as={AliasRoutes.Board}>回覧板</Link>
                          </h3>
                          <footers.BoardsFooter/>
                        </div>
                        <div className="sitemap sitemap-security">
                          <h3 className="sitemap-title">
                            <Link href={AliasRoutes.SecurityPortal} as={AliasRoutes.SecurityPortal}>防犯・防災</Link>
                          </h3>
                          <ul className="sitemap-list">
                            <li className="sitemap-item">
                              <Link href={AliasRoutes.SecurityPortal} as={AliasRoutes.SecurityPortal}>
                                <i className="mdi mdi-menu-right"></i>
                                統合情報
                              </Link>
                            </li>
                            <li className="sitemap-item">
                              <Link href={AliasRoutes.SecurityKnowledge} as={AliasRoutes.SecurityKnowledge}>
                                <i className="mdi mdi-menu-right"></i>
                                防災予備知識
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="sitemap sitemap-formats">
                          <h3 className="sitemap-title">
                            <Link href={AliasRoutes.Formats} as={AliasRoutes.Formats}>各種申請</Link>
                          </h3>
                          <ul className="sitemap-list">
                            <li className="sitemap-item">
                              <Link href={AliasRoutes.Formats} as={AliasRoutes.Formats}>
                                <i className="mdi mdi-menu-right"></i>
                                里自治会関係書式
                              </Link>
                            </li>
                            <li className="sitemap-item">
                              <Link href={AliasRoutes.Formats} as={AliasRoutes.Formats}>
                                <i className="mdi mdi-menu-right"></i>
                                自治体等関係書式
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="sitemap sitemap-about">
                          <h3 className="sitemap-title">
                            <Link href={AliasRoutes.AboutRule} as={AliasRoutes.AboutRule}>自治会案内</Link>
                          </h3>
                          <ul className="sitemap-list">
                            <li className="sitemap-item">
                              <Link href={AliasRoutes.AboutRule} as={AliasRoutes.AboutRule}>
                                <i className="mdi mdi-menu-right"></i>
                                会則
                              </Link>
                            </li>
                            <li className="sitemap-item">
                              <Link href={AliasRoutes.AboutHall} as={AliasRoutes.AboutHall}>
                                <i className="mdi mdi-menu-right"></i>公民館
                              </Link>
                            </li>
                            <li className="sitemap-item">
                              <Link href={AliasRoutes.AboutGroup} as={AliasRoutes.AboutGroup}>
                                <i className="mdi mdi-menu-right"></i>
                                ブロックと組
                              </Link>
                            </li>
                            <li className="sitemap-item">
                              <Link href={AliasRoutes.AboutQuery} as={AliasRoutes.AboutQuery}>
                                <i className="mdi mdi-menu-right"></i>
                                よくある質問
                              </Link>
                            </li>
                            <li className="sitemap-item">
                              <Link href={AliasRoutes.AboutQuery} as={AliasRoutes.AboutQuery}>
                                <i className="mdi mdi-menu-right"></i>
                                情報提供・お問い合わせ
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="aboutme-area">
                        <h1 className="aboutme-title">
                          <Link href={AliasRoutes.Top} title="里自治会">
                            里自治会
                          </Link>
                        </h1>
                        <div className="aboutme-body">
                          <div className="aboutme-item yuubin-before">520-2276</div>
                          <div className="aboutme-item"><i className="mdi mdi-map-marker"></i>
                            <a href="https://www.google.co.jp/maps/place/%E3%80%92520-2276+Shiga-ken,+%C5%8Ctsu-shi,+Sato,+5+Chome%E2%88%927%E2%88%9222+%E9%87%8C%E5%85%AC%E6%B0%91%E9%A4%A8/@34.9394985,135.9306612,17z/data=!4m2!3m1!1s0x60016cee67f7d6df:0xe8e861cb3f9f2737?hl=ja" target="_blank" title="地図を見る" rel="noreferrer">滋賀県大津市里5丁目7-22</a>
                          </div>
                          <div className="aboutme-item phone-before">&nbsp;077-546-6905</div>
                          <div className="aboutme-item fax-before">&nbsp;077-546-6905</div>
                        </div>
                      </div>
                    </div>
                    <div className="copyright">
                      <small>Copyright&copy; 2016 <Link href="https://taka16a23.com" rel="noreferrer" target="_blank">taka16a23</Link> All Rights Reserved.</small>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
