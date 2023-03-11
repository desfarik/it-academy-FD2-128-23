function clone(array) {
    let clone = []
    for (let i = 0; i < array.length; i++) {
        clone[i] = array[i]
    }
    //return clone
    return [...array]
}