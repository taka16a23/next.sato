"use client"
import React, { Component } from "react";
import moment from 'moment'

import { ServiceFactory } from '@/services';


export default class TodayHallEvents extends Component {

  constructor(props) {
    super(props)
    this.todayHallEvents = [];
    this.state = {
      todayHallEventsLength: this.todayHallEvents.length,
    }
  }

  componentDidMount() {
    var hallService = ServiceFactory.createHallService();
    // yyyy-mm-dd
    // sv-SEロケールはYYYY-MM-DD形式の日付文字列を戻す
    let todayString = (new Date()).toLocaleDateString('sv-SE');
    let startTodayString = todayString + ' 00:00:00';
    let endTodayString = todayString + ' 23:59:59';
    hallService.listEvents(startTodayString, endTodayString).then(models => {
      this.todayHallEvents = models;
      this.setState({
        todayHallEventsLength: this.todayHallEvents.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    if (this.todayHallEvents.length <= 0) {
      return (
        <div className="daily-item">
          <h3 className="daily-label">公民館の利用</h3>
          <div className="daily-link">
            <p>予定はありません</p>
          </div>
        </div>
      )
    }
    if (1 <= this.todayHallEvents.length) {
      return (
        <div className="daily-item">
          <h3 className="daily-label">公民館の利用</h3>
          {this.todayHallEvents.map((oModel) =>
            <div className="daily-link" key={oModel.gid}>
              <a href={oModel.url}>{moment(oModel.start).format('HH:mm') + " " + oModel.summary}</a>
            </div>
          )}
        </div>
      );
    }
  };
}
