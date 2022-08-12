  const sec = document.querySelectorAll('.section');
  const secCount = sec.length;
  console.log(sec); //nodeList
  console.log(secCount); // 6

  // sec.forEach(function(item, index){
  //   item.addEventListener('mousewheel', function(event){
  //     event.preventDefault();
  //     let delta = 0;

  //     if (!event) event = window.event;
  //     if (event.wheelDelta) {
  //         delta = event.wheelDelta / 120;
  //         if (window.opera) delta = -delta;
  //     } 
  //     else if (event.detail)
  //         delta = -event.detail / 3;

  //     let moveTop = window.scrollY;
  //     let secSelector = sec[index];

  //     // wheel down : move to next section
  //     if (delta < 0){
  //       if (secSelector !== secCount-1){
  //         try{
  //           moveTop = window.pageYOffset + secSelector.nextElementSibling.getBoundingClientRect().top;
  //         }catch(e){}
  //       }
  //     }
      
  //     // wheel up : move to previous section
  //     else{
  //       if (secSelector !== 0){
  //         try{
  //           moveTop = window.pageYOffset + secSelector.previousElementSibling.getBoundingClientRect().top;
  //         }catch(e){}
  //       }
  //     }

  //     const body = document.querySelector('html');
  //     window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
  //   });
  // });
