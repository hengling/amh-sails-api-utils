/**
 * Created by adolfomarangonihengling on 8/5/17.
 */
import RequestHelper from '../helpers/RequestHelper';

const PAGE = 'page';
const SIZE = 'size';
const SORT = 'sort';
const DIR = 'dir';

export default class RequestFilter {

  constructor(req) {
    this.req = req;
    this.requestHelper = new RequestHelper(req);
    this.criteria = this.criarCriteriaDefault();
  }

  criarCriteriaDefault() {
    return this.criarCriteria({});
  }

  criarCriteria(where) {
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
    const page = this.requestHelper.getParam(PAGE);
    return page ? page - 1 : 0;
  }

  getSize() {
    const size = this.requestHelper.getParam(SIZE);
    return size ? size : 5;
  }

  getDir() {
    const dir = this.requestHelper.getParam(DIR);
    return dir ? dir : 'ASC';
  }

  getSort() {
    const sort = this.requestHelper.getParam(SORT);
    const dir = this.getDir();

    return sort ? `${sort} ${dir}` : '';
  }
}
