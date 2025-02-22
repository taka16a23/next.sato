import { RepositoryFactory } from '@/repositories';


export default class MainEventsService extends Object {

  listEvents(start, end) {
    return new Promise((resolve, reject) => {
      var repository = RepositoryFactory.createMainEventsRepository();
      var tData = {'params': {'start': start, 'end': end}};
      repository.get(tData).then(models => {
        resolve(models);
      }).catch(err => {
        reject(err);
      });
    });

  }
}
