function intersection(object1, object2){
    let resultObject = {}
    for (const key in object) {
        if(object2[key]=== object1[key]){
            resultObject[key] === object1[key]
        }
    }
    return resultObject
}
alert(intersection({name: 'Ivan', age:20}, {name: 'Ivan', maxAge:25}))