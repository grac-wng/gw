$(document).ready(function() {
    setTimeout(function() { $("#loading").fadeOut(600); }, 150);

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
    const icon = document.querySelector('.fa-sync-alt');
    const modal = document.getElementById('poem-modal');
    const img = document.getElementById('poem-image');
    
    icon.classList.add('spinning');
    
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 20) + 1;
        img.src = `docs/snippet (${randomNum}).png`;
        
        img.onload = function() {
            icon.classList.remove('spinning');
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        };
    }, 800);
}

function closePoem() {
    document.getElementById('poem-modal').style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    const modal = document.getElementById('poem-modal');
    if (event.target == modal) { closePoem(); }
}

$('a[href*="#"]').on('click', function(e) {
    var target = $(this.hash);
    if (target.length) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: target.offset().top - 80 }, 800);
    }
});