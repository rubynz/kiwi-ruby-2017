/**
 * JavaScript goes here
 */
$(document).ready(function () {
  mobileNav();
});

function hide ($element) {
  $($element).hide(200);
  $($element).removeClass('active');
}

function mobileNav () {
  var $mobileNav = $('.nav--mobile');

  $('.nav--mobile__show').click(function () {
    if ( $mobileNav.hasClass('active') ) {
      hide($mobileNav);
      return;
    }

    $mobileNav.addClass('active');
    $mobileNav.show(200);
  });

  $('body').click(function (event) {
    if (!$mobileNav.hasClass('active')) { return; }
    if ($(event.target).is('.nav--mobile__show') || $(event.target).parent().is('.nav--mobile__show')) { return; }

    $($mobileNav).removeClass('active');
    hide($mobileNav);
  });
}
