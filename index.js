$(document).ready(function() {
    // Kill the loading screen quickly
    setTimeout(function() {
        $("#loading").addClass("animated fadeOut");
        setTimeout(function() {
            $("#loading").css("display", "none");
            // Reveal the content with a nice animation
            $("#hero-content").css("opacity", "1");
            $("#hero-content").addClass("animated fadeInUp");
        }, 600);
    }, 200); 
});

// Navigation background on scroll
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
        $("#header").addClass("nav-show");
    } else {
        $("#header").removeClass("nav-show");
    }
});

// Smooth scroll for anchors
$('a[href*="#"]').on('click', function(e) {
    var target = $(this.hash);
    if (target.length) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 70
        }, 800);
    }
});