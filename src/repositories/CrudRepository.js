export default class CrudRepository {

  constructor(model) {
    this.model = model;
  }

  findAll(criteria) {
    return this.model.find(criteria);
  }
  
  findAllAndCount(criteria) {
    let totalElements = 0;
    let records = [];
    
    return new Promise((resolve, reject) => {
      this.findAll(criteria)
        .then((result) => {
          records = result;
          return this.model.count(criteria);
        })
        .then((count) => {
          totalElements = count;
          resolve({ records, totalElements });
        })
        .catch(err => reject(err));
    });
  }

  findAllWithDeps(criteria, deps) {
    return this.model.find(criteria).populate(deps);
  }

  findOne(param) {
    return this.model.findOne(param);
  }

  findOneWithDeps(param, deps) {
    return this.model.findOne(param).populate(deps);
  }

  create(newRecord) {
    return this.model.create(newRecord);
  }

  update(key, record) {
    return this.model.update(key, record);
  }

  destroy(key) {
    return this.model.destroy(key);
  }
}
