import APIFactory from '@/api/APIFactory';
import { RuleModel } from '@/models';

export default class RulesRepository extends Object {

  constructor() {
    super();
    this.api = APIFactory.createRulesAPI();
  }

  get(a_oParams) {
    return new Promise((resolve, reject) => {
      this.api.get(a_oParams).then(data => {
        var tResult = [];
        data.forEach(d => {
          tResult.push(Object.assign(new RuleModel(), d));
        })
        resolve(tResult);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
