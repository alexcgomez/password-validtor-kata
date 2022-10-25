import { PasswordValidator } from './PasswordValidator';

describe('PasswordValidator', () => {

  const passwordValidator = new PasswordValidator();
  const password = '1234567';

  it('should return false if password has less or equal than 8 characters', () => {
    const result = passwordValidator.validate(password);

    expect(result).toBe(false);
  });

  it('should return true if password has more than 8 characters', () => {
    const result = passwordValidator.validate('123456789');

    expect(result).toBe(true);
  });



});