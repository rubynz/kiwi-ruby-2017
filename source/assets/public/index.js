/**
 * JavaScript goes here
 */
function mobileMenu() {
  var NAV_ACTIVE_CLASS = 'js-active';
  var body = document.body;
  var mobileNavContainer = document.querySelector('#menu');
  var mobileNavTrigger = document.querySelector('.nav--mobile__show');

  function bodyClickHandler(event) {
    var trigger = event.target;
    if (trigger == mobileNavTrigger) {return;}
    closeMenu();
  }
  function openMenu () {
    mobileNavContainer.classList.add(NAV_ACTIVE_CLASS);
    body.addEventListener('click', bodyClickHandler);
  }
  function closeMenu () {
    mobileNavContainer.classList.remove(NAV_ACTIVE_CLASS);
    body.removeEventListener('click', bodyClickHandler);
  }

  mobileNavTrigger.addEventListener('click', function(e) {
    e.preventDefault();
    mobileNavContainer.classList.contains(NAV_ACTIVE_CLASS) ? closeMenu() : openMenu();
  });
}
window.mobileMenu = mobileMenu;
