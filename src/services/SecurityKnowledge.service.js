import { RepositoryFactory } from '@/repositories';


export default class SecurityKnowledgeService extends Object {

  constructor() {
    super();
    this.repository = RepositoryFactory.createSecurityKnowledgeRepository();
    this._cache = {};
  }

  listSecurityKnowledges() {
    return new Promise((resolve, reject) => {
      var tData = {'params': {}};
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
