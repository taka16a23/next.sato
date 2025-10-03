"use client"
import React, { Component } from "react";

import { ServiceFactory } from '@/services';
import Spinner from "@/components/spinner/Spinner";


export default class Page extends Component {

  constructor(props) {
    super(props)
    this.state = {
      model: null,
      isLoaded: false,
    }
  }

  componentDidMount() {
    var service = ServiceFactory.createActivitiesService();
    service.getActivity(this.props.params.id).then(models => {
      if (models.length <= 0) {
        this.setState({
          isLoaded: true,
        });
        return;
      }
      this.setState({
        isLoaded: true,
        model: models[0],
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    if(this.state.isLoaded !== true) {
      return (
        <Spinner/>
      )
    }
    if(this.state.model === null) {
      return (
        <div className='main-area'>
          <main id="main">
            <section className="main-item">
              <h2 className="main-title">
                <span className="title">記事が存在しません</span>
              </h2>
              <div>
              </div>
            </section>
          </main>
        </div>
      );
    }
    return (
      <div className='main-area'>
        <main id="main">
          <section className="main-item">
            <h2 className="main-title">
              <span className="title">{this.state.model.title}</span>
            </h2>
            <div>
              <div dangerouslySetInnerHTML={{__html: this.state.model.body.replaceAll('/media/', process.env.NEXT_PUBLIC_APP_API_URL + '/media/')}} />
            </div>
          </section>
        </main>
      </div>
    )
  };
}
