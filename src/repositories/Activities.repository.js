import APIFactory from '@/api/APIFactory';
import { ActivityModel } from '@/models';

export default class BoardsRepository extends Object {

  constructor() {
    super();
    this.api = APIFactory.createActivitiesAPI();
  }

  get(a_oParams) {
    return new Promise((resolve, reject) => {
      this.api.get(a_oParams).then(data => {
        var tResult = [];
        data.forEach(d => {
          tResult.push(Object.assign(new ActivityModel(), d));
        })
        resolve(tResult);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
