const SignupBuilder = require("./SignupBuilder");

/**
 * new SignupBuilder() creates a new object, sets this to that object,
 *  runs the constructor, then the new expression
 * returns that object—unless the constructor
 *  explicitly returns a different object.
 */
new SignupBuilder("John Doe", "john@gmail.com", 25)
  .setPhoto("johndoe.jpg")
  .setNickname("john_D")
  .setTopics(["Node.js", "Javascript"])
  .setSME(["Node.js"])
  .setModerator()
  .create();

// Signup.create(
//   "John Doe",
//   "john@email.com",
//   25,
//   "johndoe.jpg",
//   "john_D",
//   ["Javasript", "Node.js"],
//   ["Node.js"],
//   true,
//   false
// );
