function sumOfMinimums(arr) {
        let sum = 0;
        const arrMin = arr.map((nestedArr) => Math.min(...nestedArr));
        return arrMin.reduce((sum, current) => sum + current, 0);
    }

console.log(sumOfMinimums([[ 1, 2, 3, 4, 5 ],[5, 6, 7, 8, 9],[20, 21, 34, 56, 100]]));