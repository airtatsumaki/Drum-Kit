for(var x = 0; x < document.getElementsByClassName('drum').length; x++){
  var index = x;
  document.getElementsByClassName('drum')[x].addEventListener("click", function(){
    playSound(this);
    buttonAnimation(this);
  });
}
document.addEventListener('keydown', function(e){
  for(var i = 0; i < document.getElementsByClassName('drum').length; i++){
    if(e.key == document.getElementsByClassName('drum')[i].innerHTML){
      playSound(document.getElementsByClassName('drum')[i]);
      buttonAnimation(document.getElementsByClassName('drum')[i]);
    }
  }
});

function playSound(drumObj){
  var audio = new Audio("sounds/" + drumObj.getAttribute('id') + ".mp3");
  audio.play();
}

function buttonAnimation(drumObj){
  drumObj.classList.add("pressed");

  const myTimeout = setTimeout(function(){
    drumObj.classList.remove("pressed");
  }, 100);
}

// function playSound(drumNote){
//   switch(drumNote){
//     case 'w':
//       var audio = new Audio("sounds/" + document.querySelector('.w').getAttribute('id') + ".mp3");
//       audio.play();
//       break;
//     case 'a':
//       var audio = new Audio("sounds/" + document.querySelector('.a').getAttribute('id') + ".mp3");
//       audio.play();
//       break;
//     case 's':
//       var audio = new Audio("sounds/" + document.querySelector('.s').getAttribute('id') + ".mp3");
//       audio.play();
//       break;
//     case 'd':
//       var audio = new Audio("sounds/" + document.querySelector('.d').getAttribute('id') + ".mp3");
//       audio.play();
//       break;
//     case 'j':
//       var audio = new Audio("sounds/" + document.querySelector('.j').getAttribute('id') + ".mp3");
//       audio.play();
//       break;
//     case 'k':
//       var audio = new Audio("sounds/" + document.querySelector('.k').getAttribute('id') + ".mp3");
//       audio.play();
//       break;
//     case 'l':
//       var audio = new Audio("sounds/" + document.querySelector('.l').getAttribute('id') + ".mp3");
//       audio.play();
//       break;

//     default:
//       break;
//   }
// }

