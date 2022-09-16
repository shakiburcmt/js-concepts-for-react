// map - er kaj array er object ke array akarei dibe, map return kore
const products = [
    { name: 'laptop', price: 5000, brand: 'acer' },
    { name: 'laptop', price: 4000, brand: 'hp' },
    { name: 'laptop', price: 3000, brand: 'dell' },
    { name: 'laptop', price: 2000, brand: 'lenovo' },
];
const brands = products.map(product => product.brand);
console.log(brands)
const prices = products.map(product => product.price);
console.log(prices)


// forEach map er motoi tobe return korena
products.forEach(product => console.log(product.name))


// filter - condition wise sort kore data dibe
const lowPrice = products.filter(product => product.price < 5000);
// includes diye specific kichu khoja hoy
const specificBrand = products.filter(product => product.brand.includes('l'));
// find filter er motoi tobe ekadhik dibe na 1st e jeta match hobe oitay dibe
const specificBrandFind = products.find(product => product.brand.includes('l'));
console.log(lowPrice)
console.log(specificBrand)
console.log(specificBrandFind)

