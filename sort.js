let arrstr = ["fff","kfkffk","kkfs","cssns"];
arrstr.sort();

console.log(arrstr)

let arr = [85,45,25,10,36,85];
arr.sort(function(a,b){return a-b});
console.log(arr);

let arr1 = [85,45,25,10,36,85];

arr.sort(function(a,b){return b-a});
console.log(arr1)

let output = arr1.reduce(function(a,b){return a+b});
console.log(output);


let answerstr = arr1.toString()
console.log(answerstr);

let answerjoin = arr1.join(" _ ")
console.log(answerjoin);

//higher order method
//map
//reduce
//number sort
//find
//filter
//foreach
