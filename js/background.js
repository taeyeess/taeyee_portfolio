// 별을 추가할 요소
const $main = document.querySelector("#main"); 
const $sky = document.querySelector(".sky");

// 브라우저 창의 가로, 세로 중 가장 큰 크기
const maxSize = Math.max($main.innerWidth, $main.innerHeight);

// 랜덤한 X 위치 값
const getRandomX = () => Math.random() * maxSize;

// 랜덤한 Y 위치 값
const getRandomY = () => Math.random() * maxSize;

// 랜덤한 크기 (circle는 반지름이 크기)
const randomRadius = () =>  Math.random() * 0.7 + 0.6;

const makeStars = () => {
    // 임의의 값
    const _size = Math.floor(maxSize / 2);
    
    const htmlDummy = new Array(_size).fill().map((_, i) => {
      return  `<circle class='star'
        cx=${getRandomX()}
        cy=${getRandomY()}
        r=${randomRadius()}
        className="star" />`
    }).join('');
    
    $sky.innerHTML = htmlDummy;
  }