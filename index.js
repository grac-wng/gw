$(document).ready(function() {
    // Reveal site
    setTimeout(function() {
        $("#loading").addClass("animated fadeOut");
        setTimeout(function() { $("#loading").css("display", "none"); }, 600);
    }, 150);

    // Collapsible Logic
    $(".collapsible").on("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// Random PDF logic
function luckySnippet() {
    // Generate random number between 1 and 20
    const randomNum = Math.floor(Math.random() * 20) + 1;
    
    // Construct path to your docs folder
    const pdfPath = `docs/snippet (${randomNum}).pdf`;
    
    // Open in a new tab
    window.open(pdfPath, '_blank');
}

// Smooth scroll
$('a[href*="#"]').on('click', function(e) {
    var target = $(this.hash);
    if (target.length) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 80
        }, 800);
        
        var collapsible = target.find('.collapsible');
        if (collapsible.length && !collapsible.hasClass('active')) {
            collapsible.click();
        }
    }
});