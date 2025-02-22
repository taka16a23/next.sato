"use client"
import React, { Component } from "react";
import Link from 'next/link'
import AliasRoutes from "@/routes/AliasRoutes";


export default class AboutNavigation extends Component {

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
        <h2 className="submenu-label" onClick={this.handleOnClick.bind(this)}>自治会案内</h2>
        <ul className={this.state.isActive === true ? "menu-list" : "menu-list hide"}>
          <li className="memu-item">
            <Link className="menu-label" href={AliasRoutes.AboutRule} as={AliasRoutes.AboutRule} alt="会則" title="会則を見る">
              会則
            </Link>
          </li>
          <li className="memu-item">
            <Link className="menu-label" href={AliasRoutes.AboutHall} as={AliasRoutes.AboutRule} alt="里公民館" title="里公民館を見る">
              里公民館
            </Link>
          </li>
          <li className="memu-item">
            <Link className="menu-label" href={AliasRoutes.AboutGroup} as={AliasRoutes.AboutRule} alt="ブロックと組" title="ブロックと組を見る">
              ブロックと組
            </Link>
          </li>
          <li className="memu-item">
            <Link className="menu-label" href={AliasRoutes.AboutQuery} as={AliasRoutes.AboutRule} alt="情報提供・問い合わせ" title="情報提供・問い合わせを見る">
              情報提供・問い合わせ
            </Link>
          </li>
        </ul>
      </li>
    );
  };
}
