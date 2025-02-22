"use client"
import React, { Component } from "react";
import Link from 'next/link'
import AliasRoutes from "@/routes/AliasRoutes";


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
          <li className="memu-item">
            <Link className="menu-label" href={AliasRoutes.Activities} as={AliasRoutes.Activities} title={"2020年のおしらせを見る"}>
              {"2020" + "年"}
            </Link>
          </li>
          <li className="memu-item">
            <Link className="menu-label" href={AliasRoutes.Activities} as={AliasRoutes.Activities} title={"2020年のおしらせを見る"}>
              {"2021" + "年"}
            </Link>
          </li>
          <li className="memu-item">
            <Link className="menu-label" href={AliasRoutes.Activities} as={AliasRoutes.Activities} title={"2020年のおしらせを見る"}>
              {"2022" + "年"}
            </Link>
          </li>
        </ul>
      </li>
    );
  };
}
