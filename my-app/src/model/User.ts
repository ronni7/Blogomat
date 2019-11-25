export class User {
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get sex(): boolean {
    return this._sex;
  }

  set sex(value: boolean) {
    this._sex = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
  private _id: number;
  private _login: string;
  private _password: string;
  private _username: string;
  private _sex: boolean;
  private _email: string;
}
