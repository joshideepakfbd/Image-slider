
const slides=document.querySelectorAll('.slide');
var counter=0;
slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`

});
function goprev(){
    counter--;
    slideimage();
}
function gonext(){
    counter++;
    slideimage();
}
const slideimage=()=>{
    slides.forEach(
        (slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`

    }
)

}