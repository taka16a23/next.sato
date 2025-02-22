export default class FrequentlyQuetionAnswerModel extends Object {
  constructor() {
    super();
    this.id = null;
    this.question = "";
    this.answer = "";
    this.status = "1";
    this.sortid = 0;
    this.publish_date = null;
    this.expiry_date = null;
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

  getQuetion() {
    return this.question;
  }

  setQuetion(a_sValue) {
    this.question = a_sValue;
    return this;
  }

  getAnswer() {
    return this.answer;
  }

  setAnswer(a_sValue) {
    this.answer = a_sValue;
    return this;
  }

  getStatus() {
    return this.status;
  }

  setStatus(a_sValue) {
    this.status = a_sValue;
    return this;
  }

  getSortID() {
    return this.sortid;
  }

  setSortID(a_sValue) {
    this.sortid = a_sValue;
    return this;
  }

  getPublishDate() {
    return this.publish_date;
  }

  getExpiryDate() {
    return this.expiry_date;
  }

  /* End Getter Setter method */
}
