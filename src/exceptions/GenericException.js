export default class GenericException extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, GenericException);

    this.class = 'GenericException';
  }
}
