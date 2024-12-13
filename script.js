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