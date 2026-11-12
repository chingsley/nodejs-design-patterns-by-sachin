function Pizza() {
  this.pizza = {};
  this.setBase = (base) => (this.pizza.base = base);
  this.setSauce = (sauce) => (this.pizza.sauce = sauce);
  this.setCheese = (cheese) => (this.pizza.cheese = cheese);
  this.setToppings = (toppings) => (this.pizza.toppings = toppings);
  this.bake = () => console.log(this.pizza);
}

module.exports = Pizza;


// // Calsss Implmenation of the Pizza Builder
// class Pizza {
//   constructor() {
//     this.pizza = {};
//     return this;
//   }

//   setBase(base) {
//     this.pizza.base = base;
//   }

//   setSauce(sauce) {
//     this.pizza.sauce = sauce;
//   }

//   setCheese(cheese) {
//     this.pizza.cheese = cheese;
//   }

//   setToppings(toppings) {
//     this.pizza.toppings = toppings;
//   }

//   bake() {
//     console.log(this.pizza);
//   }
// }

// module.exports = Pizza;