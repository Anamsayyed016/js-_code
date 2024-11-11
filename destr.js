let a = {
    "id":1,
    "name":"anam",
    "age":25,
    "course":"fsd"
}

a.name;
let {name,age,id,course}=a;
console.log(name)
console.log(age)
console.log(id)
console.log(course);
//when we create any funtion outside its called fuction
//when we creat inside the obj are known as method

let b = {
    "sum":function(){

    }
}
//--regular function----
b.sum()
function show(){

}
show(3,56);
function show(arg,arg1){

}
//types of function
//regular  function
//arrow function---varable se denot krte hai r iska koi naam mhi hota 2015 me updte hua tha

//IIFE(imedialty invoked function expression)call krne k liye likhne ki zarurat mhi hai apne aap chlta hai

const run = ()=>{

}
run();

//----//
(function(){

})();

//higher order function -------jiske andar ek aur function ko pass krte hai

// setInterval,setTimeout,map,fil
