"use client"
import React, { Component } from "react";
import Link from 'next/link'

import AliasRoutes from "@/routes/AliasRoutes";
import { ServiceFactory } from '@/services';


export default class ActivitiesFooter extends Component {

  constructor(props) {
    super(props)
    this.years = [];
    this.state = {
      yearsLength: this.years.length,
    }
  }

  componentDidMount() {
    let service = ServiceFactory.createActivitiesService();
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
            <Link href={AliasRoutes.ActivitiesYear + "/" + year} as={AliasRoutes.ActivitiesYear + "/" + year} title={year + "年の活動を見る"} prefetch={false}>
              <i className="mdi mdi-menu-right"></i>
              {year + '年'}
            </Link>
          </li>
        )}
      </ul>
    );
  };
}
