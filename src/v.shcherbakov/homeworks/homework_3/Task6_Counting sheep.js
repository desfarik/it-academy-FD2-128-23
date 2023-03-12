function countSheeps(arrayOfSheep) {
    // arrayOfSheepS.forEach((item, index, arrayOfSheep) => {
    //     if (index !== false){
    //         index++;
    //     } return index;
    // })
    let y = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {

        if (arrayOfSheep[i] !== false){
                    y++;
                }
    }return y;
}

console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));