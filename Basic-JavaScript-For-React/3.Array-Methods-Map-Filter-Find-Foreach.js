//3 Array Methods Map Filter Find Foreach

//------- Array -----------
// ---- array object ---

const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

// ekhon ei object array theke new array create korbo
const brands = products.map(product => product.brand);
console.log(brands);

// new price Array 
const prices = products.map(product => product.price);
// console.log(prices);





// sob kisu er jonno loop through kore data show korbo
// function e kaj kore kintu return korbo na



/*-------- map and forEach difference ------ */
// map hocche je jinish ta neyar seta niye ekta array return korbe

// forEach kisu return korbe na


//-------------- forEach ----------- 

products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

//  multiline 

products.forEach(product => {
    // ekhane multiline condition dite parbo
})



//3. ----------- Filter ------------ 

const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

// contain

//-------4. find ---------
// first value ta show korbe find

const special = products.find(product => product.name.includes('n'));

console.log(special);

/*----- output ------
{ name: 'phone', price: 7000, brand: 'iphone', color: 'golden' }

*/

const specialColor = products.find(product => product.color.includes('g'));
console.log(specialColor);