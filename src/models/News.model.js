export default class NewsModel extends Object {
  constructor() {
    super();
    this.id = null;
    this.title = "";
    this.url = "";
    this.status = {};
    this.news_category_display = {};
    this.publish_date = null;
    this.expiry_date = null;
    this.created_at = null;
    this.modified_at = null;
    this.created_by = null;
    this.modified_by = null;
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

  getURL() {
    return this.url;
  }

  setURL(a_sValue) {
    this.url = a_sValue;
    return this;
  }

  getStatus() {
    return this.status;
  }

  setStatus(a_sValue) {
    this.status = a_sValue;
    return this;
  }

  getNewsCategoryDisplay() {
    return this.news_category_display;
  }

  getPublishDate() {
    return this.publish_date;
  }

  getExpiryDate() {
    return this.expiry_date;
  }

  getCreatedBy() {
    return this.created_by;
  }

  setCreatedBy(a_iCreatedUserID) {
    this.created_by = a_iCreatedUserID;
    return this;
  }

  getModifiedBy() {
    return this.modified_by;
  }

  setModifiedBy(a_iModifiedUserID) {
    this.modified_by = a_iModifiedUserID;
    return this;
  }

  /* End Getter Setter method */
}
