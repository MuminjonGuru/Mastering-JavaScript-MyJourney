class User{
  constructor(fName, lName, userHobbies) {
    this.fName = fName;
    this.lName = lName;
    this.userHobbies = userHobbies;
  }

  getFullName() {
    return `${this.fName} ${this.lName}`;
  }

}

class AdminUser extends User {
  setPassword(password) {
    this.password = password;
  }
}

let John = new User("John", "Davis", ["soccer", "volleyball"]);
console.log(John);
console.log(John.getFullName());

let Guru = new AdminUser("Guru", "Guru", ["soccer", "volleyball"]);
console.log(Guru);
Guru.setPassword("test123");
console.log(Guru);
