"use client"
import React, { Component } from "react";

import { ServiceFactory } from '@/services';


export default class FQA extends Component {

  constructor(props) {
    super(props)
    this.models = [];
    this.activeStates = {};
    this.state = {
      modelLength: this.models.length,
      activeStatesLength: this.activeStates.length,
    }
  }

  componentDidMount() {
    var oParams = new URLSearchParams();
    var service = ServiceFactory.createFrequentlyQuetionAnswerService();
    service.listFAQ(oParams).then(arrModels => {
      this.models = arrModels;
      var isActive = true;
      this.models.map((oModel) => {
        this.activeStates[oModel.id] = isActive;
        isActive = false;
      });
      this.setState({
        modelLength: this.models.length,
        activeStates: this.activeStates.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  handleOnClickFAQ(oModel) {
    this.activeStates[oModel.id] = !this.activeStates[oModel.id];
      this.setState({
        activeStates: this.activeStates.length,
      });
  }

  render() {
    return (
      <section className="main-item faq-wrapper">
        <h2 className="main-title faq-title">
          <span className="title">よくある質問</span>
        </h2>
        <ul className="accordion-wrapper">
          {this.models.map((oModel) =>
            <li className={"faq-item " + (this.activeStates[oModel.id] === true ? "active" : "")} key={oModel.id}>
              <h3 className="faq-question" onClick={() => {this.handleOnClickFAQ(oModel)}}>{oModel.question}</h3>
              <div className="accordion-content">
                <div className="faq-answer" dangerouslySetInnerHTML={{__html: oModel.answer}}>
                </div>
              </div>
            </li>
          )}
        </ul>
      </section>
    );
  };
}
