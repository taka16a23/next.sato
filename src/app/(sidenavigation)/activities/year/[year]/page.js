"use client"
import React, { Component } from "react";
import Link from 'next/link';

import moment from 'moment';
import ContentLoader from "react-content-loader";

import AliasRoutes from "@/routes/AliasRoutes";
import { ServiceFactory } from '@/services';


export default class Page extends Component {

  constructor(props) {
    super(props)
    this.models = [];
    this.state = {
      modelLength: this.models.length,
      isLoading: false,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createActivitiesService();
    service.listActivities(this.props.params.year).then(arrModels => {
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
                <span className="title">{this.props.params.year ? this.props.params.year + '年 ' : '    年'} 活動報告</span>
              </h2>
              <ul className="tile-list">
                {this.getSkeltons()}
              </ul>
            </section>
          </main>
        </div>
      )
    }
    if(this.models.length <= 0) {
      return (
        <div className='main-area'>
          <main id="main">
            <section className="main-item faq-wrapper">
              <h2 className="main-title faq-title">
                <span className="title">{this.state.year ? this.state.year + '年 ' : '    年'} 活動報告</span>
              </h2>
              <div style={{textAlign: "center"}}>記事が存在しません</div>
            </section>
          </main>
        </div>
      );
    }
    return (
      <div className='main-area'>
        <main id="main">
          <section className="main-item faq-wrapper">
            <h2 className="main-title faq-title">
              <span className="title">{this.props.params.year ? this.props.params.year + '年 ' : '    年'} 活動報告</span>
            </h2>
            <ul className="tile-list">
              {this.models.map((oModel) =>
                <li className="tile-item" key={oModel.id}>
                  <Link href={AliasRoutes.Activity.replace(':id', oModel.id)} as={AliasRoutes.Activity.replace(':id', oModel.id)}>
                    <img className="tile-image" src={process.env.NEXT_PUBLIC_APP_API_URL + oModel.image} alt={oModel.title}/>
                    <h4 className="tile-title">{oModel.title}</h4>
                    <div className="tile-sub">
                      <p>{moment(oModel.publish_date).format('YYYY/MM/DD')}</p>
                    </div>
                    <div className="tile-description">
                      <p className="tile-text" dangerouslySetInnerHTML={{ __html: oModel.excerpt }}>
                      </p>
                    </div>
                  </Link>
                </li>
              )}
            </ul>
          </section>
        </main>
      </div>
    );
  };
}
