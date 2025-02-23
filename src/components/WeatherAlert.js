"use client"
import React, { Component } from "react";

import { ServiceFactory } from '@/services';


export default class WeatherAlert extends Component {

  constructor(props) {
    super(props)
    this.state = {
      WeatherWarningModel: null,
    }
  }

  componentDidMount() {
    // 気象警報を取得
    let securityService = ServiceFactory.createSecurityService();
    securityService.getWeatherWarning().then(model => {
      this.setState({
        WeatherWarningModel: model,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    return (
      <div className="weather-alert-container">
        <div className="weather-alert">
          <div className="weather-alert-date">
            <p>
              <span>大津市南部</span>
              {this.state.WeatherWarningModel === null ? '' :
               this.state.WeatherWarningModel.date}
            </p>
          </div>
          <table className="weather-rain-heavy-rain" cellSpacing="0" cellPadding="0">
            <tbody>
              <tr>
                <th width="200">記録的短時間大雨情報</th>
                <td>
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.heavyRainWarning}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="weather-alert-content" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <th colSpan="5" className="weather-special-warning" scope="col">特別警報</th>
                <th colSpan="6" className="weather-warning" scope="col">警報</th>
                <th colSpan="14" className="weather-advisories" scope="col">注意報</th>
              </tr>
              <tr>
                <th rowSpan="2" width="20" className="weather-special-warning">暴風雪</th>
                <th colSpan="2" className="weather-special-warning">大雨</th>
                <th rowSpan="2" width="20" className="weather-special-warning">暴風</th>
                <th rowSpan="2" width="20" className="weather-special-warning">大雪</th>
                <th rowSpan="2" width="20" className="weather-warning">暴風雪</th>
                <th colSpan="2" className="weather-warning">大雨</th>
                <th rowSpan="2" width="20" className="weather-warning">洪水</th>
                <th rowSpan="2" width="20" className="weather-warning">暴風</th>
                <th rowSpan="2" width="20" className="weather-warning">大雪</th>
                <th rowSpan="2" width="20" className="weather-advisories">大雨</th>
                <th rowSpan="2" width="20" className="weather-advisories">大雪</th>
                <th rowSpan="2" width="20" className="weather-advisories">風雪</th>
                <th rowSpan="2" width="20" className="weather-advisories">雷</th>
                <th rowSpan="2" width="20" className="weather-advisories">強風</th>
                <th rowSpan="2" width="20" className="weather-advisories">融雪</th>
                <th rowSpan="2" width="20" className="weather-advisories">洪水</th>
                <th rowSpan="2" width="20" className="weather-advisories">濃霧</th>
                <th rowSpan="2" width="20" className="weather-advisories">乾燥</th>
                <th rowSpan="2" width="20" className="weather-advisories">なだれ</th>
                <th rowSpan="2" width="20" className="weather-advisories">低温</th>
                <th rowSpan="2" width="20" className="weather-advisories">霜</th>
                <th rowSpan="2" width="20" className="weather-advisories">着氷</th>
                <th rowSpan="2" width="20" className="weather-advisories">着雪</th>
              </tr>
              <tr>
                <th width="20" className="weather-special-warning">
                  土砂災害
                </th>
                <th width="20" className="weather-special-warning">
                  浸水害
                </th>
                <th width="20" className="weather-warning">
                  土砂災害
                </th>
                <th width="20" className="weather-warning">
                  浸水害
                </th>
              </tr>
              <tr>
                <td className="weather-special-warning">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Em_Snow_storm}
                </td>
                <td className="weather-special-warning">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Em_Landslide_disaster}
                </td>
                <td className="weather-special-warning">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Em_Flood_damage}
                </td>
                <td className="weather-special-warning">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Em_Storm}
                </td>
                <td className="weather-special-warning">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Em_Heavy_snow}
                </td>
                <td className="weather-warning">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Wa_Snow_storm}
                </td>
                <td className="weather-warning">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Wa_Landslide_disaster}
                </td>
                <td className="weather-warning">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Wa_Flood_damage}
                </td>
                <td className="weather-warning">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Wa_Flood}
                </td>
                <td className="weather-warning">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Wa_Storm}
                </td>
                <td className="weather-warning">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Wa_Heavy_snow}
                </td>
                <td className="weather-advisories">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Ad_Heavy_rain}
                </td>
                <td className="weather-advisories">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Ad_Heavy_snow}
                </td>
                <td className="weather-advisories">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Ad_Gale_and_snow}
                </td>
                <td className="weather-advisories">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Ad_Thunderstorm}
                </td>
                <td className="weather-advisories">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Ad_Gale}
                </td>
                <td className="weather-advisories">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Ad_Snow_melting}
                </td>
                <td className="weather-advisories">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Ad_Flood}
                </td>
                <td className="weather-advisories">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Ad_Dense_fog}
                </td>
                <td className="weather-advisories">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Ad_Dry_air}
                </td>
                <td className="weather-advisories">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Ad_Avalanche}
                </td>
                <td className="weather-advisories">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Ad_Low_temperatur}
                </td>
                <td className="weather-advisories">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Ad_Frost}
                </td>
                <td className="weather-advisories">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Ad_Ice_accretion}
                </td>
                <td className="weather-advisories">
                  {this.state.WeatherWarningModel === null ? '' :
                   this.state.WeatherWarningModel.Ad_Snow_accretion}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="weather-alert-remark" cellSpacing="0" cellPadding="0">
            <tbody>
              <tr>
                <th className="weather-special-warning">特別警報</th>
                <td>重大な災害が起こるおそれが著しく大きいとき</td>
              </tr>
              <tr>
                <th className="weather-warning">警報</th>
                <td>重大な災害が起こるおそれのあるとき</td>
              </tr>
              <tr>
                <th className="weather-advisories">注意報</th>
                <td>大雨や強風などによって災害が起こるおそれのあるとき</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
}
