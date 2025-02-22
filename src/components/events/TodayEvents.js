"use client"
import React, { Component } from "react";

import TodayHallEvents from './TodayHallEvents';
import TodayMainEvents from './TodayMainEvents';
import TodayGarbageEvents from './TodayGarbageEvents';


export default class TodayEvents extends Component {

  render() {
    return (
      <>
        <TodayGarbageEvents/>
        <TodayMainEvents/>
        <TodayHallEvents/>
      </>
    )
  };
}
