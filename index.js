$(document).ready(function() {
    // Reveal site once loaded
    setTimeout(function() {
        $("#loading").fadeOut(600);
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

function luckySnippet() {
    const icon = document.getElementById('lucky-icon');
    const viewer = document.getElementById('poem-viewer-container');
    const iframe = document.getElementById('poem-iframe');
    
    // Clear previous source to force a refresh and start spin
    iframe.src = "";
    icon.classList.add('spinning');
    
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 20) + 1;
        const pdfPath = `docs/snippet (${randomNum}).pdf`;
        
        icon.classList.remove('spinning');
        viewer.style.display = 'block';
        iframe.src = pdfPath;
        
        // Adjust the container height so it doesn't clip
        const parentContent = viewer.closest('.content');
        if (parentContent) {
            parentContent.style.maxHeight = (parentContent.scrollHeight + 650) + "px";
        }
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