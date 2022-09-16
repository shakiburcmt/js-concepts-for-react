// truthy
let myVar = 7;
if (myVar) {
    myVar = myVar * 100;
    console.log(myVar)
}
else {
    myVar = 0;
    console.log(myVar)
}

// falsy
let money = 50;
if (!money) {
    console.log(money)
}
else {
    console.log(money)
}

// ternary operator
let food = money > 100 ? 'biriyani' : 'cha';
console.log(food)

// num to string
const a = 54;
console.log(a + '');

// string to num
const b = '557';
console.log(+b)

const isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser;
isActive && showUser() || hideUser();