import { RepositoryFactory } from '@/repositories';

import moment from 'moment';


export default class BoardsService extends Object {

  constructor() {
    super();
    this.repository = RepositoryFactory.createBoardsRepository();
    this._cache = {};
  }

  listBoards(a_Year=null) {
    return new Promise((resolve, reject) => {
      let tYear = a_Year;
      if (!tYear) {
        tYear = (new Date()).getFullYear();
      }
      var tData = {'params': {'year': tYear}};
      this.repository.get(tData).then(models => {
        let result = models.map(model => {
          if(this._cache[model.id] === undefined) {
            this._cache[model.id] = model;
          }
          Object.assign(this._cache[model.id], model);
          return this._cache[model.id];
        })
        resolve(result);
      }).catch(err => {
        reject(err);
      });
    });
  }

  listYears() {
    return new Promise((resolve, reject) => {
      var oParams = new URLSearchParams();
      // 最古記事(公開日時降順)
      oParams.append('ordering', 'publish_date');
      oParams.append('limit', 1);
      var tData = {'params': oParams};
      this.repository.get(tData).then(models => {
        var tYears = [];
        if(models.length <= 0) {
          resolve(tYears);
          return;
        }
        var tCurrentYear = (new Date()).getFullYear();
        for(let year = moment(models[0].publish_date).year(); year <= tCurrentYear; year++) {
          tYears.push(year);
        }
        resolve(tYears);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
