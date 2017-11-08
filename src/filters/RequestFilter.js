/**
 * Created by adolfomarangonihengling on 8/5/17.
 */
import RequestHelper from '../helpers/RequestHelper';

export default class RequestFilter {

  constructor(req) {
  
    this.PAGE = 'page';
    this.SIZE = 'size';
    this.SORT = 'sort';
    this.DIR = 'dir';
  
    this.DEFAULT_PAGE = 0;
    this.DEFAULT_SIZE = 5;
    this.DEFAULT_DIR = 'ASC';
    
    this.req = req;
    this.requestHelper = new RequestHelper(req);
    this.criteria = this.createDefaultCriteria();
  }

  createDefaultCriteria() {
    return this.createCriteria({});
  }

  createCriteria(where) {
    const criteria = {
      skip: this.getPage() * this.getSize(),
      limit: this.getSize(),
      where,
    };

    if (this.getSort()) {
      criteria.sort = this.getSort();
    }
    return criteria;
  }

  contains(param) {
    const paramValue = this.requestHelper.getParam(param);
    if (paramValue) {
      this.criteria.where[param] = { contains: paramValue };
    }
  }

  equals(param) {
    const paramValue = this.requestHelper.getParam(param);
    if (paramValue) {
      this.criteria.where[param] = paramValue;
    }
  }

  getPage() {
    const page = this.requestHelper.getParam(this.PAGE);
    return !page ? this.DEFAULT_PAGE : page - 1;
  }

  getSize() {
    const size = this.requestHelper.getParam(this.SIZE);
    return !size ? this.DEFAULT_SIZE : size;
  }

  getDir() {
    const dir = this.requestHelper.getParam(this.DIR);
    return !dir ? this.DEFAULT_DIR : dir;
  }

  getSort() {
    const sort = this.requestHelper.getParam(this.SORT);
    const dir = this.getDir();

    return sort ? `${sort} ${dir}` : '';
  }
}
