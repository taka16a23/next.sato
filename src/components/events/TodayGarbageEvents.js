"use client"
import React, { Component } from "react";

import { ServiceFactory } from '@/services';


export default class TodayGarbageEvents extends Component {

  constructor(props) {
    super(props)
    this.todayEvents = [];
    this.state = {
      todayEventsLength: this.todayEvents.length,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createGarbageEventsService();
    // yyyy-mm-dd
    // sv-SEロケールはYYYY-MM-DD形式の日付文字列を戻す
    let todayString = (new Date()).toLocaleDateString('sv-SE');
    service.listEvents(todayString).then(models => {
      this.todayEvents = models;
      this.setState({
        todayEventsLength: this.todayEvents.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    if (this.todayEvents.length <= 0) {
      return (
        <div className="daily-item">
          <h3 className="daily-label">今日のごみ収集</h3>
          <div className="daily-link">
            <p>ごみ収集はありません</p>
          </div>
        </div>
      )
    }
    if (1 <= this.todayEvents.length) {
      return (
        <div className="daily-item">
          <h3 className="daily-label">今日のごみ収集</h3>
          {this.todayEvents.map((oModel) =>
            <div className="daily-link" key={oModel.gid}>
              <img src={oModel.url_of_image} alt={oModel.summary} width="130" height="30"/>
            </div>
          )}
        </div>
      );
    }
  };
}
