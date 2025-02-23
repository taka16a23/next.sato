"use client"
import React, { Component } from "react";

import ContentLoader from "react-content-loader"

import { ServiceFactory } from '@/services';


export default class Page extends Component {

  constructor(props) {
    super(props);
    this.models = [];
    this.state = {
      modelLength: this.models.length,
      isLoading: true,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createSecurityKnowledgeService();
    service.listSecurityKnowledges().then(arrModels => {
      this.models = arrModels;
      this.setState({
        modelLength: this.models.length,
        isLoading: false,
      });
    }).catch(err => {
      alert(err);
    });
  }

  getSkeltons() {
    var elements = [];
    for (var i = 0; i < 6; i++) {
      elements.push(
        <li className="tile-item">
          <ContentLoader
            speed={2}
            width="100%"
            height={430}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="20" y="22" rx="0" ry="0" width="90%" height="204"/>
            <rect x="10%" y="242" rx="0" ry="0" width="80%" height="20"/>
            <rect x="40%" y="280" rx="0" ry="0" width="20%" height="12"/>
            <rect x="10%" y="304" rx="0" ry="0" width="80%" height="20"/>
            <rect x="10%" y="332" rx="0" ry="0" width="80%" height="20"/>
            <rect x="10%" y="360" rx="0" ry="0" width="80%" height="20"/>
          </ContentLoader>
        </li>
      );
    }
    return elements;
  }

  render() {
    if(this.state.isLoading === true) {
      return (
        <div className='main-area'>
          <main id="main">
            <section className="main-item faq-wrapper">
              <h2 className="main-title faq-title">
                <span className="title">防災予備知識</span>
              </h2>
              <ul className="tile-list">
                {this.getSkeltons()}
              </ul>
            </section>
          </main>
        </div>
      )
    }
    return (
      <div className='main-area'>
        <main id="main">
          <section className="main-item faq-wrapper">
            <h2 className="main-title faq-title">
              <span className="title">防災予備知識</span>
            </h2>
            <ul className="tile-list">
              {this.models.map((oModel) =>
                <li className="tile-item" key={oModel.id}>
                  <a href={oModel.url} target="_blank" rel="noreferrer">
                    <img className="tile-image" src={process.env.NEXT_PUBLIC_APP_API_URL + oModel.thumbnail} alt={oModel.title}/>
                    <h4 className="tile-title">{oModel.title}</h4>
                    <div className="tile-description">
                      <p className="tile-text" dangerouslySetInnerHTML={{ __html: oModel.description }}>
                      </p>
                    </div>
                  </a>
                </li>
              )}
            </ul>
          </section>
        </main>
      </div>
    );
  };
}
