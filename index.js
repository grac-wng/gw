$(document).ready(function() {
    // Loader
    setTimeout(function() {
        $("#loading").fadeOut(600);
    }, 150);

    // Collapsible Subsections
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

function luckySnippet() {
    const icon = document.getElementById('lucky-icon');
    const viewer = document.getElementById('poem-viewer-container');
    const iframe = document.getElementById('poem-iframe');
    
    // Start spin
    icon.classList.add('spinning');
    
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 20) + 1;
        // The path must match your folder: docs/snippet (X).pdf
        const pdfPath = `docs/snippet (${randomNum}).pdf`;
        
        icon.classList.remove('spinning');
        viewer.style.display = 'block';
        iframe.src = pdfPath;
        
        // Open parent container height so the iframe isn't cut off
        const parentContent = viewer.closest('.content');
        parentContent.style.maxHeight = parentContent.scrollHeight + 600 + "px";
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