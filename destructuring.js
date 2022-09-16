// array destructuring
const numbers = [33, 66];
const [x, y] = numbers;
console.log(x, y)

function sum(num1, num2) {
    const num = [num1, num2];
    return num;
}
console.log(sum(44, 77))

const student = {
    name: 'Shakib',
    age: 24,
    address: ['Naogaon', 'Rajshahi']
}
const [district, division] = student.address;
console.log(district, division);


// object destructuring
const { name, age } = { name: 'Shakib', age: 24 };
console.log(name,age)