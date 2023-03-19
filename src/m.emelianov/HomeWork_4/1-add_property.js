function addProperty(questions){
    for (let i = 0; i < questions.length; i++){
        let obj = questions[i]
        obj.user = null;    
    }
    return questions 
}
const questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
},{
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
console.log(addProperty(questions))