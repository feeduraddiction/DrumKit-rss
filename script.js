
const keys = document.querySelectorAll('.button');

document.addEventListener("keydown", function(e){
 const key = document.querySelector(`.button[data-key="${e.keyCode}"]`);
key.classList.add("pushing-button");
// setTimeout(function(){key.classList.remove("pushing-button")},100);
})

keys.forEach(key =>key.addEventListener("click", (e) => {
  key.classList.add('pushing-button')
})
)

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('pushing-button');

}



keys.forEach(key => key.addEventListener('transitionend', removeTransition)
);

