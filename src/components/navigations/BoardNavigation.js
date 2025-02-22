"use client"
import React, { Component } from "react";
import Link from 'next/link'

import AliasRoutes from "@/routes/AliasRoutes";
import { ServiceFactory } from '@/services';


export default class BoardNavigation extends Component {

  constructor(props) {
    super(props)
    this.years = [];
    this.state = {
      isActive: false,
      yearsLength: this.years.length,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createBoardsService();
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
        <h2 className="submenu-label" onClick={this.handleOnClick.bind(this)}>回覧板</h2>
        <ul className={this.state.isActive === true ? "menu-list" : "menu-list hide"}>
          {this.years.map((year) =>
            <li key={year} className="memu-item">
              <Link className="menu-label" href={AliasRoutes.Board + "/year/" + year} as={AliasRoutes.Board + "/year/" + year} title={year + "年の回覧板を見る"} prefetch={false}>
                {year + "年"}
              </Link>
            </li>
          )}
        </ul>
      </li>
    );
  };
}
