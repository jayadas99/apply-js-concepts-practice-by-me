// write a function find LeapYear() that will take the array below as the input parameter and will check if each year is a leap year.If a year is a leap-year insert that in a new array,return the new array and print the result.
var leapYear = [];
var allyears =[2023, 2024, 2025, 2028, 2030, 1900]
function findleapYear(years){
    for(i=0; i<years.length; i++){
        if((years[i] % 4 == 0 && years[i] % 100 != 0) ||
        years[i] % 400 == 0){
            console.log("this is a leap year");
            leapYear.push(years[i]);
            
        }
        else{
            console.log("this is not leap year")
        }
        
    }
    return leapYear;
}
// return leapYear;
// var year = 62;

var lYear = findleapYear(allyears);
console.log(lYear);
