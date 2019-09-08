const stage = document.getElementsByClassName('mouseEventStage')[0];
const log = document.getElementById('log');

/**
 * マウスボタンを押したとき
 */
stage.addEventListener('mousedown', () => {
  log.innerHTML = 'mouse down';
})
/**
 * マウスボタンを押した状態から戻したとき
 */
stage.addEventListener('mouseup', () => {
  log.textContent = 'mouse up';
})
/**
 * マウスを動かしたとき
 */
stage.addEventListener('mousemove', () => {
  log.textContent = 'mouse move';
})