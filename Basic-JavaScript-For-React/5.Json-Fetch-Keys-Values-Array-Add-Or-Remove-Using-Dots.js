/*-- 5 Json, Fetch, Keys, Values, Array Add Or Remove Using Dots --*/

// ---------- 1.JSON -----------
/*---------------------------------*/

// JSON => stringify, parse


// JSON.stringify(student) - object er key, value ke string hishabe return kore
//JSON.parse(studentJSON) - object theke string e convert

const student = {
    name: 'Salib khan',
    age: 32,
    movies: ['king khan', 'programming Hero']
}
 


const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

/*----------Output -----------
{
  name: 'Salib khan',
  age: 32,
  movies: [ 'king khan', 'programming Hero' ]
}

{"name":"Salib khan","age":32,"movies":["king khan","programming Hero"]}

-----------------------*/




//----- string theke object e convert --------

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

/*----- output ------
{
  name: 'Salib khan',
  age: 32,
  movies: [ 'king khan', 'programming Hero' ]
}

----------------*/



//2.----------- fetch --------------
/*----------------------------------*/
// kono url theke data collect kore niye asha

fetch('url')
    .then(response = response.json())
    .then(data => console.log(data));


//----------Object keys, value --------------

// access object keys and value

const student = {
    name: 'Salib khan',
    age: 32,
    movies: ['king khan', 'programming Hero']
}
const keys = Object.keys(student);
const values = Object.values(student);



//------------- for --------------

// amra forEach() use korbo beshi..jodi kono kisu return nite na chai

const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);  // kono kaj korte hole map use korbo.

// for of -> for of ta use korbo Array like object er jonno
// for in -> we use (for in) of object





// --------- add or remove from an array ----------
// Array of object

const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];


const newProduct = {name: 'webcam', price: 700, brand: 'Lal'};
 
//Copy products Array and than add newProduct
//------ useing spread operator -------- 

const newProducts = [...products, newProduct];
console.log(newProducts);
 


//--------------- Another code ------------
/*-------------------------------------*/
// create a new array without one specific item 
// remove phone means create a new array without the phone

const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

// phone chara bakigula nibo

const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);