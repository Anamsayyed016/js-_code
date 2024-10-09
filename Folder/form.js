function submit(){
    
    document.querySelector("errorpassword").innerHTML = "password contains atleast uppercase , lowercase , special chracter";
    let selectname = document.querySelector("#password");

        selectname.style.borderColor = "blue";
        selectname.style.outlineColor = "blue";
}
 


function valid(arg){
        let selectedinput = document.querySelector(`#$arg`);

        selectedinput.style.borderColor = "red";
        selectedinput.style.outlineColor = "red"


        let selectederrordiv = document.querySelector(`#error${arg}`);
    selectederrordiv.innerHTML = "";

}