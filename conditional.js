/**
 * conditional statement
 */
$name="Rafiqa";
$age=10;

if($age > 0 && $age <=6){ // trua and true
    console.log('I am Infant');
}else if( $age > 6 &&  $age <18 ){
    console.log('I am kids');
}else if( $age >= 18 && $age < 30){
    console.log('I am young');
}else if($age>=30 && $age <50 ){
    console.log('I am Old man');
}else{
    console.log('......');
}
 
if($age==30 || $name=="Rafiq"){ // true false
    console.log('you are rafiq ');
}

if($name !== "Rafiq"){ 
    console.log('i am not rafiq');
}

/**
 * true && true = true
 * true && false = false
 * false && false =false
 * true || true = true
 * true || false =true
 * false || false = false
 */
 
 var day;
 switch (new Date().getDay()) {
   case 0:
     day = "Sunday";
     break;
   case 1:
     day = "Monday";
     break;
   case 2:
     day = "Tuesday";
     break;
   case 3:
     day = "Wednesday";
     break;
   case 4:
     day = "Thursday";
     break;
   case 5:
     day = "Friday";
     break;
   case  6:
     day = "Saturday";
 }

 console.log(day);