const keys = document.querySelectorAll(".button");
const notes = document.querySelectorAll(".note");

document.addEventListener("keydown", function (e) {
  const key = document.querySelector(`.button[data-key="${e.keyCode}"]`);
  const notes = document.querySelector(`.note[data-key="${e.keyCode}"]`);
  key.classList.add("pushing-button");
  notes.classList.add("note-animation");
  // setTimeout(function(){notes.classList.remove("note-animation")},700);
});



keys.forEach((key,index) =>
  key.addEventListener("click", (e) => {
    key.classList.add("pushing-button");
    notes[index].classList.add("note-animation")
  })
);
// notes.forEach((note) =>
//   note.addEventListener("click", (e) => {
//    note.classList.add("pushing-button");
//   })
// );

function removeTransitionBtn(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("pushing-button");
}

function removeTransitionNote(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("note-animation");
  console.log(e)
}

keys.forEach((key) =>
  key.addEventListener("transitionend", removeTransitionBtn));

notes.forEach((note) =>
  note.addEventListener("transitionend", removeTransitionNote));
