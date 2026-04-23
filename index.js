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

    // Smooth Anchor Scrolling
    $('a[href*="#"]').on('click', function(e) {
        var target = $(this.hash);
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: target.offset().top - 80 }, 800);
        }
    });
});

function luckySnippet() {
    const icon = document.getElementById('lucky-icon');
    const modal = document.getElementById('poem-modal');
    const img = document.getElementById('poem-image');
    
    icon.classList.add('spinning');
    const randomNum = Math.floor(Math.random() * 20) + 1;
    const targetPath = "docs/snippet (" + randomNum + ").png";
    
    const tempImg = new Image();
    tempImg.src = targetPath;
    tempImg.onload = function() {
        img.src = targetPath;
        icon.classList.remove('spinning');
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    };
    tempImg.onerror = function() {
        icon.classList.remove('spinning');
        alert("could not find snippet in docs folder.");
    };
}

function closePoem() {
    document.getElementById('poem-modal').style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('poem-modal')) { closePoem(); }
}