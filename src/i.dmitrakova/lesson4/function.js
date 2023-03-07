function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}
checkAge(44);

function min(a,b){
    if(a < b){
        return a;
    }
   else{
        return b;
    }
}
/*alert(min(4, 2));*/


function min(a, b) {
    return a < b ? a : b;
  }



 /* function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "Вы согласны." );
  }
  
  function showCancel() {
    alert( "Вы отменили выполнение." );
  }
  
  // использование: функции showOk, showCancel передаются в качестве аргументов ask
  ask("Вы согласны?", showOk, showCancel);*/
  
  /*function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  ask("Вы согласились бы?",
   function(){alert("Вы согласны")},
   function(){alert("Вы не согласились")})*/

  /*1 function findLength(number){
    return number.length;
   }
   alert(findLength('5555'));*/

/*function finalGrade(exam, progect)*/


/*discount1 = (40*20)/100;
sum1 = 40 - discount1;
discount2 = (40*50)/100;
sum2 = 40 - discount2;
function calcDays(day){
    if(day > 3 && day < 7){
        
        return 40-(40*20)/100;
    } else if(day >= 7){
       
        return 40-(40*50)/100;
    }
}
alert(calcDays(55))*/

/*5
function calcCorner(corner1, corner2){
    if(corner1 <= 0 || corner1 > 180 || 
        corner2 <= 0 || corner2 > 180){
            alert("Введите корректные значения")
    }
    return 180 - corner1 - corner2;
}
alert(calcCorner(48, 20))*/


/*7
function calcResul(number){
    if(number%2 == 0){
        return number*8;
    } else{
        return number*9;
    }
}
alert(calcResul(5))*/

/*remove first and last elem*/
/*function removeElem(str){
    let str = 'First lesson';
    alert(str.substring(0, str.length - 1));
}
alert(removeElem())*/
/*function removeElem(str){
let str = "First lesson";
    alert(str.substring(1, str.length - 1));
}
alert(removeElem(str))*/

function removeChar(str){
    return str.substring(1, str.length-1)
}
alert(removeChar('gggg and white'))

