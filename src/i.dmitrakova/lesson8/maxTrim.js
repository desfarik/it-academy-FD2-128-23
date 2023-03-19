function maxTrim(){
    numbers = Array.from( new Set(numbers))//отфильтровать дублирующие 
    const max1 = Math.max(...numbers);
    numbers.splice(numbers.indexOf(max1))
}


function unique(array){
    const result = [];
    for (let item of array){
        
    }
}