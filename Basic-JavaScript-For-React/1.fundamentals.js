
/*-------------

1. Variable Define
2. Condition 
3. Array
4. Loop
5. Function
6. Object

---------------*/

// 1. How to declare a variable using let and const

// kono variable er data jodi change korte hoy tahole (let) use korbo 
// r kono variable er data jodi change korte na hoy tahole (const) use korbo


const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';



// 2. -------- conditions ------------
/*-------------------------------------*/


// 6 basic conditions: >,<, ===, !==, <=, >= 
// multiple conditions: &&, ||

if (fatherName === 'arnold' || season === 'rainy') {

}
else if (fatherName === 'Arnold') {

}
else {

}


// 3.-------- Array declare  ------------

// index, 
// length, push, 


const numbers = [89, 35, 98, 12];
numbers[0] = 56;




// 4. ----------- for loop --------------

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    confirm.log(number);
}



// 5. ------------ function -------------


function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = multiply(35, 78);



// 6. -------------- Object ------------
// 3 ways to access property by name 
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']);// access via property name string 
console.log(student[myVariable]); // access via property name in a variable