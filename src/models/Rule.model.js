export default class RuleModel extends Object {
  constructor() {
    super();
    this.id = null;
    this.title = "";
    this.document = null;
    this.sortid = null;
    this.images = [];
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

  getDocument() {
    return this.document;
  }

  setDocument(a_sValue) {
    this.document = a_sValue;
    return this;
  }

  listImages() {
    if (this.iamges === null) {
      return [];
    }
    return this.images;
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
