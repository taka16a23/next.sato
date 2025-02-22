import { RepositoryFactory } from '@/repositories';


export default class SecurityKnowledgeService extends Object {

  constructor() {
    super();
    this.sato_formats_repository = RepositoryFactory.createSatoFormatsRepository();
    this._sato_formats_cache = {};
    this.other_formats_repository = RepositoryFactory.createOtherFormatsRepository();
    this._other_formats_cache = {};
  }

  listSatoFormats() {
    return new Promise((resolve, reject) => {
      var tData = {'params': {}};
      this.sato_formats_repository.get(tData).then(models => {
        let result = models.map(model => {
          if(this._sato_formats_cache[model.id] === undefined) {
            this._sato_formats_cache[model.id] = model;
          }
          Object.assign(this._sato_formats_cache[model.id], model);
          return this._sato_formats_cache[model.id];
        })
        resolve(result);
      }).catch(err => {
        reject(err);
      });
    });
  }

  listOtherFormats() {
    return new Promise((resolve, reject) => {
      var tData = {'params': {}};
      this.other_formats_repository.get(tData).then(models => {
        let result = models.map(model => {
          if(this._other_formats_cache[model.id] === undefined) {
            this._other_formats_cache[model.id] = model;
          }
          Object.assign(this._other_formats_cache[model.id], model);
          return this._other_formats_cache[model.id];
        })
        resolve(result);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
