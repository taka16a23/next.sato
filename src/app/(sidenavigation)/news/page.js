"use client"
import React, { Component } from "react";

import NewsList from '@/components/NewsList';


export default class Page extends Component {

  static defaultProps = {
    limit: 20,
  }

  render() {
    return (
      <div className='main-area'>
        <main id="main">
          <section className="main-item">
            <h2 className="main-title">
              <span className="title">最新のお知らせ</span>
            </h2>
            <div className="main-body news">
              <NewsList limit={this.props.limit}/>
            </div>
          </section>
        </main>
      </div>
    );
  };
}
