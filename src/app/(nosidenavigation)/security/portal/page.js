"use client"
import React, { Component } from "react";

import axios from "axios";
import moment from "moment";
import { Timeline } from 'react-twitter-widgets'
import ContentLoader from "react-content-loader"

import AliasRoutes from "@/routes/AliasRoutes";
import Emergency from '@/components/Emergency'
import WeatherAlert from '@/components/WeatherAlert'


export default class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoadedTimeline: false,
      serverDateTime: null,
    }
  }

  componentDidMount() {
    // サーバー時刻を利用
    let serverURL = process.env.NEXT_PUBLIC_APP_API_URL + '/admin/';
    axios.get(serverURL).then(res => {
      console.log(res.headers);
      console.log(res.headers['Date']);
      let serverDateTime = new Date(res.headers.date);
      // リンク切れ対策
      // 30秒
      let fixSeconds = 30000;
      serverDateTime = new Date(serverDateTime - fixSeconds);
      // 5分で丸め
      let minutes = serverDateTime.getMinutes();
      minutes = Math.floor(minutes / 5) * 5;
      let fixDateTime = new Date(serverDateTime.getFullYear(),
                                 serverDateTime.getMonth(), serverDateTime.getDate(),
                                 serverDateTime.getHours(), minutes);
      let riverDateTime = moment(fixDateTime);
      this.setState({
        riverDateTime: riverDateTime,
      });
    });
  }

  onLoadTimeline() {
    this.setState({
      isLoadedTimeline: true,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="main-area">
          <main id="main">
            <div className="main-item">
              <h2 className="main-title">
                <span className="title">避難情報</span>
              </h2>
              <div className="main-body">
                <div className="emergency-list">
                  <div className="emergency-item emergencyInfoWrapper">
                    <Emergency/>
                  </div>
                  <div className="emergency-item security-timeline">
                    <ContentLoader
                       speed={2}
                       width="100%"
                       height={400}
                       backgroundColor="#f3f3f3"
                       foregroundColor="#ecebeb"
                       style={{display: this.state.isLoadedTimeline !== true ? "block" : "none"}}
                    >
                      <rect x="0" y="0" rx="0" ry="0" width="100%" height="400"/>
                    </ContentLoader>
                    <Timeline
                      style={{display: this.state.isLoadedTimeline !== true ? "none" : "block"}}
                      dataSource={{
                        sourceType: 'profile',
                        screenName: 'otsu_kikibousai'
                      }}
                      options={{
                        lang: "ja",
                        height: '400'
                      }}
                      onLoad={this.onLoadTimeline.bind(this)}
                    />
                    <div>※表示にはX(twitter)のログインが必要です</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-item">
              <h2 className="main-title">
                <a className="link" href="http://shiga-bousai.jp/announce/weather.php" alt="気象特別警報・警報・注意報" target="_blank" title="気象特別警報・警報・注意報" rel="noreferrer" >
                  <span className="title">気象特別警報・警報・注意報</span>
                  <i className="mdi mdi-open-in-new"></i>
                </a>
              </h2>
              <WeatherAlert/>
            </div>
            <div className="main-item">
              <h2 className="main-title">
                <a className="link" href="http://c.shiga-bousai.jp/shigapref/pc/camDetail_6191FF05.html" alt="大戸川(石居橋)の様子" target="_blank" title="大戸川(石居橋)の様子" rel="noreferrer" >
                  <span className="title">大戸川(石居橋)の様子</span>
                  <i className="mdi mdi-open-in-new"></i>
                </a>
              </h2>
              <h3>
                <a href="http://c.shiga-bousai.jp/shigapref/pc/camDetail_6191FF05.html" target="_blank" title="滋賀県河川防災カメラのページへ移動" rel="noreferrer" >滋賀県 河川防災カメラ {this.state.riverDateTime === undefined ? "" : this.state.riverDateTime.format('YYYY年M月D日 HH:mm')} 現在</a>
              </h3>
              <div className="rivercam-container">
                <div className="riverAlertEntry">
                  <a href="http://c.shiga-bousai.jp/shigapref/pc/camDetail_6191FF05.html" target="_blank" title="滋賀県河川防災カメラ" rel="noreferrer" >
                    <img src={this.state.riverDateTime === undefined ? "" : process.env.NEXT_PUBLIC_APP_API_URL + "/shigapref/pc/cameraData/images/6191FF05/" + this.state.riverDateTime.format('YYYYMMDDHHmm') + ".jpg"} alt="石居橋の現在の様子" width="640" height="480"/>
                  </a>
                </div>
              </div>
            </div>
            <div id="evacuation-map" className="main-item">
              <div className="evacuationMapArea">
                <iframe title="避難地図" src="https://www.google.com/maps/d/embed?mid=zJXaXK9GQ-AU.kwVpZ6T_kTts" sandbox='allow-scripts allow-modal' loading='lazy'></iframe>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  };
}
