import APIFactory from '@/api/APIFactory';
import { FrequentlyQuetionAnswerModel } from '@/models';

export default class FrequentlyQuetionAnswerRepository extends Object {

  constructor() {
    super();
    this.api = APIFactory.createFrequentlyQuetionAnswerAPI();
  }

  get(a_oParams) {
    return new Promise((resolve, reject) => {
      this.api.get(a_oParams).then(data => {
        var tResult = [];
        data.forEach(d => {
          tResult.push(Object.assign(new FrequentlyQuetionAnswerModel(), d));
        })
        resolve(tResult);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
