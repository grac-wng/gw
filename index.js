$(document).ready(function() {
    // Reveal site almost immediately
    setTimeout(function() {
        $("#loading").addClass("animated fadeOut");
        setTimeout(function() {
            $("#loading").css("display", "none");
            // Trigger bio animation
            $("#hero-content").addClass("animated fadeInUp");
        }, 600);
    }, 150); 
});

// Navigation background shift
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
        $("#header").addClass("nav-show");
    } else {
        $("#header").removeClass("nav-show");
    }
});

// Smooth scroll to anchors
$('a[href*="#"]').on('click', function(e) {
    var target = $(this.hash);
    if (target.length) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 80
        }, 800);
    }
});