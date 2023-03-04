function last(x){
    x = x.split(' ').sort(
        function(a, b) {

            if (a[a.length - 1] > b[b.length - 1])
                return 1;
            if (a[a.length - 1] < b[b.length - 1])
                return -1;
            
            }
    ).join(' '); 
    return x;
}

console.log(last('aaa zzz ppp uuu ooo kkk vvv'));
console.log(last('what time are we climbing up the volcano'));