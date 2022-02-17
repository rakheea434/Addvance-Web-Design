/**
 * Loop start
 * for
 * foreach
 * for in
 * for of
 * while
 * do while
 */
//i++       i=i+1
//initilization , condition, increment/decrement

/**
 * for loop
 */
const num = [30,40,50,60,70,80,90];
let i=0;  
let sum=0;
for( i; i<num.length; i++ ){ 
    sum+=num[i];
}
// console.log(sum);
/**
 * foreach
 */

let sum2=0;
num.forEach(function(item){
    sum2+=item;
})
// console.log(sum2);
var str={
    'name': 'anis',
    'age': 28,
    'func': function(){
        console.log('method');
    }
}

for(value  in str){
    // console.log(str[value]);
}

/**
 * for of
 */

for(res of num){
    // console.log(res);
}

/**
 * while
 */
let j=0;
while(j<10){
    j++
    if (j==3) {
        continue;
    }
    console.log('hello '+ j);
  
}
