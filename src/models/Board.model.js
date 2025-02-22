export default class BoardModel extends Object {
  constructor() {
    super();
    this.id = null;
    this.title = "";
    this.file = "";
    this.thumbnail = "";
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

  getTitle() {
    return this.title;
  }

  setTitle(a_sValue) {
    this.title = a_sValue;
    return this;
  }

  getFile() {
    return this.file;
  }

  setFile(a_sValue) {
    this.file = a_sValue;
    return this;
  }

  getThumbnail() {
    return this.thumbnail;
  }

  setThumbnail(a_sValue) {
    this.thumbnail = a_sValue;
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
