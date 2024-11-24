
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const facebookIcon = document.querySelector('#socialsContactcs img[alt="facebook"]');
const githubIcon = document.querySelector('#socialsContactcs img[alt="Github"]');
const emailIcon = document.querySelector('#socialsContactcs img[alt="Email"]');


function updateIcons() {
    if (body.classList.contains('dark-mode')) {
        facebookIcon.src = './images/icons/fb_white.png';
        githubIcon.src = './images/icons/github_white.png';
        emailIcon.src = './images/icons/email_white.png';
        darkModeToggle.textContent = '☀️'; 
    } else {
        facebookIcon.src = './images/icons/fb_black.png';
        githubIcon.src = './images/icons/github_black.png';
        emailIcon.src = './images/icons/email_black.png';
        darkModeToggle.textContent = '🌙'; 
    }
}


if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode'); 
    updateIcons(); 
} else {
    updateIcons(); 
}


darkModeToggle.addEventListener('click', () => {
    
    body.classList.toggle('dark-mode');
    
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
    
    
    updateIcons();
});
