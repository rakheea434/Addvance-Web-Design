/*
* JS Class 1
*/

// var , let const

var name='Kader';

// console.log('my name is '+name);
// console.log(name+ ' is 20 yesrs old');
// console.log(name+ ' is very emotional');
// console.log(name+ ' Lives in dhaka');

console.log(`${name} is here. this is  ${2+3} bangladesh`);


/**
 * premitive data type
 */
// Number, string, booleans, null, undefined

/**
 * non primitive  data type
 * 
 * object
 * function
 * array
  */

// var nm= Number('23'); // int, floot, hexa decemal, 
// var nm2= '23';
// var newnm= Number(nm2);
// var name = String('hello world');
// var male= true;

// var mobile= 1816366535;

// var stringMobile= String(mobile)

// console.log(mobile); 
// console.log(stringMobile);

/**
 * function 
 */
 function func(){
    console.log('method');
}
/**
 * object
 */
var str={
    'name': 'anis',
    'age': 28,
    'func': function(){
        console.log('method');
    }
}
/**
 * array
 */
var name = ["anis", "shakil", "fayez", 23, 50]


/** 
 * assignment operator
 */

var lima = "is service holder"

var num1 =20; 
num1++;

// console.log(2 >= 10);


/**
 * math
 */


var num = 40.999;
// console.log(Math.PI);

/**
 * date
 */

var date= new Date();
console.log(date.getFullYear());