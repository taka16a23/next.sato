"use client"
import React, { Component } from "react";
import moment from 'moment'

import { ServiceFactory } from '@/services';


export default class TomorrowMainEvents extends Component {

  constructor(props) {
    super(props)
    this.events = [];
    this.state = {
      eventsLength: this.events.length,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createMainEventsService();
    // yyyy-mm-dd
    // sv-SEロケールはYYYY-MM-DD形式の日付文字列を戻す
    let tomorrowString = (new Date(new Date().getTime() + 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
    let startTomorrowString = tomorrowString + ' 00:00:00';
    let endTomorrowString = tomorrowString + ' 23:59:59';
    service.listEvents(startTomorrowString, endTomorrowString).then(models => {
      this.events = models;
      this.setState({
        eventsLength: this.events.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    if (this.events.length <= 0) {
      return (
        <div className="daily-item">
          <h3 className="daily-label">明日の予定</h3>
          <div className="daily-link">
            <p>予定はありません</p>
          </div>
        </div>
      )
    }
    if (1 <= this.events.length) {
      return (
        <div className="daily-item">
          <h3 className="daily-label">明日の予定</h3>
          {this.events.map((oModel) =>
            <div className="daily-link" key={oModel.gid}>
              <a href={oModel.url}>{moment(oModel.start).format('HH:mm') + " " + oModel.summary}</a>
            </div>
          )}
        </div>
      );
    }
  };
}
