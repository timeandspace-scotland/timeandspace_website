const imgElement = document.getElementById("target");

let count = 0;

const increase = () => {
  count++;
  if (count > 2) {
    count = 0;
  }
  imgElement.src = `assets/img/js/anim${count}.png`;
};

window.setInterval(() => {
  increase();
}, 750);
