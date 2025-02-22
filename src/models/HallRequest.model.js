import moment from 'moment';

export default class HallRequestModel extends Object {
  constructor() {
    super();
    this.id = null;
    this.group_name = "";
    this.responsible_person = "";
    this.address = "";
    this.phone_number = "";
    this.email_address = "";
    this.reason = "";
    this.start_datetime = null;
    this.end_datetime = null;
    this.room = "1";
    this.detail = "";
    this.note = "";
    this.is_finished = false;
    this.created_at = null;
    this.modified_at = null;
  }

  /*
   * Getter Setter method
   */
  getID() {
    return this.id;
  }

  setID(a_iID) {
    this.id = a_iID;
    return this;
  }

  getGroupName() {
    return this.group_name;
  }

  setGroupName(a_sValue) {
    this.group_name = a_sValue;
    return this;
  }

  getResponsiblePerson() {
    return this.responsible_person;
  }

  setResponsiblePerson(a_sValue) {
    this.responsible_person = a_sValue;
    return this;
  }

  getAddress() {
    return this.address;
  }

  setAddress(a_sValue) {
    this.address = a_sValue;
    return this;
  }

  getPhoneNumber() {
    return this.phone_number;
  }

  setPhoneNumber(a_sValue) {
    this.phone_number = a_sValue;
    return this;
  }

  getEmailAddress() {
    return this.email_address;
  }

  setEmailAddress(a_sValue) {
    this.email_address = a_sValue;
    return this;
  }

  getReason() {
    return this.reason;
  }

  setReason(a_sValue) {
    this.reason = a_sValue;
    return this;
  }

  getStartDateTime() {
    return this.start_datetime;
  }

  getStartDateTimeDisplay(a_sFormat) {
    return moment(this.start_datetime).format(a_sFormat);
  }

  setStartDateTime(a_sValue) {
    this.start_datetime = a_sValue;
    return this;
  }

  getEndDateTime() {
    return this.end_datetime;
  }

  getEndDateTimeDisplay(a_sFormat) {
    return moment(this.end_datetime).format(a_sFormat);
  }

  setEndDateTime(a_sValue) {
    this.end_datetime = a_sValue;
    return this;
  }

  getRoom() {
    return this.room;
  }

  getRoomName() {
    if (this.room === '1') {
      return '大ホール';
    }
    if (this.room === '2') {
      return '2階和室';
    }
    if (this.room === '3') {
      return '自治会館2F';
    }
    return '';
  }

  setRoom(a_sValue) {
    this.room = a_sValue;
    return this;
  }

  getDetail() {
    return this.detail;
  }

  setDetail(a_sValue) {
    this.detail = a_sValue;
    return this;
  }

  getNote() {
    return this.note;
  }

  setNote(a_sValue) {
    this.note = a_sValue;
    return this;
  }

  isFinished() {
    return this.is_finished;
  }

  /* End Getter Setter method */
}
