import APIFactory from '@/api/APIFactory';


export default class HallRequestRepository extends Object {

  constructor() {
    super();
    this.api = APIFactory.createHallRequestAPI();
  }

  insert(a_oModel) {
    return new Promise((resolve, reject) => {
      let tData = this.api.getFormData();
      tData.append("group_name", a_oModel.getGroupName());
      tData.append("responsible_person", a_oModel.getResponsiblePerson());
      tData.append("address", a_oModel.getAddress());
      tData.append("phone_number", a_oModel.getPhoneNumber());
      tData.append("email_address", a_oModel.getEmailAddress());
      tData.append("reason", a_oModel.getReason());
      tData.append("start_datetime", a_oModel.getStartDateTime());
      tData.append("end_datetime", a_oModel.getEndDateTime());
      tData.append("room", a_oModel.getRoom());
      tData.append("detail", a_oModel.getDetail());
      tData.append("note", a_oModel.getNote());
      tData.append("is_finished", a_oModel.isFinished());
      this.api.post(tData).then(data => {
        resolve(Object.assign(a_oModel, data));
      }).catch(err => {
        reject(err);
      });
    });
  }
}
