// ---- 42-2 Template String, Arrow Function, Spread Operator ----

const numbers = [89, 35, 98, 12];
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['King Khan','Dhakar Mastan']
};


// // 1. template string

const about = `My Name is ${student.name} age of ${student.age} number ${numbers[2]} also liked movies ${student.movies[0]}`;

console.log(about);




// 2. ------------ Arrow Function --------------
/*-------------------------------------------------*/
// No parameter
const getFiftyFive = () => 55;


//------- single parameter ------
// single parameter hole bracket diye parameter na lekhle o hobe....
const addSixtyFive = num => num + 65;

//--- Find even number ----- 

const isEven = x => x % 2 == 0;

// ------- multiple parameter -----
const addThree = (x, y, z) => x + y + z;


//------- multiline function ------
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}


/* 3. --------- Spread Operator --------------- */
/*----------------------------------------------*/
// normal way

const numbers = [89, 35, 98, 12];

const newNumbers = numbers;

numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(newNumbers);  // newNumbers er moddhe o 99 thakbe

// amra jodi newNumbers er moddhe r kono number add korte na chai tahole 
 
/*------ output ------
 [ 89, 35, 98, 12 ]

----------------------*/


//------ spread operator use -------
const numbers = [89, 35, 98, 12];
const newNumbers = [...numbers]; 

numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers); 


/*------- Output --
[
  89, 35, 98, 12,
  99, 99, 99
]

//-------- newNumbers -------
[ 89, 35, 98, 12 ]

------------*/


// Create a new array from an older array and add an element
const numbers = [89, 35, 98, 12];
const newNumbers = [...numbers]; // sudu numbers er same value gula nibe newNumber r kono new value add korbe na.

// copy numbers array and add new value 55

const currentNumbers = [...numbers, 55];

numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);

/*--------------
[
  89, 35, 98, 12,
  99, 99, 99
]
[ 89, 35, 98, 12 ]
[ 89, 35, 98, 12, 55 ]

---------------*/