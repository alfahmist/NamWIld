var nav = document.getElementsByTagName('nav');
var position = $(window).scrollTop(); 


// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
        console.log('scrollDown');
        nav[0].classList.add('scroll');
    } else {
         console.log('scrollUp');
         nav[0].classList.remove('scroll')
    }
    position = scroll;
});