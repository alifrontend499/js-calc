
window.onload = function(e){
    var calc_input, btn, inputData;
    calc_input = document.getElementById('calc_input');
    btn = document.querySelectorAll('label');

    // loop through labels
    for (var i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', actionPerform);
    }

    function actionPerform(e) {
      e.preventDefault();
      inputData = this.firstElementChild.value;
      calc_input.value += inputData;
    }

    function plus () {

    }
    function minus () {

    }
    function multiply () {

    }
    function devide () {

    }
    function equal () {

    }
}
