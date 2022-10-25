import { PasswordValidator } from './PasswordValidator';

describe('PasswordValidator', () => {

  const passwordValidator = new PasswordValidator();

  it('should return false if password has less or equal than 8 characters', () => {
    const result = passwordValidator.validate('12345678');

    expect(result).toBe(false);
  });

  it('should return false if password does not contain a capital letter', () => {
    const result = passwordValidator.validate('av3_241q9');

    expect(result).toBe(false);
  });

  it('should return false if password does not contains a lowercase', () => {
    const result = passwordValidator.validate('AV3_241Q9');

    expect(result).toBe(false);
  });
  it('should return false if password does not contains a number', () => {
    const result = passwordValidator.validate('AV_abcdefgh');

    expect(result).toBe(false);
  });

  it('should return false if password does not contains an underscore', () => {
    const result = passwordValidator.validate('AV3abcdefgh9');

    expect(result).toBe(false);
  });

  it('should return true if password is valid', () => {
    const result = passwordValidator.validate('Av3_241q9');

    expect(result).toBe(true);
  });



});