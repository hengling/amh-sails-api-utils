import RequestFilter from '../filters/RequestFilter';

export default class ResponseHelper {

  constructor(res) {
    this.res = res;
  
    this.SERVER_ERROR = 500;
    this.UNAUTHORIZED = 401;
  }

  sendError(err) {
    global.sails.log.error(err);
    
    if (err.class === 'GenericException') {
      return this.res.jsonx({ message: this.res.__(err.message) });
    }
    
    this.res.status(this.SERVER_ERROR);
    this.res.json({
      message: this.res.__('generic.error')
    });
  }

  sendPaginatedContent(content) {
    const requestFilter = new RequestFilter(this.res.req);
    this.res.json({
      data: {
        content,
        page: parseInt(requestFilter.getPage() + 1),
        size: parseInt(requestFilter.getSize()),
        totalElements: content.length,
      }
    });
  }
  
  sendUnauthorized() {
    this.res.status(this.UNAUTHORIZED);
    this.res.send();
  }
}
