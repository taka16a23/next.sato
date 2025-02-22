import APIFactory from '@/api/APIFactory';
import { OtherFormatModel } from '@/models';

export default class OtherFormatsRepository extends Object {

  constructor() {
    super();
    this.api = APIFactory.createOtherFormatsAPI();
  }

  get(a_oParams) {
    return new Promise((resolve, reject) => {
      this.api.get(a_oParams).then(data => {
        var tResult = [];
        data.forEach(d => {
          tResult.push(Object.assign(new OtherFormatModel(), d));
        })
        resolve(tResult);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
