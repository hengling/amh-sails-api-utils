/**
 * Created by adolfomarangonihengling on 11/2/17.
 */

import GenericException from '../../src/exceptions/GenericException';

describe('GenericException', () => {

  describe('constructor', () => {

    it('should have the attributes class and message correctly assigned', () => {
      const errMessage = 'Err Message';
      try {
        throw new GenericException(errMessage);
      } catch (err) {
        err.class.should.equal('GenericException');
        err.message.should.equal(errMessage);
      }
    });

    it('should not have a message assigned', () => {
      try {
        throw new GenericException();
      } catch (err) {
        expect(err.class).to.be.equal('GenericException');
        expect(err.message).to.be.equal('');
      }
    });

  });

});
