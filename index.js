$(document).ready(function() {
    // Page Loader
    setTimeout(function() { $("#loading").fadeOut(600); }, 150);

    // Accordion Logic
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
    const modal = document.getElementById('poem-modal');
    const img = document.getElementById('poem-image');
    
    // Start spin
    icon.classList.add('spinning');
    
    // Pick random index (1-20)
    const randomNum = Math.floor(Math.random() * 20) + 1;
    const targetSrc = `docs/snippet (${randomNum}).png`;
    
    // Logic: Try to load the image. If it loads, show modal.
    // If it takes too long or fails, we'll force show it anyway.
    let imgCheck = new Image();
    imgCheck.src = targetSrc;
    
    imgCheck.onload = function() {
        img.src = targetSrc;
        icon.classList.remove('spinning');
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    };

    imgCheck.onerror = function() {
        console.error("Failed to load: " + targetSrc);
        icon.classList.remove('spinning');
        alert("oops—couldn't find that snippet in your docs folder.");
    };
}

function closePoem() {
    document.getElementById('poem-modal').style.display = "none";
    document.body.style.overflow = "auto";
}

// Close on outside click
window.onclick = function(event) {
    const modal = document.getElementById('poem-modal');
    if (event.target == modal) { closePoem(); }
}

// Smooth Anchor Scrolling
$('a[href*="#"]').on('click', function(e) {
    var target = $(this.hash);
    if (target.length) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: target.offset().top - 80 }, 800);
    }
});