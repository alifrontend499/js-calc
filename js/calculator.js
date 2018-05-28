
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


// CALCULATOR
(function() {
  let input = document.querySelector('.enter-data');
  let disData = document.querySelector('.display-data > span');
  let plusBtn = document.querySelector('.plus');
  let minusBtn = document.querySelector('.minus');
  let multiplyBtn = document.querySelector('.multiply');
  let devideBtn = document.querySelector('.devide');
  let equalBtn = document.querySelector('.equal');
  let value1, value2, calcMethod;

  // MAIN FUNCTION
  function dispData(sign, method) {
    let inpVal = input.value;
    disData.innerHTML = inpVal + " " + sign;
    value1 = inpVal;
    calcMethod = method;
    input.value = "";
  }

  // PLUS
  plusBtn.addEventListener('click', function(e) {
    e.preventDefault();
    dispData("+", "plus");
  });
  // MINUS
  minusBtn.addEventListener('click', function(e) {
    e.preventDefault();
    dispData("-", "minus");
  });
  // MULTIPLY
  multiplyBtn.addEventListener('click', function(e) {
    e.preventDefault();
    dispData("*", "multiply");
  });
  // DEVIDE
  devideBtn.addEventListener('click', function(e) {
    e.preventDefault();
    dispData("/", "devide");
  });
  // EQUALBTN
  equalBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if(input.value !== "") {
      let inpVal = input.value;
      value2 = inpVal;
      let finalData = calcs(value1, value2, calcMethod);
      disData.innerHTML = finalData;
      input.value = "";
    } else {
      value1 = 0;
      value2 = 0;
      calcMethod = "no_value";
      let finalData = calcs(value1, value2, calcMethod);
      disData.innerHTML = finalData;
    }
  });

  // ALL CALCULATOINS
  function calcs(val1, val2, method) {
    if(method !== undefined) {
      if(method == "plus") {
        let finalVal = parseInt(val1) + parseInt(val2);
        return val1 + " + " + val2 + " = " + finalVal;
      }
      if(method == "minus") {
        let finalVal = parseInt(val1) - parseInt(val2);
        return val1 + " - " + val2 + " = " + finalVal;
      }
      if(method == "multiply") {
        let finalVal = parseInt(val1) * parseInt(val2);
        return val1 + " * " + val2 + " = " + finalVal;
      }
      if(method == "devide") {
        let finalVal = parseInt(val1) / parseInt(val2);
        return val1 + " / " + val2 + " = " + finalVal;
      }
      if(method == "no_value") {
        return "Please enter values";
      }
    }
  }
})();
