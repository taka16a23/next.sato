"use client"
import React, { Component } from "react";

import ContentLoader from "react-content-loader";

import { ServiceFactory } from '@/services';


export default class SatoFormats extends Component {

  constructor(props) {
    super(props)
    this.models = [];
    this.state = {
      modelLength: this.models.length,
      isLoading: true,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createFormatsService();
    service.listOtherFormats().then(arrModels => {
      this.models = arrModels;
      this.setState({
        modelLength: this.models.length,
        isLoading: false,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    if(this.state.isLoading === true) {
      return (
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th className="format-name">
                書式名
              </th>
              <th className="format-description">
                概要
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="format-name">
                <ContentLoader
                  speed={2}
                  height={24}
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                  style={{ width: '100%' }}
                >
                  <rect x="0" y="0" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                </ContentLoader>
              </td>
              <td className="format-description">
                <ContentLoader
                  speed={2}
                  height={78}
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                  style={{ width: '100%' }}
                >
                  <rect x="0" y="0" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                  <rect x="0" y="26" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                  <rect x="0" y="52" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                </ContentLoader>
              </td>
            </tr>
            <tr>
              <td className="format-name">
                <ContentLoader
                  speed={2}
                  height={24}
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                  style={{ width: '100%' }}
                >
                  <rect x="0" y="0" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                </ContentLoader>
              </td>
              <td className="format-description">
                <ContentLoader
                  speed={2}
                  height={78}
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                  style={{ width: '100%' }}
                >
                  <rect x="0" y="0" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                  <rect x="0" y="26" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                  <rect x="0" y="52" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                </ContentLoader>
              </td>
            </tr>
          </tbody>
        </table>
      )
    }
    return (
      <table>
        <thead>
          <tr>
            <th className="format-name">
              書式名
            </th>
            <th className="format-description">
              概要
            </th>
          </tr>
        </thead>
        <tbody>
          {this.models.map((oModel) =>
            <tr key={oModel.id}>
              <td className="format-name">
                <a href={oModel.url} target="_blank" rel="noreferrer">
                  {oModel.title}
                </a>
              </td>
              <td className="format-description" dangerouslySetInnerHTML={{ __html: oModel.description }}>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  };
}
