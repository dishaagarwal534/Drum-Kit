
for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  var buttonInnerHTML= this.innerHTML;  
   Keysound(buttonInnerHTML);
   animation(buttonInnerHTML);
}
); 
} 

document.addEventListener("keypress", function(event){
  Keysound(event.key);
  animation(event.key);
})


function Keysound(key){
  switch(key){
    case "w":
        var tom1= new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case "a":
        var tom2= new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case "s":
          var crash= new Audio('sounds/crash.mp3');
          crash.play();
          break;
      case "d":
        var tom3= new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case "j":
        var kick= new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      case "k":
        var snare= new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case "l":
          var tom4= new Audio('sounds/tom-4.mp3');
          tom4.play();
          break;
      default:
        break;
  }
}

function animation(key){
  var current = document.querySelector("."+ key);
  current.classList.add("pressed");
  setTimeout(() => {
    current.classList.remove("pressed");
  }, 1000);
}

  // function HouseKeeper(yearsOfExperience, rate, cleaningReport ){
   // this.yearsOfExperience = yearsOfExperience;
   // this.name= name;
   // this.cleaningReport= cleaningReport;
   // this.clean= function(){
    // alert("cleaning is done.. you are welcomed");
   //}
  //}
