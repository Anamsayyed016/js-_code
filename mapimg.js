let arroobj = [
    {
        "id":1,
        "imgurl":"toy.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprize":222
    },
    {
        "id":2,
        "imgurl":"toy.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprize":99
    },
    {
        "id":3,
        "imgurl":"toy.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprize":89
    },
    {
        "id":4,
        "imgurl":"toy.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprize":90
    },
    {
        "id":5,
        "imgurl":"toy.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprize":90
    },
    {
        "id":6,
        "imgurl":"toy.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprize":90
    },
    {
        "id":7,
        "imgurl":"toy.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprize":90
    }
];

let selectdiv = document.querySelector("#ans");

selectdiv.innerHTML = arroobj.map((card)=>
    ` <div style="margin:20px;box-shadow:0px 0px 10px black">
<img width="200px" height="200px" src="${card.imgurl}" alt="">
        <div>${card.bname}</div>
        <div>${card.pname}</div>
        <div>${card.pprize}</div>
        <div>add to card</div>
        <div>buy now</div>
    </div>
`).join( " ")