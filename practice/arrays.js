var marks = [11,13,24,34,45,56,67,67,78]
//if I want to break an array and create sub array
subMarks = marks.slice(2,5);
console.log(subMarks);


marks.push(23);

//console.log(marks.indexOf(67));

//check wether 56 is present in array

console.log(marks.includes(100));

//sum up the elements in the array
var sum = 0;
for(let i = 0; i<marks.length; i++)
{
    //console.log(marks[i]);
    sum = sum + marks[i];
  
}
console.log(sum);

//reduce filter map - it the same as sum, the output is the same

let total = marks.reduce((sum, mark) => sum + mark,0)
console.log(total);

var scores = [12,13,14,16]
//print only even numbers

//this is a hard way
//1. create a new array 
var evenScore = []
for(i = 0; i<scores.length; i++)
{
    if(scores[i] %2 == 0)
    {
        evenScore.push(scores[i])
    }
}
console.log(evenScore)




//this is a simple way using method "filter"

var even = scores.filter(scores => scores%2 ==0)
console.log(even);

//map array function

//create an array with even number of scores and multiply each number by 3

let multiEven = even.map(even => even*3);

console.log(multiEven);


//create an array with even number of scores and multiply each number by 3 and sum them

let totalScore = multiEven.reduce((sum, scor) => sum + scor, 0);
console.log(totalScore);

//we can write it in one single line

var score1 = [12,13,14,16]

let newSumScore = score1.filter(score1 => score1%2 ==0).map(score1=>score1*3).reduce((sum, scr) => sum+scr,0);

console.log(newSumScore);
