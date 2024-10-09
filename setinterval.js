// setInterval(run, 1000);
// let count = 0;

// function run(){
//     count++;

//     let selecth1 = document.querySelector('#output');
//     selecth1.innerHTML = count;
// }

let count = 0;
function slider(){
    setInterval(runslider,5000);


    function runslider(){
        if(count === 0){
            let selectarticle = document.querySelector('#slidediv')
            selectarticle.marginLeft = "0px";
            selectarticle.style.transition = "margin-left .5s";
            count++;
        }
    }

    elseif(count === 1){
        let selectarticle = document.querySelector('#slidediv')
        selectarticle.style.marginLeft = "-1000px";
        selectarticle.style.transition = 
    }
}