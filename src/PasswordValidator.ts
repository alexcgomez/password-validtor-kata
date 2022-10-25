export class PasswordValidator {
  public validate(password: string): boolean {
    return password.length > 8 && password.match(/[A-Z]/) !== null && password.match(/[a-z]/) !== null;
  }
}