export default class ActivityModel extends Object {
  constructor() {
    super();
    this.title = "";
    this.image = null;
    this.body = "";
    this.excerpt = "";
    this.news = null;
    this.publish_date = null;
    this.expiry_date = null;
  }

  /*
   * Getter Setter method
   */
  getID() {
    return this.id;
  }

  setID(a_sValue) {
    this.id = a_sValue;
    return this;
  }

  getTitle() {
    return this.title;
  }

  setTitle(a_sValue) {
    this.title = a_sValue;
    return this;
  }

  getImage() {
    return this.file;
  }

  setImage(a_sValue) {
    this.image = a_sValue;
    return this;
  }

  getBody() {
    return this.title;
  }

  setBody(a_sValue) {
    this.body = a_sValue;
    return this;
  }

  getExcerpt() {
    return this.title;
  }

  setExcerpt(a_sValue) {
    this.excerpt = a_sValue;
    return this;
  }

  getNews() {
    return this.title;
  }

  setNews(a_sValue) {
    this.news = a_sValue;
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
