const btns = document.querySelectorAll("button");
const rippleBtnClasses = ["primary", "default", "dashed"];

btns.forEach((btn) => {
  // 클래스가 primary, default dashed 인 경우에만 ripple 적용하기
  const isRippled = rippleBtnClasses.some((item) => {
    return btn.classList.contains(item);
  });

  if (!isRippled) return;

  btn.addEventListener("click", function (event) {
    let rippleElement = document.createElement("span");
    btn.appendChild(rippleElement);
    setTimeout(() => {
      rippleElement.remove();
    }, 500);
  });
});
