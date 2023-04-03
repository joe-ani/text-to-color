const body = document.querySelector(".body");

setInterval(() => {
  const textInput = document.querySelector(".input");
  body.style.background = textInput.value;
}, 10);
