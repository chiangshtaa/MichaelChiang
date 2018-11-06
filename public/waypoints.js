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
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('li').on('click', function (e) {
        console.log('hereeee');
        e.preventDefault();
        $(document).off("scroll");
        
        // $('li').each(function () {
        //     $(this).removeClass('active');
        // })
        // $(this).addClass('active');
        // console.log('this', this, this.id);
        // // let target = this.id;
        // var target = this.id.slice(0, -4);
        // let realTarget = target.slice(0, -4);
        // console.log('target', target);
        // let $target = $('#' + target);
        // console.log('$target', $target);
        // smoothScrollTo(realTarget, 1000).done(after());
        // $('li').removeClass('active');
        // $target.addClass('active');




        console.log('this', this);
        let target = this.id;
        console.log('target', target);
        let $target = $('#' + target.slice(0, -4));

        let targetPage = $('#' + target);
        console.log('page', targetPage);

        console.log('$target', $target);
        console.log('top', $target.offset().top);
        $('html, body').animate({
            'scrollTop': $target.offset().top + 2
        }, 1000, function () {
            // window.location.hash = '#' + target.slice(0, -4);
            $(document).on("scroll", onScroll);
        });
        $('li').removeClass('active');
        targetPage.addClass('active');

    });
});

let diff = $(window).height() / 2;
// console.log(diff);

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    // console.log(scrollPos);
    $('.scroll').each(function (hello, e) {
        // console.log('this', this);
        let targetPage = '#' + this.id + 'Page';
        // console.log('targetPage', targetPage);
        let realTarget = $(targetPage);
        let target = $(this)//.offset().top;
        // console.log('target', target);
        if (target.position().top - diff <= scrollPos && target.position().top + target.height() > scrollPos) {
            $('.nav li').removeClass("active");
            realTarget.addClass("active");
        }
        // else{
        //     realTarget.removeClass("active");
        // }
    });
}


function smoothScrollTo(target, duration, callback) {
  var r = $.Deferred();
  console.log('target HERERHRE', target);
  // let targetElement = document.querySelector('#' + target);
  let targetElement = document.getElementById(target);
  // let targetPosition = targetElement.getBoundingClientRect().top;
  let targetPosition = targetElement.offsetTop;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;
  console.log('target', targetElement);
  console.log('targetPos', targetPosition);

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    // console.log('run', run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
  return r;
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

    // window.scroll(function() {
    //     console.log('IHNSIDE');
    //     var position = this.scrollTop();

    //     let sections = document.getElementsByClassName('scroll');
    //     console.log(sections);
    //     sections.each(function() {
    //         var target = this.offset().top;
    //         var id = this.attr('id');

    //         let next = document.getElementsByClassName('active');
    //         let others = document.querySelector('.nav > li > a[href=#' + id + ']');
    //         if (position >= target) {
    //             next.removeClass('active');
    //             others.addClass('active');
    //         }
    //     });
    // });