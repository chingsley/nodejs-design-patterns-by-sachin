const Signup = require("./Signup");


class SignupBuilder {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  setPhoto(photo) {
    this.photo = photo;
    return this; // this is to allow method chaining
  }
  setNickname(name) {
    this.nickname = name;
    return this;
  }
  setTopics(topics) {
    this.favoriteTopics = topics;
    return this;
  }
  setSME(topics) {
    this.isSME = topics;
    return this;
  }
  setModerator() {
    this.isModerator = true;
    return this;
  }
  setAdmin() {
    this.isAdmin = true;
    return this;
  }
  create() {
    return Signup.create(this);
  }
}

module.exports = SignupBuilder;
