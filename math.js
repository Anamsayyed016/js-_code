// let a = Math.PI
// console.log(a)

// let b = Math.SQRT1_2
// console.log(b)

// let c=56.7;
// console.log(Math.round(c))
// console.log(Math.floor(c))
// console.log(Math.ceil(c))
// console.log(Math.trunc(c))
// console.log(Math.abs(c))
// console.log(Math.pow(5,6));
// console.log(Math.random());

// let str = '1234567890lslsjffjfsfflsklslfsjflsKDKDLLMNNCXZQWWEEP!@#$%^&*'

// let store = ''

    let selectbtn = document.querySelector('#btn');
    selectbtn.addEventListener('click',show);


    function show(){
        let str = '1234567890lslsjffjfsfflsklslfsjflsKDKDLLMNNCXZQWWEEP!@#$%^&*';
        let store = ''
    for (let i=0;i<6;i++){
    let random = Math.random();
    let ans=random*str.length;
    let afterfloor = Math.floor(ans);
    let cha = str.charAt(afterfloor);
    store = store + cha
}
    console.log(store);
    let selecth1 = document.querySelector('#output');
    selecth1.innerHTML=store

    }