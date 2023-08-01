# 🎇목차

1. [💻프로젝트 소개](#-프로젝트-소개)
2. [🧾 code review](#-code-review)
   - [재사용을 고려한 image slide 이벤트](#재사용을-고려한-image-slide-이벤트)
   - [sub menu slide](#sub-menu-slid)
   - [load event](#load-event)

<br />

## 💻 프로젝트 소개

<div align="center">
  
   <img src="https://github.com/future9061/apple_mac_shopping/assets/132829711/2a634acc-b32b-4bec-9bd0-274e42f72139">

/_ url 넣기 _/

   <p align="start">
    애플 클론 코딩을 한 프로젝트입니다. 슬라이드가 여러 부분에서 활용되기 때문에 재사용을 고려한 함수를 만들어 적용 했습니다.
   </p>
</div>

<br />

## 🧾 code review

<br />

#### 재사용을 고려한 slide image slide 이벤트

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

<details><summary> Click! 버튼을 빠르게 클릭 시 함수가 여러 번 호출 되면서 슬라이드에 문제가 생겼다.
</summary>
이런 경우 함수 실행중인지 여부에 따라 실행중에는 click 이벤트를 막는 함수를 이용하는 듯 했다.
</details>
  이런 경우 함수 실행 도중인지를 판단하는 변수를 만들어 실행 도중에는 함수를 return해 실행을 막는 방법을 주로 쓰는 것 같았다.
  
 
  //marginLeftValue === -(itemWidth * i) 마진과 이동값인 width가 같아야지만 이동하게 조건 걸어줌

<br />

#### sub menu slide

>

1.

```javascript

```

<br />

#### load event

>

```javascript

```

<br />
