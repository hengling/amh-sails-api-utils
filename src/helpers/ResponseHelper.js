import RequestFilter from '../filters/RequestFilter';

export default class ResponseHelper {

  static SERVER_ERROR = 500;

  constructor(res) {
    this.res = res;
  }

  enviarErro(err) {
    sails.log.error(err);
    this.res.status(ResponseHelper.SERVER_ERROR);
    if (err.class === 'GenericException') {
      return this.res.jsonx({ message: this.res.__(err.message) });
    }
    this.res.jsonx({ message: this.res.__('generic.error') });
  }

  enviarConteudoPaginado(content) {
    const requestFilter = new RequestFilter(this.res.req);
    const data = {
      content,
      page: parseInt(requestFilter.getPage() + 1),
      size: parseInt(requestFilter.getSize()),
      totalElements: content.length,
    };

    return this.res.json({ data });
  }
}
