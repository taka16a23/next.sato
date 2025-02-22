import APIFactory from '@/api/APIFactory';
import { WeatherWarningModel } from '@/models';

export default class WeatherWarningRepository extends Object {

  constructor() {
    super();
    this.api = APIFactory.createSecurityWeatherWarningsAPI();
  }

  get(a_oParams) {
    return new Promise((resolve, reject) => {
      this.api.get(a_oParams).then(data => {
        var tResult = [];
        data.forEach(d => {
          tResult.push(Object.assign(new WeatherWarningModel(), d));
        })
        resolve(tResult);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
