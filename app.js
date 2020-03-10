window.addEventListener('load',function(){
    
    let sounds = document.querySelectorAll('.sound');
    let pads = document.querySelectorAll('.pads div');
    let bubbles = document.querySelector('.bubble');
    let colors = ["#60d394","#d36060","#c060d3","#d3d160","#6860d3","#60b8d3"]
    
  pads.forEach((pad , index) => {
      pad.addEventListener('click', function () {
        sounds[index].currentTime = 0   ;
        sounds[index].play();
          bubble(index)
      });
  });
    
    function bubble(index){
      let div = document.createElement("div");
      div.style.backgroundColor = colors[index];
      div.style.animation = 'jump 1s ease';
      bubbles.appendChild(div)
      bubbles.addEventListener('animationend',function(){
        bubbles.removeChild(this)
      })
    }



});