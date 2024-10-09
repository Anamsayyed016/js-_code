function tax(){
      
    let salary = parseInt(window.prompt("Enter your salary"));

    if(salary<300000){
        window.alert("salary is less than 3 lakh not want to pay tax");
    }

    else if(salary>=300000 && salary <750000){
            let tax = (salary/100)*10;
            window.alert("you have to pay tax");
    }

    else if(salary>=750000/100)*20;
        window.alert("you have to pay tax");
}

