// let obj = {
//     "name" : "Anam";
//     age : 24
// };

// let document1 = {
//     "querySelector" : function(arg){

//         console.log("hello")
//     },
//     "getElementById":function(){

//     }
// }

// document1.querySelector('#id');

let obj = [
    {
        "id":1,
        "name":"Anam",
        "img":"./toy.jpg",
        "course":"Python",
        "mobileno":2552525242,
    },
    {
        "id":2,
        "img":"./toy.jpg",
        "name":"Sayyed",
        "course":"java",
        "mobileno":52422255424,
    },
    {
      "id":3,
      "img":"./toy.jpg",
        "name":"Sayyed",
        "course":"java",
        "mobileno":52422255424,  
    }
];

console.log(obj[0].name)
console.log(obj[1].course)
//map is used for call back and inhirted element

let selecttable = document.querySelector('#output');

selecttable.innerHTML = obj.map((e)=>`
    <tr>
            <td> ${e.id}</td>
            <td><img width="100" src="${e.img}"></td>
            <td>${e.name}</td>
            <td>${e.course}</td>
            <td>${e.mobile}</td>
    </tr>
`).join(" ")


