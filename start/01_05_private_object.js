// Write your code here
class User {
  #username;
  #password;
  age;

  constructor(username, password, age) {
    this.#username = username;
    this.#password = password;
    this.age = age;
  }
}

const newUser = new User("Jonny", "noe", 5);
