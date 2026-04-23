var width = $(window).width(); 

// 1. snappy loading screen logic
$(document).ready(function() {
    // We wait just 100ms so the navy background has time to "set"
    setTimeout(function() {
        $("#loading").addClass("animated fadeOut");
        setTimeout(function() {
            $("#loading").css("display", "none");
            $("#loading").removeClass("animated fadeOut");
            
            // manually trigger the entrance animations for your bio/header
            // since removed them from the HTML for better control
            $("#about").addClass("animated slideInLeft");
            $("#header").addClass("animated slideInDown");
        }, 800);
    }, 100); 
});

// 2. navigation scroll effect
window.onscroll = function(){
    if (width >= 1000) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $("#header").addClass("nav-show");
        } else {
            $("#header").removeClass("nav-show");
        }
    }
}

// 3. image magnification
function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#img_here").css("background-size", "contain");
    $("#img_here").css("background-repeat", "no-repeat");
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    }, 800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    }, 800);
}

// 4. smooth scrolling for navigation
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('body,html').animate({
                scrollTop: $(hash).offset().top - 80 // offset for fixed header
            }, 1000); // reduced from 1800ms for a more modern feel
        } 
    });
});