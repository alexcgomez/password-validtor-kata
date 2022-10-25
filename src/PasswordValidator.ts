export class PasswordValidator {
  public validate(password: string): boolean {
    return password.length > 8;
  }
}