function randomColor() {
  let color = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + color;
  console.log(color);
}

function createBtn() {
  let btn = document.createElement("BUTTON");
  btn.innerHTML = "Change Color";
  btn.addEventListener("click", randomColor);
  document.body.appendChild(btn);
}


randomColor();
createBtn();
