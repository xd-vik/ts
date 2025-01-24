// user authentication

class User {
  constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}

  login() {
    console.log(`${this.name} has been login sucessfully.`);
  }
  logout() {
    console.log(`${this.name} has been logged out sucessfully.`);
  }
}

let user1 = new User("Vivek", "vik@vik.com", "password");
user1.login();
user1.logout();
