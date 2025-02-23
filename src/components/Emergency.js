"use client"
import React, { Component } from "react";

import { ServiceFactory } from '@/services';


export default class Emergency extends Component {

  constructor(props) {
    super(props)
    this.state = {
      model: null,
    }
  }

  componentDidMount() {
    // 緊急情報を取得
    let securityService = ServiceFactory.createSecurityService();
    securityService.getEmergency().then(model => {
      this.setState({
        model: model,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    return (
      <div className="emergencyInfoBox">
        <a href="https://dis-shiga.jp/pc/topdis-shiga.html" target="_blank" rel="noreferrer">
          <img className="title_pic" src="https://dis-shiga.jp/image/title.jpg" alt="dis-shiga" width="370" height="85"/>
        </a>
        <div className="emergencyInfoBoxHead">
          <img className="icon" src="https://dis-shiga.jp/image/exclamation2.png" alt="exclamation2" width="32" height="32"/>
          <span className="title">緊急情報</span>
        </div>
        <div>
          <h2>
            <span className="name">本部体制設置</span>
            {
              this.state.model === null || this.state.model.honbutaisei !== true ?
                <span className="state noAnnouncement">発表なし</span> :
                <span className="state hasAnnounced">発表あり</span>
            }
            <button onClick={()=> window.open("https://dis-shiga.jp/pc/hq/info.html", "_blank", 'noopener,noreferrer')}>&gt;　詳細</button>
          </h2>
        </div>
        <div>
          <h2>
            <span className="name">避難情報
              <a href="/other/避難情報.pdf" target="_blank" rel="noreferror">（避難情報とは）</a>
            </span>
            {
              this.state.model === null || this.state.model.hinanjouhou !== true ?
                <span className="state noAnnouncement">発令なし</span> :
                <span className="state hasAnnounced">発令あり</span>
            }
            <button onClick={()=> window.open("https://dis-shiga.jp/pc/evacuation/info.html", "_blank", 'noopener,noreferrer')}>&gt;　詳細</button>
          </h2>
        </div>
        <div>
          <h2>
            <span className="name">避難所情報</span>
            {
              this.state.model === null || this.state.model.hinanjojouhou !== true ?
                <span className="state noAnnouncement">発表なし</span> :
                <span className="state hasAnnounced">発表あり</span>
            }
            <button onClick={()=> window.open("https://dis-shiga.jp/pc/shelter/info.html", "_blank", 'noopener,noreferrer')}>&gt;　詳細</button>
          </h2>
        </div>
        <div>
          <h2>
            <span className="name">国民保護情報</span>
            {
              this.state.model === null || this.state.model.kokuminhogojouhou !== true ?
                <span className="state noAnnouncement">発表なし</span> :
                <span className="state hasAnnounced">発表あり</span>
            }
            <button onClick={()=> window.open("https://dis-shiga.jp/pc/civil_protection/info.html", "_blank", 'noopener,noreferrer')}>&gt;　詳細</button>
          </h2>
        </div>
      </div>
    );
  };
}
