function  nicknameGenerator(name) {
    let Arr = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    if (name.length < 4){
        return  "Error: Name too short"
    }
    for (let i = 0; i <Arr.length ; i++) {
        if (name[2] === Arr[i]){
            name = name.slice(0, 3);
        } else {
            name = name.slice(0,4);
        }
    }
    return name;
}

console.log(nicknameGenerator('Sam'));