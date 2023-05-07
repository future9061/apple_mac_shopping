let moveBtn = document.querySelector(".btn_wrap"),
  macShopping = document.querySelector(".mac_shopping_model_wrap");

macShopping.addEventListener("mouseover", function () {
  moveBtn.style.opacity = "1";
});

macShopping.addEventListener("mouseout", function () {
  moveBtn.style.opacity = "0";
});

moveBtn.addEventListener("mouseover", function () {
  moveBtn.style.opacity = "1";
});

moveBtn.addEventListener("mouseout", function () {
  moveBtn.style.opacity = "0";
});

let macAccessory = document.querySelector(".Accessory_wrap"),
  moveBtn2 = document.querySelector(".btn_wrap2");

macAccessory.addEventListener("mouseover", function () {
  moveBtn2.style.opacity = "1";
});

macAccessory.addEventListener("mouseout", function () {
  moveBtn2.style.opacity = "0";
});

moveBtn2.addEventListener("mouseover", function () {
  moveBtn2.style.opacity = "1";
});

moveBtn2.addEventListener("mouseout", function () {
  moveBtn2.style.opacity = "0";
});

let conectWrap = document.querySelector(".conect_wrap"),
  moveBtn3 = document.querySelector(".btn_wrap3");

conectWrap.addEventListener("mouseover", function () {
  moveBtn3.style.opacity = "1";
});

conectWrap.addEventListener("mouseout", function () {
  moveBtn3.style.opacity = "0";
});

moveBtn3.addEventListener("mouseover", function () {
  moveBtn3.style.opacity = "1";
});

moveBtn3.addEventListener("mouseout", function () {
  moveBtn3.style.opacity = "0";
});

let loadEvent = document.querySelector(".load_event"),
  spanEle = document.querySelector(".load_event span");

window.addEventListener("load", function () {
  loadEvent.style.transform = "translateY(0)";
  this.setTimeout(function () {
    loadEvent.style.backgroundColor = "#fff";
    loadEvent.style.color = "black";
    loadEvent.style.color = "black";
  }, 1000);
});

// slide 1

let nextBtn1 = document.querySelector(".btn_next"),
  preBtn1 = document.querySelector(".btn_pre"),
  moveShopping = document.querySelector(".mac_shopping_model_wrap");

nextBtn1.addEventListener("click", function () {
  let shopping = getComputedStyle(moveShopping);
  let marginLeft = parseInt(shopping.marginLeft);

  if (marginLeft > -2400) {
    moveShopping.style.marginLeft = "-2660px";
  }
  if (marginLeft > -1860) {
    moveShopping.style.marginLeft = "-2300px";
  }
  if (marginLeft > -1400) {
    moveShopping.style.marginLeft = "-1840px";
  }
  if (marginLeft > -930) {
    moveShopping.style.marginLeft = "-1380px";
  }
  if (marginLeft > -470) {
    moveShopping.style.marginLeft = "-920px";
  }
  if (marginLeft > -10) {
    moveShopping.style.marginLeft = "-460px";
  }
  if (marginLeft > 450) {
    moveShopping.style.marginLeft = "0px";
  }
});

preBtn1.addEventListener("click", function () {
  let shopping = getComputedStyle(moveShopping);
  let marginLeft = parseInt(shopping.marginLeft);

  if (marginLeft < 10) {
    moveShopping.style.marginLeft = "461px";
  }
  if (marginLeft < -400) {
    moveShopping.style.marginLeft = "0px";
  }
  if (marginLeft < -850) {
    moveShopping.style.marginLeft = "-460px";
  }
  if (marginLeft < -1200) {
    moveShopping.style.marginLeft = "-920px";
  }
  if (marginLeft < -1700) {
    moveShopping.style.marginLeft = "-1380px";
  }
  if (marginLeft < -2200) {
    moveShopping.style.marginLeft = "-1840px";
  }
  if (marginLeft < -2500) {
    moveShopping.style.marginLeft = "-2300px";
  }
});

let nextBtn2 = document.querySelector(".btn_wrap2 i:last-child"),
  preBtn2 = document.querySelector(".btn_wrap2 i:first-child"),
  moveAccessory = document.querySelector(".Accessory_wrap");

nextBtn2.addEventListener("click", function () {
  (acceCom = getComputedStyle(moveAccessory)),
    (accMargin = parseInt(acceCom.marginLeft));

  if (accMargin > -620) {
    moveAccessory.style.marginLeft = "-900px";
  }
  if (accMargin > -350) {
    moveAccessory.style.marginLeft = "-600px";
  }
  if (accMargin > -10) {
    moveAccessory.style.marginLeft = "-300px";
  }
  if (accMargin > 450) {
    moveAccessory.style.marginLeft = "0px";
  }
});

preBtn2.addEventListener("click", function () {
  (acceCom = getComputedStyle(moveAccessory)),
    (accMargin = parseInt(acceCom.marginLeft));

  if (accMargin > -920) {
    moveAccessory.style.marginLeft = "-600px";
  }
  if (accMargin > -620) {
    moveAccessory.style.marginLeft = "-300px";
  }
  if (accMargin > -400) {
    moveAccessory.style.marginLeft = "0px";
  }
  if (accMargin > -10) {
    moveAccessory.style.marginLeft = "460px";
  }
});

let nextBtn3 = document.querySelector(".btn_wrap3 i:last-child"),
  preBtn3 = document.querySelector(".btn_wrap3 i:first-child"),
  moveConec = document.querySelector(".conect_wrap");

nextBtn3.addEventListener("click", function () {
  let conecCom = getComputedStyle(moveConec);
  conecMargin = parseInt(conecCom.marginLeft);

  if (450 < conecMargin) {
    moveConec.style.marginLeft = "-80px";
  }
});

preBtn3.addEventListener("click", function () {
  let conecCom = getComputedStyle(moveConec),
    conecMargin = parseInt(conecCom.marginLeft);

  if (conecMargin < -75) {
    moveConec.style.marginLeft = "461px";
  }
});
