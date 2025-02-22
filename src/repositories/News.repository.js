import APIFactory from '@/api/APIFactory';
import { NewsModel } from '@/models';

export default class NewsRepository extends Object {

  constructor() {
    super();
    this.api = APIFactory.createNewsAPI();
  }

  get(a_oParams) {
    return new Promise((resolve, reject) => {
      this.api.get(a_oParams).then(data => {
        var tResult = [];
        data.forEach(d => {
          tResult.push(Object.assign(new NewsModel(), d));
        })
        resolve(tResult);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
