"use client"
import React, { Component } from "react";

import moment from 'moment';
import ContentLoader from "react-content-loader";

import { ServiceFactory } from '@/services';


export default class Page extends Component {

  constructor(props) {
    super(props);
    this.models = [];
    this.state = {
      modelLength: this.models.length,
      isLoading: false,
    }
  }

  componentDidMount() {
    let service = ServiceFactory.createBoardsService();
    service.listBoards(this.props.params.year).then(arrModels => {
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
        <div className='main-area'>
          <main id="main">
            <div className="main-item board">
              <h2 className="main-title">
                <span className="title">{this.props.params.year + '年 '}回覧板</span>
              </h2>
              <div className="main-body">
                <div className="board-container">
                  <div className="board-container-inner">
                    <div className="board-list">
                      <div className="board-item">
                        <div className="board-item-container">
                          <div className="board-item-container-inner">
                            <div className="board-title text-mute">
                              <ContentLoader
                                speed={2}
                                width={140}
                                height={24}
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                              >
                                <rect x="0" y="0" rx="0" ry="0" width="140" height="24"/>
                              </ContentLoader>
                            </div>
                            <div className="board-body">
                              <ContentLoader
                                speed={2}
                                width={280}
                                height={360}
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                              >
                                <rect x="0" y="0" rx="0" ry="0" width="280" height="360"/>
                              </ContentLoader>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="board-item">
                        <div className="board-item-container">
                          <div className="board-item-container-inner">
                            <div className="board-title text-mute">
                              <ContentLoader
                                speed={2}
                                width={140}
                                height={24}
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                              >
                                <rect x="0" y="0" rx="0" ry="0" width="140" height="24"/>
                              </ContentLoader>
                            </div>
                            <div className="board-body">
                              <ContentLoader
                                speed={2}
                                width={280}
                                height={360}
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                              >
                                <rect x="0" y="0" rx="0" ry="0" width="280" height="360"/>
                              </ContentLoader>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="board-item">
                        <div className="board-item-container">
                          <div className="board-item-container-inner">
                            <div className="board-title text-mute">
                              <ContentLoader
                                speed={2}
                                width={140}
                                height={24}
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                              >
                                <rect x="0" y="0" rx="0" ry="0" width="140" height="24"/>
                              </ContentLoader>
                            </div>
                            <div className="board-body">
                              <ContentLoader
                                speed={2}
                                width={280}
                                height={360}
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                              >
                                <rect x="0" y="0" rx="0" ry="0" width="280" height="360"/>
                              </ContentLoader>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="board-item">
                        <div className="board-item-container">
                          <div className="board-item-container-inner">
                            <div className="board-title text-mute">
                              <ContentLoader
                                speed={2}
                                width={140}
                                height={24}
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                              >
                                <rect x="0" y="0" rx="0" ry="0" width="140" height="24"/>
                              </ContentLoader>
                            </div>
                            <div className="board-body">
                              <ContentLoader
                                speed={2}
                                width={280}
                                height={360}
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                              >
                                <rect x="0" y="0" rx="0" ry="0" width="280" height="360"/>
                              </ContentLoader>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="board-item">
                        <div className="board-item-container">
                          <div className="board-item-container-inner">
                            <div className="board-title text-mute">
                              <ContentLoader
                                speed={2}
                                width={140}
                                height={24}
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                              >
                                <rect x="0" y="0" rx="0" ry="0" width="140" height="24"/>
                              </ContentLoader>
                            </div>
                            <div className="board-body">
                              <ContentLoader
                                speed={2}
                                width={280}
                                height={360}
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                              >
                                <rect x="0" y="0" rx="0" ry="0" width="280" height="360"/>
                              </ContentLoader>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="board-item">
                        <div className="board-item-container">
                          <div className="board-item-container-inner">
                            <div className="board-title text-mute">
                              <ContentLoader
                                speed={2}
                                width={140}
                                height={24}
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                              >
                                <rect x="0" y="0" rx="0" ry="0" width="140" height="24"/>
                              </ContentLoader>
                            </div>
                            <div className="board-body">
                              <ContentLoader
                                speed={2}
                                width={280}
                                height={360}
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                              >
                                <rect x="0" y="0" rx="0" ry="0" width="280" height="360"/>
                              </ContentLoader>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )
    }
    if(this.models.length <= 0) {
      return (
        <div className='main-area'>
          <main id="main">
            <div className={1 <= this.state.modelLength ? "main-item board" : "main-item"}>
              <h2 className="main-title">
                <span className="title">{this.props.year + '年 '}回覧板</span>
              </h2>
              <div className="main-body">
                <div className="board-container">
                  <div className="board-container-inner">
                    <div className="board-list">
                      <div>表示する記事がありません。</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )
    }
    return (
      <div className='main-area'>
        <main id="main">
          <div className={1 <= this.state.modelLength ? "main-item board" : "main-item"}>
            <h2 className="main-title">
              <span className="title">{this.props.params.year + '年 '}回覧板</span>
            </h2>
            <div className="main-body">
              <div className="board-container">
                <div className="board-container-inner">
                  <div className="board-list">
                    {this.models.map((oModel) =>
                      <div className="board-item" key={oModel.id}>
                        <div className="board-item-container">
                          <div className="board-item-container-inner">
                            <div className="board-title text-mute">
                              <a href={process.env.NEXT_PUBLIC_APP_API_URL + oModel.getFile()} target="_blank" rel="noreferrer">{oModel.getTitle()}</a>
                            </div>
                            <div className="board-body">
                              <a href={process.env.NEXT_PUBLIC_APP_API_URL + oModel.getFile()} target="_blank" rel="noreferrer">
                                <img src={process.env.NEXT_PUBLIC_APP_API_URL + oModel.getThumbnail()} width="280" height="360" alt="board"/>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };
}
