/**
 * イベントを一回のみ実行したい
 */

/**
 * @param {HTMLElement} button
 */
const button = document.getElementById('button');
console.log(button)

/**
 * click event function
 * @return {void}
 */
const clickEvent = () => {
  console.log('click event');
}

// onceオプションを加えることで1回のみイベントを実行することができる
button.addEventListener('click', clickEvent, { once: true });
