import { RepositoryFactory } from '@/repositories';


export default class HallService extends Object {

  constructor() {
    super();
    this.repository = RepositoryFactory.createHallRequestRepository();
  }

  request(oModel) {
    return new Promise((resolve, reject) => {
      this.repository.insert(oModel).then(models => {
        resolve(true);
      }).catch(err => {
        reject(err);
      });
    });
  }

  listEvents(start, end) {
    return new Promise((resolve, reject) => {
      var repository = RepositoryFactory.createHallEventsRepository();
      var tData = {'params': {'start': start, 'end': end}};
      repository.get(tData).then(models => {
        resolve(models);
      }).catch(err => {
        reject(err);
      });
    });

  }
}
