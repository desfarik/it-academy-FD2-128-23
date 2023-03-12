Object.defineProperty(Array.prototype, 'numberOfOccurrences', {
    value: function numberOfOccurrences(element) {
        let num = 0
        for (let i = 0; i < this.length; i++) {
            if (this[i] === element) {
                num++
            }
        }
        return num
    }
});
console.log([0, 1, 2, 2, 3].numberOfOccurrences(2));