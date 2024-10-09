function submit(){

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let mobile = document.querySelector('#number').value;
    let password = document.querySelector('#password').value;
    let cpassword = document.querySelector('#cpassword').value;


    console.log(name,email,number,password,cpassword);


            if(name === ""){
                    document.querySelector('#errorname').innerHTML = "please enter your name";
                    let selectname = document.querySelector('#name');
                    selectname.style.borderColor = "red"
                    selectname.style.outline = "red"
                    return false;
            }
            

            else if(email === ""){
                    document.querySelector('#erroremail').innerHTML = "please enter valid email";
                    let selectname = document.querySelector('#email')
                    selectname.style.borderColor = "red"
                    selectname.style.outline = "red"
                    return false;
            }

           
            else if(!(email.includes('@') && email.includes(".com"))){
                document.querySelector('#erroremail').innerHTML = "Please enter valid email";
                let selectname = document.querySelector('#email');
                selectname.style.borderColor = "red"
                selectname.style.outlineColor = "red"
                return false;
         
        }

        console.log("right code");
        return false; 
        
        // else if (password === ""){
        //         document.querySelector('errorpassword').innerHTML = "Please enter your password";
        //         let selectname = document.querySelector('#password');
        //         electname.style.borderColor = "red"
        //         selectname.style.outlineColor = "red"
        //         return false;
        //        }

        //        else if(!
        //         (
        //                 password.match(/[1234564890]/)
        //                 &&
        //                 password.match(/[!@#$%*_]/)
        //                 &&
        //         )
        //        )
}
   


                       

function val(arg){
    console.log(arg)
    let selectedinput = document.querySelector(`#${arg}`);
    console.log(selectedinput);
    selectedinput.style.borderColor = "blue";
    selectedinput.style.outlineColor = "blue";


    let selectederrordiv = document.querySelector(`#error${arg}`);
    selectederrordiv.innerHTML = "";
}