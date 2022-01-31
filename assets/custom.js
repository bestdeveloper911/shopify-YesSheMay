$(document).ready(function() {
  popupInit();
  megamenu();
})

function popupInit() {
  $(document).on('click', '[data-popup-open]', function() {
    var handle = $(this).attr('data-popup-open');
    var $popup = $('[data-popup="' + handle + '"]');
    $popup.show();
    $('body').addClass('popup-open');
    setTimeout(function() {
      $popup.addClass('open');
    })
  })
  $(document).on('click', '[data-popup-close]', function() {
    var $popup = $(this).closest('[data-popup]');
    $popup.removeClass('open');
    setTimeout(function() {
      $popup.hide();
      $('body').removeClass('popup-open');
    }, 300);
  })
}

function megamenu() {
  $(".mob-menu-back").click(function() {
    var $parent = $(this).closest('li.navmenu-item.navmenu-item-parent');
    $parent.find('.navmenu-link.navmenu-link-parent').removeClass('navmenu-link-parent-active').attr('aria-expanded', 'false');
    $parent.find('button.navmenu-button').attr('aria-expanded', 'false');
    $parent.find('.navmenu-submenu.navmenu-meganav').removeClass('visible');
  })
}