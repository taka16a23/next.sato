"use client"
import React, { Component } from "react";

import ContentLoader from "react-content-loader";

import { ServiceFactory } from '@/services';
import downlaodImg from '@/assets/images/formats_download.svg';
import formImg from '@/assets/images/formats_form.svg';


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
    service.listSatoFormats().then(arrModels => {
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
        <table>
          <thead>
            <tr>
              <th className="format-name">
                書式名
              </th>
              <th className="format-description">
                概要
              </th>
              <th className="format-forms" colSpan="2">
                申込み方法
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="format-name">
                <div>
                  <ContentLoader
                    speed={2}
                    height={24}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    style={{ width: '100%' }}
                  >
                    <rect x="0" y="0" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                  </ContentLoader>
                </div>
              </td>
              <td className="format-description">
                <ContentLoader
                  speed={2}
                  height={132}
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                  style={{ width: '100%' }}
                >
                  <rect x="0" y="0" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                  <rect x="0" y="26" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                  <rect x="0" y="52" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                  <rect x="0" y="78" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                  <rect x="0" y="104" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                </ContentLoader>
              </td>
              <td className="format-download">
                <ContentLoader
                  speed={2}
                  height={50}
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                  style={{ width: '100%' }}
                >
                  <rect x="25%" y="0" rx="0" ry="0" height="50" style={{ width: '50%' }}/>
                </ContentLoader>
              </td>
              <td className="format-form">
                <ContentLoader
                  speed={2}
                  height={50}
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                  style={{ width: '100%' }}
                >
                  <rect x="25%" y="0" rx="0" ry="0" height="50" style={{ width: '50%' }}/>
                </ContentLoader>
              </td>
            </tr>
            <tr>
              <td className="format-name">
                <div>
                  <ContentLoader
                    speed={2}
                    height={24}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    style={{ width: '100%' }}
                  >
                    <rect x="0" y="0" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                  </ContentLoader>
                </div>
              </td>
              <td className="format-description">
                <ContentLoader
                  speed={2}
                  height={132}
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                  style={{ width: '100%' }}
                >
                  <rect x="0" y="0" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                  <rect x="0" y="26" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                  <rect x="0" y="52" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                  <rect x="0" y="78" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                  <rect x="0" y="104" rx="0" ry="0" height="24" style={{ width: '100%' }}/>
                </ContentLoader>
              </td>
              <td className="format-download">
                <ContentLoader
                  speed={2}
                  height={50}
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                  style={{ width: '100%' }}
                >
                  <rect x="25%" y="0" rx="0" ry="0" height="50" style={{ width: '50%' }}/>
                </ContentLoader>
              </td>
              <td className="format-form">
                <ContentLoader
                  speed={2}
                  height={50}
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                  style={{ width: '100%' }}
                >
                  <rect x="25%" y="0" rx="0" ry="0" height="50" style={{ width: '50%' }}/>
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
            <th className="format-forms" colSpan="2">
              申込み方法
            </th>
          </tr>
        </thead>
        <tbody>
          {this.models.map((oModel) =>
            <tr key={oModel.id}>
              <td className="format-name">
                <div>
                  {oModel.title}
                </div>
              </td>
              <td className="format-description">
                <div dangerouslySetInnerHTML={{ __html: oModel.description }}>
                </div>
              </td>
              <td className="format-download">
                {oModel.file === null ? undefined :
                 <a href={oModel.file} target="_blank" rel="noreferrer">
                   <div>
                     <img src={downlaodImg.src} width="24" height="32" alt="ダウンロード"/>
                   </div>
                   <div>
                     ダウンロード
                   </div>
                 </a>
                }
              </td>
              <td className="format-form">
                {oModel.form === null ? undefined :
                 <a href={oModel.form} target="_blank" rel="noreferrer">
                   <div>
                     <img src={formImg.src} width="24" height="32" alt="Web申請"/>
                   </div>
                   <div>
                     Web申請
                   </div>
                 </a>
                }
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  };
}
