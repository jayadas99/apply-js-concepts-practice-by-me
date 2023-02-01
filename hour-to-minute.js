// write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.

function convert_minute(hour){
     var minute = hour * 60
     console.log(minute);
     return minute;
}
var hr = 3;
var outputMinute = convert_minute(hr)
console.log(outputMinute);