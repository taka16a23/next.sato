"use client"
import React, { Component } from "react";
import Link from 'next/link';

import AliasRoutes from "@/routes/AliasRoutes";
import { ServiceFactory } from '@/services';


export default class ActivityNavigation extends Component {

  constructor(props) {
    super(props)
    this.years = [];
    this.state = {
      isActive: false,
      yearsLength: this.years.length,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createActivitiesService();
    service.listYears().then(years => {
      this.years = years;
      this.setState({
        yearsLength: this.years.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  handleOnClick(ev) {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <li className="submenu-item">
        <h2 className="submenu-label" onClick={this.handleOnClick.bind(this)}>活動報告</h2>
        <ul className={this.state.isActive === true ? "menu-list" : "menu-list hide"}>
          {this.years.map((year) =>
            <li key={year} className="memu-item">
              <Link className="menu-label" href={AliasRoutes.ActivitiesYear + "/" + year} as={AliasRoutes.ActivitiesYear + "/" + year} title={year + "年の活動を見る"} onClick={() => this.handleOnClick.bind(year)}>
                {year + "年"}
              </Link>
            </li>
          )}
        </ul>
      </li>
    );
  };
}
