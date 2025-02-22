import APIFactory from '@/api/APIFactory';
import { HallEventModel } from '@/models';

export default class HallEventsRepository extends Object {

  constructor() {
    super();
    this.api = APIFactory.createHallEventCalendarAPI();
  }

  get(a_oParams) {
    return new Promise((resolve, reject) => {
      this.api.get(a_oParams).then(data => {
        var tResult = [];
        data.forEach(d => {
          tResult.push(Object.assign(new HallEventModel(), d));
        })
        resolve(tResult);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
