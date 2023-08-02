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

//slide

const next = false;
const pre = true;


const moveSlide = (wrap, item, pre) => {

  const marginLeftValue = parseInt(window.getComputedStyle(wrap).marginLeft); // 요소의 ml값
  const itemWidth = item[0].offsetWidth; // slide가 움직여야 하는 값
  const itemTotalWidth = itemWidth * (item.length - 2); // item의 총 ml 이동값


  if (!pre) {
    for (let i = 0; i < item.length; i++) {
      if (marginLeftValue === -(itemWidth * i) && marginLeftValue > -itemTotalWidth) {
        wrap.style.marginLeft = `-${itemWidth + (itemWidth * i)}px`;
      }
    }
  }
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



//반응형 side menu

const burger = document.querySelector('.burger_wrap');
const sideMenu = document.querySelector('.respons-menu');
const close = document.querySelector('.respons-inner i');

burger.addEventListener('click', function () {
  sideMenu.classList.add('show')
})

close.addEventListener('click', function () {
  sideMenu.classList.remove('show')
})