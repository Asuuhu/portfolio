// Attendre 2 secondes avant d'ajouter la classe 'fade-in'
window.addEventListener('load', function () {
    setTimeout(function () {
        document.body.classList.add('fade-in');
    }, 2000); // 2000 ms = 2 secondes
  });