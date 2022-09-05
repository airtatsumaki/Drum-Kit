jQuery('.drum').click(function(){
  playSound(jQuery(this));
  buttonAnimation(jQuery(this));
});

jQuery(document).keydown(function(event){
  jQuery('.drum').each(function(){
    if (event.key.toLowerCase() == jQuery(this).text().toLowerCase()){
      playSound(jQuery(this));
      buttonAnimation(jQuery(this));
    }
  });
});

function playSound(drumObj){
  var audio = new Audio("sounds/" + drumObj.attr('id') + ".mp3");
  audio.play();
}

function buttonAnimation(drumObj){
  drumObj.addClass("pressed");
  const myTimeout = setTimeout(function(){
    drumObj.removeClass("pressed");
  }, 100);
}