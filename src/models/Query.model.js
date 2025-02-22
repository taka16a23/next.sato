export default class QueryModel extends Object {
  constructor() {
    super();
    this.id = null;
    this.name = "";
    this.email = "";
    this.body = "";
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

  getName() {
    return this.name;
  }

  setName(a_sValue) {
    this.name = a_sValue;
    return this;
  }

  getEmail() {
    return this.email;
  }

  setEmail(a_sValue) {
    this.email = a_sValue;
    return this;
  }

  getBody() {
    return this.body;
  }

  setBody(a_sValue) {
    this.body = a_sValue;
    return this;
  }
  /* End Getter Setter method */
}
