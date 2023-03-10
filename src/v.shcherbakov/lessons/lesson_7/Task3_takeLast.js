function takeLast(array,n) {
    let arrNew=[];
    for (let i = array.length-1; i >=array.length-n ; i--) {
        arrNew.push(array[i]);
    }
    return arrNew.reverse();
}

console.log(takeLast([1,5,3,4,5],3));