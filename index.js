var sounds = [];

for(var x = 0; x < document.getElementsByClassName('drum').length; x++){
  document.getElementsByClassName('drum')[x].addEventListener("click", function(){
    var audio = new Audio("sounds/" + this.getAttribute('id') + ".mp3");
    sounds.push(audio);
    audio.play();
  });
}

document.addEventListener('keydown', function(e){
    var key = e.key;
    console.log(key);

    switch(e.key){
      case 'w':
        var audio = new Audio("sounds/" + document.querySelector('.w').getAttribute('id') + ".mp3");
        audio.play();
        break;
      case 'a':
        var audio = new Audio("sounds/" + document.querySelector('.a').getAttribute('id') + ".mp3");
        audio.play();
        break;
      case 's':
        var audio = new Audio("sounds/" + document.querySelector('.s').getAttribute('id') + ".mp3");
        audio.play();
        break;
      case 'd':
        var audio = new Audio("sounds/" + document.querySelector('.d').getAttribute('id') + ".mp3");
        audio.play();
        break;
      case 'j':
        var audio = new Audio("sounds/" + document.querySelector('.j').getAttribute('id') + ".mp3");
        audio.play();
        break;
      case 'k':
        var audio = new Audio("sounds/" + document.querySelector('.k').getAttribute('id') + ".mp3");
        audio.play();
        break;
      case 'l':
        var audio = new Audio("sounds/" + document.querySelector('.l').getAttribute('id') + ".mp3");
        audio.play();
        break;
    }
})

