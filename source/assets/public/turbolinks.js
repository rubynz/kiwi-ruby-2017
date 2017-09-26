var Turbolinks = require('turbolinks');
Turbolinks.start();

function afterTurbolinksLoad () {

  // Re-initialise the menu
  if (window.mobileMenu) {
    window.mobileMenu();
  }

  // Record Google Analytics pageviews
  if (window.ga) {
    window.ga('send', 'pageview');
  }

}

document.addEventListener('turbolinks:load', afterTurbolinksLoad);
