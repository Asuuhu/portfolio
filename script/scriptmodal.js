// Ouvrir la modale avec l'image agrandie
function openModal(image) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = image.src;  // Prendre l'image cliquée
    captionText.innerHTML = image.alt;  // Afficher la légende de l'image
}

// Fermer la modale
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Attacher l'événement de clic sur les images
document.querySelectorAll('.production-box img').forEach(function(img) {
    img.addEventListener('click', function() {
        openModal(img);
    });
});

// Fermer la modale si on clique en dehors de l'image
var modal = document.getElementById("imageModal");
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});
