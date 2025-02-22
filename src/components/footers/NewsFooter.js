"use client"
import React, { Component } from "react";
import Link from 'next/link'

import AliasRoutes from "@/routes/AliasRoutes";
import { ServiceFactory } from '@/services';


export default class NewsFooter extends Component {

  constructor(props) {
    super(props)
    this.years = [];
    this.state = {
      yearsLength: this.years.length,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createNewsService();
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
            <Link href={AliasRoutes.NewsYear + "/" + year} as={AliasRoutes.NewsYear + "/" + year} title={year + "年のお知らせを見る"} prefetch={false}>
              <i className="mdi mdi-menu-right"></i>
              {year + '年'}
            </Link>
          </li>
        )}
      </ul>
    );
  };
}
