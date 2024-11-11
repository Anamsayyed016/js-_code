// let arr = [45,6,5,8,10];

// let nwearr = arr.map(items)=>{return items*2})

function run(){
    let arr = [
        'https://wallpapers.com/images/hd/random-background-1920-x-1200-33i6p2yl62j0oet3.jpg',

        'https://wallpapers.com/images/featured/random-razywjghzt72bz8i.jpg',

        'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-mountain-valley-with-grass-and-sunshine-image_2935354.jpg',

        'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-mountain-valley-with-grass-and-sunshine-image_2935354.jpg'
    ];

    let output = document.querySelector('#answer')

    output.innerHTML = arr.map((imgurl)=>`<img style="width:400px;
    height:400px" src="${imgurl} alt="not found">`).join("")
        
        
}