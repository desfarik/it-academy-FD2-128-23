function updateLight(current) {
    //В данном варианте реализовал через switch и через if, через if как по мне более компактно выглядит,
    // поэтому оставил его, но функцию через switch просто закоментил.

    // switch (current){
    //     case 'green':
    //     return 'yellow';
    //     case 'yellow':
    //     return 'red';
    //     case 'red':
    //     return 'green';
    // }
    return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : current === 'red' ? 'green' : false
};

console.log(updateLight('green') === 'yellow');
console.log(updateLight('yellow') === 'red');
console.log(updateLight('red') === 'green');