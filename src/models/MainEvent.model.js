export default class MainEventModel extends Object {
  constructor() {
    super();
    this.gid = "";
    this.summary = "";
    this.description = "";
    this.date = null;
    this.url = "";
    this.status = 0;
    this.start = null;
    this.end = null;
    this.created = null;
    this.modified = null;
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

  getDescription() {
    return this.description;
  }

  setDescription(a_sValue) {
    this.description = a_sValue;
    return this;
  }

  getDate() {
    return this.date;
  }

  getStatus() {
    return this.status;
  }

  getStart() {
    return this.start;
  }

  getEnd() {
    return this.end;
  }

  getCreated() {
    return this.created;
  }

  getModified() {
    return this.modified;
  }

  /* End Getter Setter method */
}
