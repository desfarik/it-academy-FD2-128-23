function updateLight(current) {
    const currentLight = ['green', 'yellow', 'red'];
    if (current === currentLight[0]) {
        return currentLight[1];
    }

    if (current === currentLight[1]) {
        return currentLight[2];
    }

    if (current === currentLight[2]) {
        return currentLight[0];
    }
}

console.log(updateLight('red'));