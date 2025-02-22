"use client"
import React, { Component } from "react";

import TomorrowGarbageEvents from './TomorrowGarbageEvents';
import TomorrowMainEvents from './TomorrowMainEvents';


export default class TomorrowEvents extends Component {

  render() {
    return (
      <>
        <TomorrowGarbageEvents/>
        <TomorrowMainEvents/>
      </>
    )
  };
}
