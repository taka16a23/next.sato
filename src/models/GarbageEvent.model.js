export default class GarbageEventModel extends Object {
  constructor() {
    super();
    this.gid = "";
    this.summary = "";
    this.date = null;
    this.url = "";
    this.status = 0;
    this.url_of_image = "";
  }

  /*
   * Getter Setter method
   */
  getGID() {
    return this.gid;
  }

  setGID(a_sGID) {
    this.gid = a_sGID;
    return this;
  }

  getSummary() {
    return this.summary;
  }

  setSummary(a_sValue) {
    this.summary = a_sValue;
    return this;
  }

  getDate() {
    return this.date;
  }

  getStatus() {
    return this.status;
  }

  getURLOfImage() {
    return this.url_of_image;
  }
  /* End Getter Setter method */
}
