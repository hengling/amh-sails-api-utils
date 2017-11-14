import RequestFilter from '../filters/RequestFilter';

export default class ResponseHelper {

  constructor(res) {
    this.res = res;
  
    this.SERVER_ERROR = 500;
    this.UNAUTHORIZED = 401;
  }

  sendError(err) {
    global.sails.log.error(err);
    
    this.res.status(this.SERVER_ERROR);
    
    let errMessage = 'generic.error';
    if (err.class === 'GenericException') {
      errMessage = this.res.__(err.message);
    }
  
    const data = { message: this.res.__(errMessage) };
    this.res.json(data);
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
