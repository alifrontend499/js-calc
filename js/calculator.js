
window.onload = function() {
  var plus, minus, devide, multiply, equal, dot;
  plus = document.querySelector('.plus');
  minus = document.querySelector('.minus');
  devide = document.querySelector('.devide');
  multiply = document.querySelector('.multiply');
  equal = document.querySelector('.equal');

  var test = document.querySelector('.test');
  var mainInp = document.querySelector('#calc_input');
  var valBtn = document.querySelectorAll('.main_input');
  var mainVal1 = "";
  var mainVal2 = "";


  valBtn.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
      e.preventDefault();
      var curVal = this.children[1].innerText;
      mainInp.value += curVal;
    });
  });

  if (plus !== null) {
    plus.addEventListener('click', function(e) {
      test.innerHTML = 'Plus';
    });
  }
  if (minus !== null) {
    minus.addEventListener('click', function(e) {
      test.innerHTML = 'Minus';
    });
  }
  if (multiply !== null) {
    multiply.addEventListener('click', function(e) {
      test.innerHTML = 'Multiply';
    });
  }
  if (devide !== null) {
    devide.addEventListener('click', function(e) {
      test.innerHTML = 'Devide';
    });
  }
  if (equal !== null) {
    equal.addEventListener('click', function(e) {
      test.innerHTML = 'Equal';
    });
  }
}
