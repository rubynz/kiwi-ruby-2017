/**
 * JavaScript goes here
 */

var body = document.body;
var mobileNavContainer = document.querySelector('.nav--mobile');
var mobileNavTrigger = document.querySelector('.nav--mobile__show');

function bodyClickHandler(event) {
  var trigger = event.target;
  if (trigger == mobileNavTrigger) {return;}
  closeMenu();
}
function openMenu () {
  mobileNavContainer.classList.add('active');
  body.addEventListener('click', bodyClickHandler);
}
function closeMenu () {
  mobileNavContainer.classList.remove('active');
  body.removeEventListener('click', bodyClickHandler);
}

mobileNavTrigger.addEventListener('click', function(e){
  e.preventDefault();
  mobileNavContainer.classList.contains('active') ? closeMenu() : openMenu();
});
