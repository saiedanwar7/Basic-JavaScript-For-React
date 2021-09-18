// 6 (Advanced) Truthy, False Ternary Operator, Shortcut And Or ----
// this section only for shortcut ways use in program.


// Truthy -> 'almas', 5, true, {}, []
// False  -> '', 0, false, null, undefined

// ------- check Truth value------

// check truthy
let myVar = 5;
// check any truthy 
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}


// ----- check negative or falsy anything  ------

let myMoney = 50;
// you check negative or falsy anythin
if(!myMoney){

}

//---------- Ternary Operator,-----------
// normal ways ----
const money = 80;
let food;

if(money > 100){
    food = 'biryani';
}
else{
    food = 'cha biscuit';
}

// ternary
// ekta condition o hote pare abar ekadik condition o hote pare......

let food1 = money>100 ? 'biryani' : 'cha biscuit';
console.log(food1);



//--------- &&, || use in ternary operator -------

const dollar = 50;
const taka = 90;
let drink = (dollar > 100 &&  taka > 100) ? 'coke' : 'filter water';
console.log(drink);



//------------- use Empty String ----------

// kono number er sathe empty string use korle seta string hoye jai

// number to string conversion

const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr)


//-------- string to number -------
// only use + sing in front of variable name

const input = '560'; 
const inputNum = +input;
console.log(inputNum);




//------ true and false with conditions ----------
//------------ true --------
let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
isActive ? showUser() : hideUser(); // if isActive is true then show  showUser()


//--------------- false- &&--------

let isActive = false;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// use && if the left side is true then right side will be executed
isActive && showUser()

// use || if the left side is false then right side will be executed
isActive || hideUser();


//------------ toggle --------
// jodi true thake tahole false kora 

isActive = !isActive;