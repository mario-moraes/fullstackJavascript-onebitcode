// OOP fundamentals exercice
class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log(`Login bem sucedido!`);
    } else {
      console.log(`Erro: email ou senha não condizem com este usuario.`);
    }
  }
}

const user1 = new User("Mario Moraes", "mario@email.com", "1234");

user1.login("mario@email.com", "1234");