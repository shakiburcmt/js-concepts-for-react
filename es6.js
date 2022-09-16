// template string
const numbers = [13, 15, 17];
const student = {
    name: 'Shakib',
    age: 24,
    address: ['Naogaon', 'Rajshahi']
}

const about = `My name is ${student.name} age of ${student.age} and address is ${student.address[0]} house number ${numbers[1]}`;
console.log(about)


// arrow function,, ekhane 55 return korbe
const getWife = () => 'Ayesha';
console.log(getWife())

const isEven = num => num % 2 == 0;
console.log(isEven(5))

const doMath = (num1, num2) => {
    const add = num1 + num2;
    return add;
}
console.log(doMath(4, 8))


// spread operator
const newNumbers = [...numbers];
numbers.push(100);
console.log(newNumbers)
console.log(numbers)