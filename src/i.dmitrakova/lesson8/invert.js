function invert(object){
    const inverted = {};
    for (const key in object) {
        inverted[object[key]] = key
    }
}