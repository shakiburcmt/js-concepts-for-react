const student = {
    name: 'Shakib',
    age: 24,
    address: ['Naogaon', 'Rajshahi']
}
// three ways to access property by name
console.log(student.age) //direct by property
console.log(student['age']) //access via property name string, must be put in quotation
const myAddress='address'
console.log(student[myAddress]) //access via property name in a variable