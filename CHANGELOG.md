## CHANGELOG

All notable changes to this project will be documented in this file.

### [unreleased]

- Unit tests (PLANNED)
- Authentication
- Encryption

### [v0.1.8, v0.1.9, v0.1.20] -` 2017-12-14

- Bug fix: removing pagination attributes when counting records on database. This was preventing the real number
 of elements to be returned by _CrudRepository.findAllAndCount_ and _CrudRepository.findAllWithDepsAndCount_.


### [v0.1.7] -` 2017-11-27

- Feature: adding a new method _CrudRepository.findAllWithDepsAndCount_ which returns the records
that matches the criteria, its dependencies and the total of elements that matches the specified criteria on database.

### [v0.1.6] -` 2017-11-16

- Feature: adding a new method _CrudRepository.findAllAndCount_ which returns the records
that matches the criteria and the total of elements that matches the specified criteria on database.

### [v0.1.5] -` 2017-11-14

- Feature: adding support for totalElements on _ResponseHelper.sendPaginatedContent_.

### [v0.1.3 - v0.1.4] -` 2017-11-14

- Bug fix: the method _ResponseHelper.sendError_ wasn't setting the error message on
response.

### [v0.1.2] -` 2017-11-14

- Bug fix: the method _ResponseHelper.sendError_ wasn't setting response status
for _GenericException_.

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
