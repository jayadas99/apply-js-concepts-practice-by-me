// write a function named leapYear() and check whether the next year 2023 is leap year or not.if leap year function will return true and if not function will return false.
function leap_year(years){
    if(years % 4 == 0){
        var yearDeclaration = true;
        return yearDeclaration;
        }
    else{
        var yearDeclaration2 = false;
        return yearDeclaration2;
    }
    
}

 var year = 2016;

var lYear = leap_year(year);
console.log(lYear);


// using return once and same var yearDeclaration

function leap_year(years){
    if(years % 4 == 0){
        var yearDeclaration = true;
        // return yearDeclaration;
        }
    else{
        var yearDeclaration = false;
        // return yearDeclaration2;
    }
    return yearDeclaration; 
}

 var year = 1973;

var lYear = leap_year(year);
console.log(lYear);
