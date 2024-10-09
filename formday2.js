// function registration(){
//     let name = document.querySelector('#name').value;
//     let email = document.querySelector('#email').value;
//     let mobile = document.querySelector('#mobile').value;
//     let password = document.querySelector('#password').value;
//     let confirmpassword = document.querySelector('#cpassword').value;

//             console.log(name,email,mobile,password,confirmpassword);

//             if(name ===""){
//                 document.querySelector('#errorname').innerHTML = "plz enter name";

//                 let selectname = document.querySelector('#name');
//                 selectname.style.borderColor = "red"
//                 selectname.style.outlineColor = "red"
//                 return false;
//             }
//         else if(email ===""){
//                 document.querySelector('#errorname').innerHTML = "plz enter name";

//                 let selectname = document.querySelector('#email');
//                 selectname.style.borderColor = "red"
//                 selectname.style.outlineColor = "red"
//                 return false;
//             }
// }





// function s(){
//     let selectedinput = document.querySelector('#name');
//     let selecteterror = document.querySelector('#errorname');
//         selecteterror.innerHTML = ""
//         selectedinput.style.borderColor = "black";
//         selectedinput.style.outlineColor = "black";
// }

        // ====================================//
        
function s(arg){
    console.log(arg)
    let selectedinput = document.querySelector(`#${arg}`);
    console.log(selectedinput);

    selectedinput.style.borderColor = "blue";
    selectedinput.style.outlineColor = "blue";
}

else if(!(email.include('@') && email.include(".com"))){
    document.querySelector('#erroremail').innerHTML = "Please enter the email";

    let selectname = document
}