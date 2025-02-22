import APIFactory from '@/api/APIFactory';
import { EmergencyModel } from '@/models';

export default class EmergencyRepository extends Object {

  constructor() {
    super();
    this.api = APIFactory.createSecurityEmergencyAPI();
  }

  get(a_oParams) {
    return new Promise((resolve, reject) => {
      this.api.get(a_oParams).then(data => {
        var tResult = [];
        data.forEach(d => {
          tResult.push(Object.assign(new EmergencyModel(), d));
        })
        resolve(tResult);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
