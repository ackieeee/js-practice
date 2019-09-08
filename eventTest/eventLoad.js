const domLoadEvent = () => {
  const boxNum = document.getElementsByClassName('box');
  console.log(boxNum.length);
}

// window.addEventListener('DOMContentLoaded', domLoadEvent)
window.addEventListener('load', domLoadEvent)