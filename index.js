$(document).ready(function() {
    setTimeout(function() {
        $("#loading").addClass("animated fadeOut");
        setTimeout(function() { $("#loading").css("display", "none"); }, 600);
    }, 150);

    $(".collapsible").on("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
});

function luckySnippet() {
    const btnIcon = document.getElementById('lucky-icon');
    const viewer = document.getElementById('poem-viewer-container');
    const iframe = document.getElementById('poem-iframe');
    
    // Start spin animation
    btnIcon.classList.add('spinning');
    
    // Simulate "thinking" time for the spin
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 20) + 1;
        const pdfPath = `docs/snippet (${randomNum}).pdf`;
        
        // Stop spin, show viewer, and load PDF
        btnIcon.classList.remove('spinning');
        viewer.style.display = 'block';
        iframe.src = pdfPath;
        
        // Auto-scroll slightly so the viewer is in sight
        window.scrollBy({ top: 200, behavior: 'smooth' });
    }, 800);
}

// Smooth scroll
$('a[href*="#"]').on('click', function(e) {
    var target = $(this.hash);
    if (target.length) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: target.offset().top - 80 }, 800);
    }
});