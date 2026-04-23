$(document).ready(function() {
    // Hide the loader quickly
    setTimeout(function() {
        $("#loading").addClass("animated fadeOut");
        setTimeout(function() {
            $("#loading").css("display", "none");
            // Entrance animation for the main content
            $("#hero-content").addClass("animated fadeInUp");
        }, 600);
    }, 150); 
});

// Navigation background transition
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
        $("#header").addClass("nav-show");
    } else {
        $("#header").removeClass("nav-show");
    }
});

// Smooth scroll to sections with a slight offset for the header
$('a[href*="#"]').on('click', function(e) {
    var target = $(this.hash);
    if (target.length) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 80
        }, 800);
    }
});