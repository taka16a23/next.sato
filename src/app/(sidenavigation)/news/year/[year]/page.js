"use client"
import React, { Component } from "react";

import NewsList from '@/components/NewsList';


export default class Page extends Component {

  static defaultProps = {
    limit: 100,
  }

  render() {
    return (
      <div className='main-area'>
        <main id="main">
          <section className="main-item">
            <h2 className="main-title">
              <span className="title">{this.props.params.year ? this.props.params.year + "年 お知らせ一覧" : ''}</span>
            </h2>
            <div className="main-body news">
              <NewsList year={this.props.params.year} limit={this.props.limit}/>
            </div>
          </section>
        </main>
      </div>
    );
  };
}
