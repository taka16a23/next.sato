import { RepositoryFactory } from '@/repositories';


export default class QueryService extends Object {

  constructor() {
    super();
    this.repository = RepositoryFactory.createQueryRepository();
  }

  inquery(oModel) {
    return new Promise((resolve, reject) => {
      this.repository.insert(oModel).then(models => {
        resolve(true);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
