"use client"
import React, { Component } from "react";

import TodayEvents from '@/components/events/TodayEvents';


export default class DayCalendar extends Component {


  constructor(props) {
    super(props)
    this.state = {
      today: new Date()
    }
  }

  render() {
    return (
      <div className="side-item">
        <h2 className="side-title">
          <a className="link" href="https://calendar.google.com/calendar/embed?showTitle=0&amp;showCalendars=0&amp;showTz=0&amp;mode=MONTH&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=satotanakami%40gmail.com&amp;color=%23125A12&amp;ctz=Asia%2FTokyo" rel="noopener noreferrer" target="_blank" alt=""  title="今日">
            <span className="title">今日</span>
          </a>
        </h2>
        <div className="side-body daily-today">
          <div className="daily-calendar">
            <a href="https://calendar.google.com/calendar/embed?showTitle=0&amp;showCalendars=0&amp;showTz=0&amp;mode=MONTH&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=satotanakami%40gmail.com&amp;color=%23125A12&amp;ctz=Asia%2FTokyo" alt="" target="_blank" title="今日">
              <div className="daily-date daily-year daily-month">
                <span>{this.state.today.getFullYear()}年{this.state.today.getMonth() + 1}月</span>
              </div>
              <div className="daily-date daily-date-day">
                <span className="daily-date-num">{this.state.today.getDate()}</span><span>日</span>
              </div>
              <div className="daily-date daily-weekly">
                <span>{[ "日", "月", "火", "水", "木", "金", "土" ][this.state.today.getDay()]}曜日</span>
              </div>
            </a>
          </div>
          <TodayEvents/>
        </div>
      </div>
    );
  };
}
