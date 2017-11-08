/**
 * Created by adolfomarangonihengling on 11/2/17.
 */

import RequestFilter from '../../src/filters/RequestFilter';

describe('RequestFilterSpec', () => {
  
  function createReqObj(attributes) {
    return {
      param(key) {
        if (attributes) {
          return attributes[key];
        }
        return undefined;
      },
    };
  }
  
  describe('constructor', () => {
    
    it('should initiate the object with the default criteria when req does not have params', () => {
      const req = createReqObj(undefined);
      const requestFilter = new RequestFilter(req);
      expect(requestFilter.criteria).to.deep.equal({
        skip: 0,
        limit: 5,
        where: {},
      });
    });
    
    it('should initiate the object with the default criteria when req has params assigned', () => {
      const req = createReqObj({ page: 7, size: 10, sort: 'name', dir: 'DESC' });
      const requestFilter = new RequestFilter(req);
      expect(requestFilter.criteria).to.deep.equal({
        skip: 60,
        limit: 10,
        sort: 'name DESC',
        where: {},
      });
    });
    
  });
  
  describe('contains', () => {
    
    it('should add a contains expression to the criteria', () => {
      const req = createReqObj({ page: 7, size: 10, sort: 'name', dir: 'DESC', company: 'Google' });
      const requestFilter = new RequestFilter(req);
      requestFilter.contains('company');
      
      expect(requestFilter.criteria).to.deep.equal({
        skip: 60,
        limit: 10,
        sort: 'name DESC',
        where: {
          company: { contains: 'Google' },
        },
      });
    });
  
    it('should not add a contains expression to the criteria when the value is undefined', () => {
      const req = createReqObj({ page: 7, size: 10, sort: 'name', dir: 'DESC', company: undefined });
      const requestFilter = new RequestFilter(req);
      requestFilter.contains('company');
    
      expect(requestFilter.criteria).to.deep.equal({
        skip: 60,
        limit: 10,
        sort: 'name DESC',
        where: {},
      });
    });
    
  });
  
  describe('equals', () => {
    
    it('should add a equals expression to the criteria', () => {
      const req = createReqObj({ page: 7, size: 10, sort: 'name', dir: 'DESC', company: 'Google', year: 2017 });
      const requestFilter = new RequestFilter(req);
      requestFilter.contains('company');
      requestFilter.equals('year');
  
      expect(requestFilter.criteria).to.deep.equal({
        skip: 60,
        limit: 10,
        sort: 'name DESC',
        where: {
          company: { contains: 'Google' },
          year: 2017,
        },
      });
    });
  
    it('should not add a equals expression to the criteria when the value is undefined', () => {
      const req = createReqObj({ page: 7, size: 10, sort: 'name', dir: 'DESC', company: 'Google', year: undefined });
      const requestFilter = new RequestFilter(req);
      requestFilter.contains('company');
      requestFilter.equals('year');
    
      expect(requestFilter.criteria).to.deep.equal({
        skip: 60,
        limit: 10,
        sort: 'name DESC',
        where: {
          company: { contains: 'Google' },
        },
      });
    });
    
  });
  
});
