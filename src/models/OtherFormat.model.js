export default class OtherFormatModel extends Object {
  constructor() {
    super();
    this.id = null;
    this.title = "";
    this.description = "";
    this.url = "";
    this.sortid = null;
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

  getDescription() {
    return this.description;
  }

  setDescription(a_sValue) {
    this.description = a_sValue;
    return this;
  }

  getURL() {
    return this.url;
  }

  setURL(a_sValue) {
    this.url = a_sValue;
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
