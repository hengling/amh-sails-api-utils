export default class RequestHelper {

  constructor(req) {
    this.req = req;
  }

  getParam(nParam) {
    return this.req.param(nParam);
  }
  
  getHeader(nHeader) {
    return this.req.headers[nHeader];
  }
}
