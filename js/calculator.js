
window.onload = function(e){
    var main_input = document.querySelectorAll('label');
    
    Array.from(main_input).forEach(function(name){
       name.addEventListener('click',function(){
          alert('name'); 
       });
    });
}