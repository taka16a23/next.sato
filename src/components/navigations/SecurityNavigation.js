"use client"
import React, { Component } from "react";
import Link from 'next/link'
import AliasRoutes from "@/routes/AliasRoutes";


export default class SecurityNavigation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
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
        <h2 className="submenu-label" onClick={this.handleOnClick.bind(this)}>防犯・防災</h2>
        <ul className={this.state.isActive === true ? "menu-list" : "menu-list hide"}>
          <li className="memu-item">
            <Link className="menu-label" href={AliasRoutes.SecurityPortal} as={AliasRoutes.SecurityPortal} alt="防災統合情報" title="防災統合情報を見る">
              防災統合情報
            </Link>
          </li>
          <li className="memu-item">
            <Link className="menu-label" href={AliasRoutes.SecurityKnowledge} as={AliasRoutes.SecurityPortal} alt="防災予備知識" title="防災予備知識を見る">
              防災予備知識
            </Link>
          </li>
        </ul>
      </li>
    );
  };
}
