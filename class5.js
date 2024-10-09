function tax(){
    let package = parseInt(window.prompt("Enter you salary"));
    if (package<350000 ) {
        window.alert("pakage is less than 3.5 lakh dont have to pay tax");
        
    } 
        else if (package >=350000 && package<8000000){
            let payabletax = (package/100)*10;
            window.alert("you have to pay" + payabletax + "on your package");
        }

        else if(package>=800000){
            let payabletax = (package/100)*17;
            window.alert("you have to pay" + payabletax + "on your pakage");
        }
        else{
            window.alert("invalid input");
        }
   
}
tax();