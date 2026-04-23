$(document).ready(function() {
    // Hide loading screen
    setTimeout(function() { $("#loading").fadeOut(600); }, 150);

    // Collapsibles logic
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

// Lucky Snippet Logic (Pop-up)
function luckySnippet() {
    const icon = document.getElementById('lucky-icon');
    const modal = document.getElementById('poem-modal');
    const img = document.getElementById('poem-image');
    
    icon.classList.add('spinning');
    
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 20) + 1;
        // Make sure these are saved as PNGs in your docs folder
        img.src = `docs/snippet (${randomNum}).png`;
        
        img.onload = function() {
            icon.classList.remove('spinning');
            modal.style.display = "block";
            // Prevent background scrolling
            document.body.style.overflow = "hidden";
        };
    }, 800);
}

// Close Modal
function closePoem() {
    const modal = document.getElementById('poem-modal');
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Close if clicking outside the box
window.onclick = function(event) {
    const modal = document.getElementById('poem-modal');
    if (event.target == modal) {
        closePoem();
    }
}

// Smooth scroll
$('a[href*="#"]').on('click', function(e) {
    var target = $(this.hash);
    if (target.length) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: target.offset().top - 80 }, 800);
    }
});