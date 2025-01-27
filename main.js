let boxes = document.querySelector(".box");
let img = document.querySelector("#heart");
let icon = document.querySelector(".fa-heart")


let showimage = (() => {

        img.style.display ="block"
    icon.style.color ="red"
    secand = 0;
    setTimeout(() => {
        img.style.display ="none";
    },1000);
      
});


let secand = 1
let select =(() => {
   if(secand == 1){
    icon.style.color ="red"
    secand = 0;
   }
   else{
     icon.style.color ="black"
     secand = 1;
   }

});

boxes.addEventListener("dblclick",showimage);
icon.addEventListener("click",select);