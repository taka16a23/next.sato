import { RepositoryFactory } from '@/repositories';
import { WeatherWarningModel, EmergencyModel } from '@/models';


export default class SecurityService extends Object {

  constructor() {
    super();
    this.weather_warnings_repository = RepositoryFactory.createWeatherWarningsRepository();
    this.emergency_repository = RepositoryFactory.createEmergencyRepository();
  }

  getWeatherWarning() {
    return new Promise((resolve, reject) => {
      var tData = {'params': {}};
      this.weather_warnings_repository.get(tData).then(models => {
        let result = new WeatherWarningModel();
        if (1 <= models.length) {
          result = models[0];
        }
        resolve(result);
      }).catch(err => {
        reject(err);
      });
    });
  }

  getEmergency() {
    return new Promise((resolve, reject) => {
      var tData = {'params': {}};
      this.emergency_repository.get(tData).then(models => {
        let result = new EmergencyModel();
        if (1 <= models.length) {
          result = models[0];
        }
        resolve(result);
      }).catch(err => {
        reject(err);
      });
    });
  }

}
