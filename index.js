$(document).ready(function() {
    // Hide loader
    setTimeout(function() { $("#loading").fadeOut(600); }, 150);

    // Collapsibles
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
    const container = document.getElementById('poem-display-container');
    const img = document.getElementById('poem-image');
    
    icon.classList.add('spinning');
    
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 20) + 1;
        // Ensure you have snippet (1).png through snippet (20).png in your docs folder
        img.src = `docs/snippet (${randomNum}).png`;
        
        img.onload = function() {
            icon.classList.remove('spinning');
            container.style.display = 'block';
            
            // Adjust the writing section's height to fit the new image
            const parent = container.closest('.content');
            parent.style.maxHeight = (parent.scrollHeight + 600) + "px";
        };
    }, 800);
}

function closePoem() {
    const container = document.getElementById('poem-display-container');
    container.style.display = 'none';
}

// Smooth scroll logic
$('a[href*="#"]').on('click', function(e) {
    var target = $(this.hash);
    if (target.length) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: target.offset().top - 80 }, 800);
    }
});