const items = document.querySelectorAll('.img-item');
// for文
for(let i = 0; i < items.length; i++){

    const keyframes = {
      opacity: [0, 1],
      translate: ['0 50px', 0],
      filter: ['blur(50px)', 'blur(0)'],
    };
    
    const options = {
      duration: 650,
      delay: i * 400,
      fill: 'forwards',
    };
  
    items[i].animate(keyframes, options);
  }


  // フェード
const title2 = document.querySelector('.title2');

const title2Keyframes = {
  opacity: [0, 1],
}

const title2Options = {
  duration: 3000,
  easing: 'ease',
  fill: 'forwards',
}

title2.animate(title2Keyframes, title2Options);