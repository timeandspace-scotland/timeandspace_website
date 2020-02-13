const imgElement = document.getElementById("target");

let count = 1;

const increase = () => {
  count++;
  if (count > 2) {
    count = 1;
  }
  imgElement.src = `assets/img/js/anim${count}.png`;
};

window.setInterval(() => {
  increase();
}, 500);
