// check whether your age id odd or even by a function.if u give a number as a parameter to the function,if that number is even ,the function will return true and if  odd function will return false.
function checkAge(number){
    if(number % 2 == 0){
        var Declare = true;
        return Declare;
    }
    else{
        var Declare2 = false;
        return Declare2;
    }
}

var num = 30;

var ageDeclaration = checkAge(num);
console.log(ageDeclaration);


// writing return once and varDeclare once
function checkAge(number){
    if(number % 2 == 0){
        varDeclare = true;
        
    }
    else{
        varDeclare = false;
        
    }
    return varDeclare;
}

var num = 31;

var ageDeclaration = checkAge(num);
console.log(ageDeclaration);