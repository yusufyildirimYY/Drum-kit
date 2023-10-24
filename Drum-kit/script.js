function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop the function
  audio.currentTime = 0; //rewind
  audio.play();
  key.classList.add("playing");
}

function endSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!key) return;
  key.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
window.addEventListener("keyup", endSound);
window.addEventListener("keydown", playSound);
