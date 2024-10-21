const btn = document.querySelector("#primary");

btn.addEventListener("click", function (event) {
  let rippleElement = document.createElement("span");
  btn.appendChild(rippleElement);
  setTimeout(() => {
    rippleElement.remove();
  }, 500);
});
