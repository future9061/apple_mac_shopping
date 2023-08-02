# 🎇목차

1. [💻프로젝트 소개](#-프로젝트-소개)
2. [🧾 code review](#-code-review)
   - [재사용을 고려한 image slide 이벤트](#재사용을-고려한-image-slide-이벤트)
   - [sub menu slide](#sub-menu-slide)
   - [load event](#load-event)
3. [✅ 프로젝트 리뷰](#-프로젝트-리뷰)
   <br />

## 💻 프로젝트 소개

<div align="center">
  
   <img src="https://github.com/future9061/apple_mac_shopping/assets/132829711/2a634acc-b32b-4bec-9bd0-274e42f72139">

  https://future9061.github.io/apple_mac_shopping/

   <p align="start">
    애플 클론 코딩을 한 프로젝트입니다. 슬라이드가 여러 부분에서 활용되기 때문에 재사용을 고려한 함수를 만들어 적용 했습니다.
   </p>
</div>

<br />

## 🧾 code review

<br />

#### 재사용을 고려한 image slide 이벤트

> btn을 클릭하면 img[0].width 만큼 marginLeft로 이동하는 img slide.

1. moveSlide 함수에 파라미터로 해당 슬라이드의 container, item, btn toggle 값을 받는다.
2. 함수 내에서 container의 marginLeft 값, item의 width 값을 산출한다.
3. next btn 클릭 시 item의 width 값이 container의 marginLeft에 적용된다.
4. pre btn 클릭 시 함수 세번째 인자인 btn toggle은 true로 적용되며 next btn이벤트에서 적용된 marginLeft 값을 가져와 이동한다.

```javascript
const next = false;
const pre = true;

const moveSlide = (wrap, item, pre) => {
  const marginLeftValue = parseInt(window.getComputedStyle(wrap).marginLeft); //string으로 나와 parseInt 적용
  const itemWidth = item[0].offsetWidth;
  const itemTotalWidth = itemWidth * (item.length - 3); // 최종적으로 이동할 ml 값을 임의로 정함

  if (!pre) {
    for (let i = 0; i < item.length; i++) {
      if (
        marginLeftValue === -(itemWidth * i) &&
        marginLeftValue > -itemTotalWidth
      ) {
        wrap.style.marginLeft = `-${itemWidth + itemWidth * i}px`;
      }
    }
  }

  if (pre) {
    for (let i = 0; i < item.length; i++) {
      if (marginLeftValue < 0 && marginLeftValue === -(itemWidth * i)) {
        wrap.style.marginLeft = `${marginLeftValue + itemWidth}px`;
      }
    }
  }
};

//함수 실행
const container = document.querySelectorAll(".wrap");
const IItem = document.querySelectorAll(".item");
const rtArrow = document.querySelector(".btn_next");
const ltArrow = document.querySelector(".btn_pre");

rtArrow.addEventListener("click", function () {
  moveSlide(container, Item, next);
});

ltArrow.addEventListener("click", function () {
  moveSlide(container, Item, pre);
});
```

<details><summary> Click❗ 버튼을 빠르게 클릭 시 함수가 여러 번 호출 되면서 슬라이드에 문제가 생겼다.
</summary>
   ml로만 이동하는 슬라이드이기 때문에 ml은 무조건 0 이하의 음수인데 pre 버튼을 빠르게 누르면 함수가 중복 실행되면서 ml이 양수가 되어 버리고 btn이 작동하지 않는다. <br />
   조건으로 ( marginLeftValue === -(itemWidth * i) ) ml이 itemwidth 값과 같을 때만 이동하게 해서 <br />
   빠르게 클릭해도 ml이 기존과 다르게 양수가 되버리는 문제를 해결했다.
</details>

<br />

#### sub menu slide

> main menu에 마우스를 올리면 sub menu가 내려오는 이벤트

1. for문으로 서로의 e.target.id와 sub menu의 id가 같을 때만 class를 추가해준다.
2. 중요한 부분은 중첩 for문을 쓰는데 서브 메뉴의 class를 모두 지운 다음에 e.target의 메뉴에만 클라스를 주는 것이다.

```javascript
const mainMenu = document.querySelectorAll(".main-header ul li");
const subMenu = document.querySelectorAll(".sub");

mainMenu.forEach((elem, idx) => {
  elem.addEventListener("mouseenter", function (e) {
    for (let i = 0; i <= mainMenu.length - 1; i++) {
      subMenu[i].classList.remove("sub-show");
    }

    if (e.target.id === subMenu[idx].id) {
      subMenu[idx].classList.add("sub-show");
    }
  });

  subMenu[idx].addEventListener("mouseleave", function () {
    subMenu[idx].classList.remove("sub-show");
  });
});
```

<br />

#### load event

> 페이지가 load되면 배녀의 색깔이 바뀌는 이벤트.

```javascript
const loadEvent = document.querySelector(".load_event");
const spanEle = document.querySelector(".load_event span");

window.addEventListener("load", function () {
  loadEvent.style.transform = "translateY(0)";
  this.setTimeout(function () {
    loadEvent.classList.add("color-change");
  }, 1000);
});
```

<br />

### ✅ 프로젝트 리뷰

이번 프로젝트를 만들면서 이상한 문제가 생겼었다. <br >
local에선 잘 보이는 background-image가 배포만 하면 안 보이는 것이다. <br >

<img src="https://github.com/future9061/apple_mac_shopping/assets/132829711/93f8304d-f9ce-47a4-baa4-20deecf11453" width="300">
<img src="https://github.com/future9061/apple_mac_shopping/assets/132829711/944dbbe9-829d-4963-afe9-9d08c7093858" width="300">

live server에서는 잘 보였으니 경로 문제라고는 생각 못해서 background 축약형을 잘 못 쓰거나 div 크기 지정을 잘못했나 싶었는데 경로를 잘못 지정한게 맞았다.

참고한 게시물

https://velog.io/@dlehdus97/github-pages-%EB%B0%B0%ED%8F%AC%EC%8B%9C-img-audio-%EA%B2%BD%EB%A1%9C-%EC%84%A4%EC%A0%95
