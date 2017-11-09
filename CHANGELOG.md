## CHANGELOG

All notable changes to this project will be documented in this file.

### [unreleased]

- Unit tests (PLANNED)
- Authentication
- Encryption

### [v0.1.1] -` 2017-11-09

- _RequestHelper_: Adding a method for retrieving the readers from request
- _ResponseHelper_: Adding a method to enable unauthorized responses 

### [v0.1.0] -` 2017-11-08

- Refactoring some classes
- Unit testes (partial)


### [v0.0.2] - 2017-11-01

- added __GenericException__, which is an extensible exception class. It sets a flag to help other components
in distinguishing it from other errors. 
- added __ResponseHelper__, which is a generic utility that provides customized responses.
- added __CrudRepository__, which is an extensible class which holds the _CRUD_ methods
  * findAll, findAllWithDeps, findOne, findOneWithDeps, create, update and destroy 

### [v0.0.1] - 2017-11-01

- added __RequestHelper__, which is a generic utility that makes easier to deal with _req_ object. 
- added __RequestFilter__, which is an extensible class that helps getting request params
and building a [Waterline ORM](https://github.com/balderdashy/waterline) filter criteria.
