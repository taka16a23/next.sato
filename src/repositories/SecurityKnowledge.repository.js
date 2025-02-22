import APIFactory from '@/api/APIFactory';
import { SecurityKnowledgeModel } from '@/models';

export default class SecurityKnowledgeRepository extends Object {

  constructor() {
    super();
    this.api = APIFactory.createSecurityKnowledgeAPI();
  }

  get(a_oParams) {
    return new Promise((resolve, reject) => {
      this.api.get(a_oParams).then(data => {
        var tResult = [];
        data.forEach(d => {
          tResult.push(Object.assign(new SecurityKnowledgeModel(), d));
        })
        resolve(tResult);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
