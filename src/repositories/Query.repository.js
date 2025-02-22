import APIFactory from '@/api/APIFactory';


export default class QueryRepository extends Object {

  constructor() {
    super();
    this.api = APIFactory.createQueryAPI();
  }

  insert(a_oModel) {
    return new Promise((resolve, reject) => {
      let tData = this.api.getFormData();
      tData.append("name", a_oModel.getName());
      tData.append("email", a_oModel.getEmail());
      tData.append("body", a_oModel.getBody());
      this.api.post(tData).then(data => {
        resolve(Object.assign(a_oModel, data));
      }).catch(err => {
        reject(err);
      });
    });
  }
}
