document.addEventListener('DOMContentLoaded', function () {
    showSection('sobreMi'); // Mostrar "Sobre mí" por default al cargar la página
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
}