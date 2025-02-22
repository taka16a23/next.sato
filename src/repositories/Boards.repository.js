import APIFactory from '@/api/APIFactory';
import { BoardModel } from '@/models';

export default class BoardsRepository extends Object {

  constructor() {
    super();
    this.api = APIFactory.createBoardsAPI();
  }

  get(a_oParams) {
    return new Promise((resolve, reject) => {
      this.api.get(a_oParams).then(data => {
        var tResult = [];
        data.forEach(d => {
          tResult.push(Object.assign(new BoardModel(), d));
        })
        resolve(tResult);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
