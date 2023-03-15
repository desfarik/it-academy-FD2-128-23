/*function minSum(array) {
    const sortedArray = array.slice().sort((a, b) => a-b);

    let sum =0;
    for (let i = 0; i < sortedArray.length / 2; i++) {
        sum += sortedArray[i] * sortedArray.at(-i- 1);
    }
}

console.log(minSum([5,2,3,1]))

 */


function showMessage(message, show) {
    show(message);
}
showMessage('hello', function (message) {
    console.log(message);
});
