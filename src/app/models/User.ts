export class User {
  password: string | null ;
  username: string |null;

  constructor(username: string | null, password: string | null) {
    this.password = password;
    this.username = username;
  }

}
