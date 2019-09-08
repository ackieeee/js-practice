(function () {
  const stage = document.getElementsByClassName('mouseOverEventStage')[0];

  stage.addEventListener('mouseenter', () => {
    console.log('mouse enter');
  })
  stage.addEventListener('mouseleave', () => {
    console.log('mouse leave');
  })
}())