export class User {
  public id: string;
  public email: string;
  public name: string;

  constructor(user) {
    this.id = user.uid;
    this.email = user.email;
    this.name = user.displayName;
  }
}
