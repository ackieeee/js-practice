(function() {
  var form = document.getElementsByClassName('form-control');
  var clearBtn = document.getElementsByClassName('clear-btn');

  Array.prototype.forEach.call(clearBtn, function(elem, index) {
    clearBtn.item(index).addEventListener('click', function() {
      form.item(index).value = "";
    })
  })
}())
