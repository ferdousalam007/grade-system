function grade(marks){
if(marks<=32){
 return (`you are failed your total marks is ${marks}`)
}
else if(marks<=39){
    return (`you got d grade your total marks is ${marks}`)
}
else if(marks<=49){
    return (`you got C grade your total marks is ${marks}`)
}
else if(marks<=59){
    return (`you got B grade your total marks is ${marks}`)
}
else if(marks<=69){
    return (`you got A- grade your total marks is ${marks}`)
}
else if(marks<=79){
    return (`you got A grade your total marks is ${marks}`)
}
else if(marks<=100){
    return (`you got A+ grade your total marks is ${marks}`)
}

}
const yourGrade= grade(83);
console.log(yourGrade)