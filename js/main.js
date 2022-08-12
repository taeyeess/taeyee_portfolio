let typeText = document.querySelector(".logo")
let textToBeTyped = "EHOI CODE"
let textIndex = 0, isAdding = true
 
function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of
    // the textToBeTyped using textIndex.
    typeText.innerText = textToBeTyped.slice(0, textIndex);
    if (isAdding) {
      // adding text
      if (textIndex > textToBeTyped.length) {
        // no more text to add
        isAdding = false
        // break: wait 2s before playing again
        // setTimeout( function () {
        //   playAnim()
        // }, 2000)
        return
      } else {
        // increment textIndex by 1
        textIndex++
      }
     }// else {
    //   // removing text
    //   if (textIndex === 0) {
    //     // no more text to remove
    //     isAdding = true
    //   } else {
    //     // decrement textIndex by 1
    //     textIndex--
    //   }
    // }
    // call itself
    playAnim()
  }, 100)
}
// 타이핑 스크립트 호출
setTimeout(playAnim, 1000)
