import APIFactory from '@/api/APIFactory';
import { SatoFormatModel } from '@/models';

export default class SatoFormatsRepository extends Object {

  constructor() {
    super();
    this.api = APIFactory.createSatoFormatsAPI();
  }

  get(a_oParams) {
    return new Promise((resolve, reject) => {
      this.api.get(a_oParams).then(data => {
        var tResult = [];
        data.forEach(d => {
          tResult.push(Object.assign(new SatoFormatModel(), d));
        })
        resolve(tResult);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
