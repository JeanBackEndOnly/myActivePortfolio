const about_me_button = document.getElementById('display-about_me');
const projects_button = document.getElementById('display-projects');
const home_button = document.getElementById('display-home');
const skills_button = document.getElementById('display-skills');
const certifications_button = document.getElementById('display-certifications');
const contact_button = document.getElementById('display-contact');
const display_projects = document.getElementById('display-projects-button');
const display_margin = document.getElementById('display-margin');
const display_margin_projects = document.getElementById('display-margin-projects');

display_projects.addEventListener('click', function(){
    projects_button.style.color = 'rgb(255, 93, 93)';
    projects_button.style.borderBottom = 'solid 2px rgb(255, 93, 93)';

    home_button.style.color = '#fff';
    home_button.style.borderBottom = 'solid 1px transparent';
});
projects_button.addEventListener('click', function() {
    display_margin_projects.style.display = 'flex';
    display_margin.style.display = 'none';
    projects_button.style.color = 'rgb(255, 93, 93)';
    projects_button.style.borderBottom = 'solid 2px rgb(255, 93, 93)';

    about_me_button.style.color = '#fff';
    about_me_button.style.borderBottom = 'solid 1px transparent';

    home_button.style.color = '#fff';
    home_button.style.borderBottom = 'solid 1px transparent';

    skills_button.style.color = '#fff';
    skills_button.style.borderBottom = 'solid 1px transparent';

    certifications_button.style.color = '#fff';
    certifications_button.style.borderBottom = 'solid 1px transparent';

    contact_button.style.color = '#fff';
    contact_button.style.borderBottom = 'solid 1px transparent';
});
about_me_button.addEventListener('click', function() {
    display_margin_projects.style.display = 'none';
    display_margin.style.display = 'flex';
    about_me_button.style.color = 'rgb(255, 93, 93)';
    about_me_button.style.borderBottom = 'solid 2px rgb(255, 93, 93)';

    projects_button.style.color = '#fff';
    projects_button.style.borderBottom = 'solid 1px transparent';

    home_button.style.color = '#fff';
    home_button.style.borderBottom = 'solid 1px transparent';

    skills_button.style.color = '#fff';
    skills_button.style.borderBottom = 'solid 1px transparent';

    certifications_button.style.color = '#fff';
    certifications_button.style.borderBottom = 'solid 1px transparent';

    contact_button.style.color = '#fff';
    contact_button.style.borderBottom = 'solid 1px transparent';
});
home_button.addEventListener('click', function() {
    display_margin_projects.style.display = 'none';
    display_margin.style.display = 'none';
    home_button.style.color = 'rgb(255, 93, 93)';
    home_button.style.borderBottom = 'solid 2px rgb(255, 93, 93)';

    about_me_button.style.color = '#fff';
    about_me_button.style.borderBottom = 'solid 1px transparent';

    projects_button.style.color = '#fff';
    projects_button.style.borderBottom = 'solid 1px transparent';

    skills_button.style.color = '#fff';
    skills_button.style.borderBottom = 'solid 1px transparent';

    certifications_button.style.color = '#fff';
    certifications_button.style.borderBottom = 'solid 1px transparent';

    contact_button.style.color = '#fff';
    contact_button.style.borderBottom = 'solid 1px transparent';
});
skills_button.addEventListener('click', function() {
    display_margin_projects.style.display = 'none';
    display_margin.style.display = 'none';
    skills_button.style.color = 'rgb(255, 93, 93)';
    skills_button.style.borderBottom = 'solid 2px rgb(255, 93, 93)';

    about_me_button.style.color = '#fff';
    about_me_button.style.borderBottom = 'solid 1px transparent';

    home_button.style.color = '#fff';
    home_button.style.borderBottom = 'solid 1px transparent';

    projects_button.style.color = '#fff';
    projects_button.style.borderBottom = 'solid 1px transparent';

    certifications_button.style.color = '#fff';
    certifications_button.style.borderBottom = 'solid 1px transparent';

    contact_button.style.color = '#fff';
    contact_button.style.borderBottom = 'solid 1px transparent';
});
certifications_button.addEventListener('click', function() {
    display_margin_projects.style.display = 'none';
    display_margin.style.display = 'none';
    certifications_button.style.color = 'rgb(255, 93, 93)';
    certifications_button.style.borderBottom = 'solid 2px rgb(255, 93, 93)';

    about_me_button.style.color = '#fff';
    about_me_button.style.borderBottom = 'solid 1px transparent';

    home_button.style.color = '#fff';
    home_button.style.borderBottom = 'solid 1px transparent';

    skills_button.style.color = '#fff';
    skills_button.style.borderBottom = 'solid 1px transparent';

    projects_button.style.color = '#fff';
    projects_button.style.borderBottom = 'solid 1px transparent';

    contact_button.style.color = '#fff';
    contact_button.style.borderBottom = 'solid 1px transparent';
});
contact_button.addEventListener('click', function() {
    display_margin_projects.style.display = 'none';
    display_margin.style.display = 'none';
    contact_button.style.color = 'rgb(255, 93, 93)';
    contact_button.style.borderBottom = 'solid 2px rgb(255, 93, 93)';

    about_me_button.style.color = '#fff';
    about_me_button.style.borderBottom = 'solid 1px transparent';

    home_button.style.color = '#fff';
    home_button.style.borderBottom = 'solid 1px transparent';

    skills_button.style.color = '#fff';
    skills_button.style.borderBottom = 'solid 1px transparent';

    projects_button.style.color = '#fff';
    projects_button.style.borderBottom = 'solid 1px transparent';

    certifications_button.style.color = '#fff';
    certifications_button.style.borderBottom = 'solid 1px transparent';
});