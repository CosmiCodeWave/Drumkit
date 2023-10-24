for(let i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",gotclicked)
};
function gotclicked (){
    let buttonclicked = this.innerHTML;
    makesound(buttonclicked);
    buttonanimation(buttonclicked);
    }

document.addEventListener('keypress',function(event){
makesound(event.key);
buttonanimation(event.key);
});   

function makesound(key){
   switch (key) {
      case "w":
      let audio= new Audio('sounds\\tom-1.mp3');
      audio.play();
      break;
      case "a":
      let audio1= new Audio("sounds\\tom-4.mp3");
      audio1.play();
      break;
      case "s":
         let audio2= new Audio('sounds\\snare1drum-43073.mp3');
      audio2.play();
      break; 
      case "d":
         let audio3= new Audio('sounds\\snare.mp3');
      audio3.play();
      break; 
      case "j":
         let audio4= new Audio('sounds\\crash-cymbal-hit-140577.mp3');
      audio4.play();
      break; 
      case "k":
         let audio5= new Audio('sounds\\tom-2.mp3');
      audio5.play();
      break; 
      case "l":
         let audio6= new Audio('sounds\\bassdrum-10-45967.mp3');
      audio6.play(); 
      break;
     default:
         console.log(buttonclicked);
         break;
   }
}
function buttonanimation(evt){
var buttonAnimation=document.querySelector("."+evt);

buttonAnimation.classList.add("pressed");
setTimeout(function()
{buttonAnimation.classList.remove("pressed")}
,100);
}