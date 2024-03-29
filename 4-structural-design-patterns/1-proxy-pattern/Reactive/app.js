const obj = {
  name: 'John Doe',
  age: 32,
  city: 'Chicago',
  country: 'US',
};

const makeReactive = (obj, observer) => {
  return new Proxy(obj, {
    set(target, key, value) {
      observer({ [key]: value });
      return (target[key] = value);
    },
  });
};

const reactive = makeReactive(obj, (res) => console.log('res = ', res));
reactive.color = 'green';
reactive.age = 33;
console.log(reactive);
