/*--------- ES6 Array destructuring
Destructuring means to break down a complex structure into simpler parts. With the syntax of destructuring, you can extract smaller fragments from objects and arrays. It can be used for assignments and declaration of a variable.
---------------------------------------------------*/

//--------- code 1 -------


const numbers = [42, 65];
const x = numbers[0];
const y = numbers[1];

const [x, y] = [42, 65];


//--------- code-2 ---------
  
function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}
const[first, second] = boxify(90, 45); // same ways

console.log(boxify(90, 45));


//------------ code 3 -----------

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['King Khan','Dhakar Mastan']
};

const [firstMovie, secondMovie] = student.movies;


//-------------- Object Destructuring -----------
/*------------------------------------------------*/


//------- 1 -----------
const {name, age} = {name: 'alu', age: 20};

//-------- jodi value er sathe property thake tahole serial dosen't matter----

const {name, age } = {id: 12, name: 'alu', salary:3400, age: 30};


//------------ another code ---------------

const employee ={
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {machine, ide} = employee;
// employee er bitore specification er moddhe weight, address 
const {weight, address} = employee.specification;

const {brand} = employee.specification.watch;



//------------ Optional Chaining ------------
// kono item ache ba na thakle kono problem ney sei jonno optional chaining ta use korte pari


const {brand} = employee?.specification?.watch;