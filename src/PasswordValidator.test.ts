import { PasswordValidator } from './PasswordValidator';

describe('PasswordValidator', () => {

  const passwordValidator = new PasswordValidator();

  it('should return true if password is valid', () => {
    expect(passwordValidator.validate('valid')).toBe(true);
  });

});