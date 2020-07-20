//* JQuery for smooth scrolling on click for a button */
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
// On-page links
if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 1000); 
    }
}
});

//* Jquery for mobile navagation */
//* Adding and removing classes based on the click 
//* that happens to have mobile nav fade in or out as well
//* as lock scolling behind the menu */
$('.hamburger').on('click', () => {
    if ($('.main-nav').hasClass('open')) {
        $('.main-nav').removeClass('open');
        $('.main-nav li').removeClass('fade');
        $('body').removeClass('lock-scroll');
    }
    else {
        $('.main-nav').addClass('open');
        $('.main-nav li').addClass('fade');
        $('body').addClass('lock-scroll');
    }
});

$('.main-nav a').on('click', () => {
    $('.main-nav').removeClass('open');
    $('.main-nav li').removeClass('fade');
    $('body').removeClass('lock-scroll');
});