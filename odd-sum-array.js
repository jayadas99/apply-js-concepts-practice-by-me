// write a function findOddSum( that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of odd numbers.

var numbers = [5, 7, 8, 10, 45, 30]

function findOddSum(nums){
    var total = 0;
    for(i = 0; i<nums.length; i++){
        if (nums[i] % 2 !== 0){
            var number = nums[i];
            total = total + number;
        }
         
    }
    return total;  
}

var odd_total = findOddSum(numbers);
console.log(odd_total);