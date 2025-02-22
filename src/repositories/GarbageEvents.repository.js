import APIFactory from '@/api/APIFactory';
import { GarbageEventModel } from '@/models';

export default class GarbageEventsRepository extends Object {

  constructor() {
    super();
    this.api = APIFactory.createGarbageEventCalendarAPI();
  }

  get(a_oParams) {
    return new Promise((resolve, reject) => {
      this.api.get(a_oParams).then(data => {
        var tResult = [];
        data.forEach(d => {
          tResult.push(Object.assign(new GarbageEventModel(), d));
        })
        resolve(tResult);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
