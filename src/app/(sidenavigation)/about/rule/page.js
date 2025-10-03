"use client"
import React, { Component } from "react";

import { ServiceFactory } from '@/services';


export default class Page extends Component {

  constructor(props) {
    super(props);
    this.models = [];
    this.state = {
      modelLength: this.models.length,
    }
  }

  componentDidMount() {
    var oParams = new URLSearchParams();
    var service = ServiceFactory.createRulesService();
    service.listRules(oParams).then(arrModels => {
      this.models = arrModels;
      this.setState({
        modelLength: this.models.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    return (
      <div className='main-area'>
        <main id="main">
          {this.models.map((oModel) =>
            <div className="main-item" key={oModel.id}>
              <h2 className="main-title">
                <span className="title">{oModel.title}</span>
              </h2>
              <div className="main-content rule-content">
                {oModel.listImages().map((oImageModel) =>
                  <div className="rule-image" key={oImageModel.id}>
                    <a href={process.env.NEXT_PUBLIC_APP_API_URL + oModel.document} target="_blank" rel="noreferrer noopener" title="PDFをダウンロード">
                      <img src={process.env.NEXT_PUBLIC_APP_API_URL + oImageModel.image} alt={oImageModel.id} width="760" height="1076"/>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    );
  };
}
