$(document).ready(function() {
    // Immediate removal of loader
    setTimeout(function() {
        $("#loading").addClass("animated fadeOut");
        setTimeout(function() {
            $("#loading").css("display", "none");
        }, 600);
    }, 150); 
});

// Smooth scroll
$('a[href*="#"]').on('click', function(e) {
    var target = $(this.hash);
    if (target.length) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 50
        }, 800);
    }
});