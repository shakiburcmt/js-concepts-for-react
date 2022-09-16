// JSON
const student = {
    name: 'Shakib',
    age: 24,
    address: ['Naogaon', 'Rajshahi']
}
// stringify
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);
// parse
const studentObject = JSON.parse(studentJSON);
console.log(studentObject)


// fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))


// keys, values
const keys = Object.keys(student);
console.log(keys)
const values = Object.values(student);
console.log(values)


// forEach
const numbers = [44, 64, 22, 998];
numbers.forEach(num=>console.log(num))
const double=numbers.map(num => num * 2);
console.log(double)


// for of on array like object
// for in on object


// add or remove from an array
const products = [
    { name: 'laptop', price: 5000, brand: 'acer' },
    { name: 'laptop', price: 4000, brand: 'hp' },
    { name: 'laptop', price: 3000, brand: 'dell' },
    { name: 'laptop', price: 2000, brand: 'lenovo' },
];
const newProduct = { name: 'laptop', price: 1000, brand: 'asus' };
const newProducts = [...products, newProduct];
console.log(newProducts)


// create a new array without one specific item
const afterRemove = products.filter(pro => pro.brand !== 'acer');
console.log(afterRemove)