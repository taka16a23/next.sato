import APIFactory from '@/api/APIFactory';
import { MainEventModel } from '@/models';

export default class MainEventsRepository extends Object {

  constructor() {
    super();
    this.api = APIFactory.createMainEventCalendarAPI();
  }

  get(a_oParams) {
    return new Promise((resolve, reject) => {
      this.api.get(a_oParams).then(data => {
        var tResult = [];
        data.forEach(d => {
          tResult.push(Object.assign(new MainEventModel(), d));
        })
        resolve(tResult);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
