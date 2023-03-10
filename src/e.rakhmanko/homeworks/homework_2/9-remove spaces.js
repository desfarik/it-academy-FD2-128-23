function noSpace(x){
    let newString = ''
        for(let i = 0; i < x.length; i++) {
            if(x[i] !== " "){
                newString += x[i]
            }
        }
        return newString
    } 
    console.log(noSpace('Hello world'));