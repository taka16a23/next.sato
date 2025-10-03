"use client"
import React, { Component } from "react";

import ContentLoader from "react-content-loader";


export default class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  onLoaded() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    return (
      <div className='main-area'>
        <main id="main">
          <section className="main-item">
            <h2 className="main-title">
              <span className="title">ブロックと組割の地図</span>
            </h2>
            <ContentLoader
              speed={2}
              width="100%"
              height={520}
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
              style={{display: this.state.isLoading === true ? "block" : "none"}}
            >
              <rect x="0" y="0" rx="0" ry="0" width="100%" height="520"/>
            </ContentLoader>
            <iframe
              src="https://www.google.com/maps/d/u/1/embed?mid=zJXaXK9GQ-AU.kCiGt_OQoawU"
              title="calendar"
              height="520"
              onLoad={this.onLoaded.bind(this)}
              style={{
                width: "100%",
                display: this.state.isLoading === true ? "none" : "block"
              }}
            >
            </iframe>
          </section>
        </main>
      </div>
    );
  }
}
