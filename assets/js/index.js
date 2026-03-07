const projects_button = document.getElementById('display-projects');

projects_button.addEventListener('click', function() {
    document.getElementById('home-header').style.display = 'none';
    document.getElementById('projects-header').style.display = 'flex';
});