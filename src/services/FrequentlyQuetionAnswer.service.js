import { RepositoryFactory } from '@/repositories';


export default class FrequentlyQuetionAnswerService extends Object {

  constructor() {
    super();
    this.repository = RepositoryFactory.createFrequentlyQuetionAnswerRepository();
    this._cache = {};
  }

  listFAQ(a_oParams={}) {
    return new Promise((resolve, reject) => {
      var tData = {'params': a_oParams};
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
}
