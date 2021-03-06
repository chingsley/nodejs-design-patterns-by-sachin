require('dotenv').config();

import CurrencyConverter from "./CurrencyConverter";

class Cost {
  @CurrencyConverter("NGN", "USD")
  compute(qty, price) {
    return Promise.resolve(qty * price);
  }
}

const price = new Cost();
price.compute(20, 5).then(result => console.log(result));