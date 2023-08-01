//sub menu slide 이벤트

const mainMenu = document.querySelectorAll('.main-header ul li');
const subMenu = document.querySelectorAll('.sub');


mainMenu.forEach((elem, idx) => {

  elem.addEventListener('mouseenter', function (e) {

    for (let i = 0; i <= (mainMenu.length - 1); i++) {
      subMenu[i].classList.remove('sub-show')
    }

    if (e.target.id === subMenu[idx].id) {
      subMenu[idx].classList.add('sub-show')
    }
  })

  subMenu[idx].addEventListener('mouseleave', function () {
    subMenu[idx].classList.remove('sub-show')
  })
})

/*로드 이벤트 */
const loadEvent = document.querySelector(".load_event");
const spanEle = document.querySelector(".load_event span");

window.addEventListener("load", function () {
  loadEvent.style.transform = "translateY(0)";
  this.setTimeout(function () {
    loadEvent.classList.add('color-change')
  }, 1000);
});



//slide에 마우스 올리면 좌우 버튼이 나타는 이벤트
function addMouseEvents(element, button) {
  element.addEventListener("mouseover", function () {
    button.classList.add("show-btn");
  });

  element.addEventListener("mouseout", function () {
    button.classList.remove("show-btn");
  });

  button.addEventListener("mouseover", function () {
    button.classList.add("show-btn");
  });

  button.addEventListener("mouseout", function () {
    button.classList.remove("show-btn");
  });
}

const macModel = document.querySelector(".model");
const moveBtn1 = document.querySelector(".btn1");
addMouseEvents(macModel, moveBtn1);

const macAccessory = document.querySelector(".accessory");
const moveBtn2 = document.querySelector(".btn2");
addMouseEvents(macAccessory, moveBtn2);

const macConnect = document.querySelector(".connect");
const moveBtn3 = document.querySelector(".btn3");
addMouseEvents(macConnect, moveBtn3);



const next = false;
const pre = true;


const moveSlide = (wrap, item, pre) => {

  const marginLeftValue = parseInt(window.getComputedStyle(wrap).marginLeft); // 요소의 ml값
  const itemWidth = item[0].offsetWidth; // slide가 움직여야 하는 값
  const itemTotalWidth = itemWidth * (item.length - 3); // item의 총 ml 이동값


  if (!pre) {
    for (let i = 0; i < item.length; i++) {
      if (marginLeftValue === -(itemWidth * i) && marginLeftValue > -itemTotalWidth) {
        wrap.style.marginLeft = `-${itemWidth + (itemWidth * i)}px`;
      }
    }
  }

  // pre 버튼을 여러번 클릭 시 함수가 여러번 호출 되면서 margin 값이 양수가 돼 버튼 이벤트가 발생 안하는 문제 생김
  //marginLeftValue === -(itemWidth * i) 마진과 이동값인 width가 같아야지만 이동하게 조건 걸어줌

  if (pre) {
    for (let i = 0; i < item.length; i++) {
      if (marginLeftValue < 0 && marginLeftValue === -(itemWidth * i)) {
        wrap.style.marginLeft = `${marginLeftValue + itemWidth}px`; // 이전 마진 레프트 값에 itemWidt더함
      }
    }
  }
};


// slide 1

const modelItem = document.querySelectorAll('.model > div')
const rtArrow1 = document.querySelector(".btn1 > .btn_next");
const ltArrow1 = document.querySelector(".btn1 > .btn_pre");

rtArrow1.addEventListener("click", function () {
  moveSlide(macModel, modelItem, next);
})

ltArrow1.addEventListener("click", function () {
  moveSlide(macModel, modelItem, pre);
})



// slide 2

const accesItem = document.querySelectorAll('.accessory > div')
const rtArrow2 = document.querySelector(".btn2 > .btn_next");
const ltArrow2 = document.querySelector(".btn2 > .btn_pre");

rtArrow2.addEventListener("click", function () {
  moveSlide(macAccessory, accesItem, next);
})

ltArrow2.addEventListener("click", function () {
  moveSlide(macAccessory, accesItem, pre);
})



// slide 3

const conectItem = document.querySelectorAll('.connect > div')
const rtArrow3 = document.querySelector(".btn3 > .btn_next");
const ltArrow3 = document.querySelector(".btn3 > .btn_pre");

rtArrow3.addEventListener("click", function () {
  moveSlide(macConnect, conectItem, next);
})

ltArrow3.addEventListener("click", function () {
  moveSlide(macConnect, conectItem, pre);
})



// preBtn1.addEventListener("click", function () {
//   let shopping = getComputedStyle(moveShopping);
//   let marginLeft = parseInt(shopping.marginLeft);

//   if (marginLeft < 10) {
//     moveShopping.style.marginLeft = "461px";
//   }
//   if (marginLeft < -400) {
//     moveShopping.style.marginLeft = "0px";
//   }
//   if (marginLeft < -850) {
//     moveShopping.style.marginLeft = "-460px";
//   }
//   if (marginLeft < -1200) {
//     moveShopping.style.marginLeft = "-920px";
//   }
//   if (marginLeft < -1700) {
//     moveShopping.style.marginLeft = "-1380px";
//   }
//   if (marginLeft < -2200) {
//     moveShopping.style.marginLeft = "-1840px";
//   }
//   if (marginLeft < -2500) {
//     moveShopping.style.marginLeft = "-2300px";
//   }
// });

// let nextBtn2 = document.querySelector(".btn_wrap2 i:last-child"),
//   preBtn2 = document.querySelector(".btn_wrap2 i:first-child"),
//   moveAccessory = document.querySelector(".Accessory_wrap");

// nextBtn2.addEventListener("click", function () {
//   (acceCom = getComputedStyle(moveAccessory)),
//     (accMargin = parseInt(acceCom.marginLeft));

//   if (accMargin > -620) {
//     moveAccessory.style.marginLeft = "-900px";
//   }
//   if (accMargin > -350) {
//     moveAccessory.style.marginLeft = "-600px";
//   }
//   if (accMargin > -10) {
//     moveAccessory.style.marginLeft = "-300px";
//   }
//   if (accMargin > 450) {
//     moveAccessory.style.marginLeft = "0px";
//   }
// });

// preBtn2.addEventListener("click", function () {
//   (acceCom = getComputedStyle(moveAccessory)),
//     (accMargin = parseInt(acceCom.marginLeft));

//   if (accMargin > -920) {
//     moveAccessory.style.marginLeft = "-600px";
//   }
//   if (accMargin > -620) {
//     moveAccessory.style.marginLeft = "-300px";
//   }
//   if (accMargin > -400) {
//     moveAccessory.style.marginLeft = "0px";
//   }
//   if (accMargin > -10) {
//     moveAccessory.style.marginLeft = "460px";
//   }
// });

// let nextBtn3 = document.querySelector(".btn_wrap3 i:last-child"),
//   preBtn3 = document.querySelector(".btn_wrap3 i:first-child"),
//   moveConec = document.querySelector(".conect_wrap");

// nextBtn3.addEventListener("click", function () {
//   let conecCom = getComputedStyle(moveConec);
//   conecMargin = parseInt(conecCom.marginLeft);

//   if (450 < conecMargin) {
//     moveConec.style.marginLeft = "-80px";
//   }
// });

// preBtn3.addEventListener("click", function () {
//   let conecCom = getComputedStyle(moveConec),
//     conecMargin = parseInt(conecCom.marginLeft);

//   if (conecMargin < -75) {
//     moveConec.style.marginLeft = "461px";
//   }
// });
