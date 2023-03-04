function rentalCarCost(d) {
  // Your solution here
  const rent = (d * 40);
   const minOf = 20;
   const maxOf =50;
  
 if (d < 3){
   return(rent);
 } else if( d < 7){
   return(rent - minOf)
 } else if( d >= 7){
   return(rent - maxOf)
 } else {
   return(rent )
 }
}

console.log(rentalCarCost(2))
console.log(rentalCarCost(3))
console.log(rentalCarCost(6))
console.log(rentalCarCost(7))
console.log(rentalCarCost(10))