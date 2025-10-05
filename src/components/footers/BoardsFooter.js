"use client"
import React, { Component } from "react";
import Link from 'next/link';

import AliasRoutes from "@/routes/AliasRoutes";
import { ServiceFactory } from '@/services';


export default class BoardsFooter extends Component {

  constructor(props) {
    super(props)
    this.years = [];
    this.state = {
      yearsLength: this.years.length,
    }
  }

  componentDidMount() {
    let service = ServiceFactory.createBoardsService();
    service.listYears().then(years => {
      this.years = years;
      this.setState({
        yearsLength: this.years.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    return (
      <ul className="sitemap-list">
        {this.years.map((year) =>
          <li key={year} className="sitemap-item">
            <Link href={AliasRoutes.BoardsYear + "/" + year} as={AliasRoutes.BoardsYear + "/" + year} title={year + "年の回覧を見る"} prefetch={false}>
              <i className="mdi mdi-menu-right"></i>
              {year + '年'}
            </Link>
          </li>
        )}
      </ul>
    );
  };
}
