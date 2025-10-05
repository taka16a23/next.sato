"use client"
import React, { Component } from "react";
import moment from 'moment';

import { ServiceFactory } from '@/services';


export default class TodayMainEvents extends Component {

  constructor(props) {
    super(props)
    this.todayEvents = [];
    this.state = {
      todayEventsLength: this.todayEvents.length,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createMainEventsService();
    // yyyy-mm-dd
    // sv-SEロケールはYYYY-MM-DD形式の日付文字列を戻す
    let todayString = (new Date()).toLocaleDateString('sv-SE');
    let startTodayString = todayString + ' 00:00:00';
    let endTodayString = todayString + ' 23:59:59';
    service.listEvents(startTodayString, endTodayString).then(models => {
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
          <h3 className="daily-label">今日の予定</h3>
          <div className="daily-link">
            <p>予定はありません</p>
          </div>
        </div>
      )
    }
    if (1 <= this.todayEvents.length) {
      return (
        <div className="daily-item">
          <h3 className="daily-label">今日の予定</h3>
          {this.todayEvents.map((oModel) =>
            <div className="daily-link" key={oModel.gid}>
              <a href={oModel.url}>{moment(oModel.start).format('HH:mm') + " " + oModel.summary}</a>
            </div>
          )}
        </div>
      );
    }
  };
}
