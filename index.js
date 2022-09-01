for(var x = 0; x < document.getElementsByClassName('drum').length; x++){
  document.getElementsByClassName('drum')[x].addEventListener("click", function(){
    //console.log(e.target.textContent + " BUTTON GOT CLICKED");
    if (this.getAttribute('id') == 'tom-1'){
      console.log("you clicked tom-1");
    }
  });
}
