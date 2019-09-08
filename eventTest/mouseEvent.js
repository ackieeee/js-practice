(function () {
  const stage = document.getElementsByClassName('mouseEventStage')[0];
  const log = document.getElementById('log');


  /**
   * マウスボタンを押したとき
   */
  stage.addEventListener('mousedown', (event) => {
    log.innerHTML = 'mouse down';
    console.log(`mousedown  x:${event.clientX}, y:${event.clientY}`)
  })
  /**
   * マウスボタンを押した状態から戻したとき
   */
  stage.addEventListener('mouseup', (event) => {
    log.textContent = 'mouse up';
    console.log(`mouseup  x:${event.clientX}, y:${event.clientY}`)
  })
  /**
   * マウスを動かしたとき
   */
  stage.addEventListener('mousemove', (event) => {
    log.textContent = 'mouse move';
    // console.log(`mousemove  x:${event.clientX}, y:${event.clientY}`)
  })
}());