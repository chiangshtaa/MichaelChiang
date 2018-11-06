// const $ = require('jQuery');

// $(window).scroll(function() {
//     var position = $(this).scrollTop();
//     // console.log('here');
//     console.log('position', position);
//     $('.scroll').each(function() {
//         // let id = this.id;
//         // let target = id.offsetTop;
//         var target = $(this).offset().top;
//         var id = this.id;
//         console.log()
//         // console.log(id);
//         if (position >= target) {
//             $('.nav > li').removeClass('active');
//             // $('.nav > li > a[href=#' + id + ']').addClass('active');
//             $('#' + id).addClass('active');
//         }
//     });
// });

$(document).ready(function () {
  $(document).on('scroll', onScroll);
  
  //smooth scroll
  $('.nav li').on('click', function(e) {
    e.preventDefault();
    $(document).off('scroll');
    
    let id = this.id;
    let $target = $('#' + id.slice(0, -4));

    let $targetMenu = $('#' + id);
    $('html, body').animate({
      'scrollTop': $target.offset().top + 2
    }, 1000, function () {
      // window.location.hash = '#' + target.slice(0, -4);
      $(document).on('scroll', onScroll);
    });
    $('.nav li').removeClass('active');
    $targetMenu.addClass('active');

  });
});

let diff = $(window).height() / 2;

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.scroll').each(function() {
    let $target = $(this);
    let targetMenu = '#' + this.id + 'Menu';
    let $targetMenu = $(targetMenu);
    if ($target.position().top - diff <= scrollPos && $target.position().top + $target.height() > scrollPos) {
      $('.nav li').removeClass('active');
      $targetMenu.addClass('active');
    }
  });
}


function smoothScrollTo(target, duration) {
  // let targetElement = document.querySelector('#' + target);
  let targetElement = document.getElementById(target);
  // let targetPosition = targetElement.getBoundingClientRect().top;
  let targetPosition = targetElement.offsetTop;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}


// function onScroll(event) {
//     var position = $(this).scrollTop();
//     console.log('position on scroll', position);

//     $('.scroll').each(function() {
//         console.log('this', this);
//         var target = $(this).offset().top;
//         var id = this.id + 'Page';

//         if (position >= target) {
//             $('.nav > li').removeClass('active');
//             // $('.nav > li > a[href=#' + id + ']').addClass('active');
//             $('#' + id).addClass('active');
//         }
//     });
// }