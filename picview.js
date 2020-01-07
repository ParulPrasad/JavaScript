var img=document.getElementById("image");

var imgs=["img7.jpg","img8.jpg","img10.jpg"];
var count=0;

setInterval(()=>next(),2000);   //can also pass the whole next() function i.e function body

function next(){
    if(count==imgs.length-1){
        count=-1;
    }
 count++;
 img.src=imgs[count];
}

function previous(){
    if(count==0){
        count=imgs.length;
    }
    count--;
    img.src=imgs[count];
}

