import { RepositoryFactory } from '@/repositories';


export default class GarbageEventsService extends Object {

  listEvents(date) {
    return new Promise((resolve, reject) => {
      var repository = RepositoryFactory.createGarbageEventsRepository();
      var tData = {'params': {'date': date}};
      repository.get(tData).then(models => {
        resolve(models);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
