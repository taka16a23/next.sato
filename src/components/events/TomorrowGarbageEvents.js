"use client"
import React, { Component } from "react";

import { ServiceFactory } from '@/services';


export default class TomorrowGarbageEvents extends Component {

  constructor(props) {
    super(props)
    this.events = [];
    this.state = {
      eventsLength: this.events.length,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createGarbageEventsService();
    // yyyy-mm-dd
    // sv-SEロケールはYYYY-MM-DD形式の日付文字列を戻す
    let tomorrowString = (new Date(new Date().getTime() + 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
    service.listEvents(tomorrowString).then(models => {
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
          <h3 className="daily-label">明日のごみ収集</h3>
          <div className="daily-link">
            <p>ごみ収集はありません</p>
          </div>
        </div>
      )
    }
    if (1 <= this.events.length) {
      return (
        <div className="daily-item">
          <h3 className="daily-label">明日のごみ収集</h3>
          {this.events.map((oModel) =>
            <div className="daily-link" key={oModel.gid}>
              <img src={oModel.url_of_image} alt={oModel.summary} width="130" height="30"/>
            </div>
          )}
        </div>
      );
    }
  };
}
