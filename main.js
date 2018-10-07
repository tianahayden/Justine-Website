document.getElementById('about-onclick').style.display = 'none';
document.getElementById('writing-onclick').style.display = 'none';
document.getElementById('services-onclick').style.display = 'none';
document.getElementById('contact-onclick').style.display = 'none';

function switchSection(id) {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('about-onclick').style.display = 'none';
    document.getElementById('writing-onclick').style.display = 'none';
    document.getElementById('services-onclick').style.display = 'none';
    document.getElementById('contact-onclick').style.display = 'none';
    document.getElementById(id).style.display = 'initial';
}

document.getElementById('menu-about').onclick = handleAboutClick

function handleAboutClick() {
    switchSection('about-onclick')
}

document.getElementById('menu-writing').onclick = handleWritingClick

function handleWritingClick() {
    switchSection('writing-onclick')
}

document.getElementById('menu-services').onclick = handleServicesClick

function handleServicesClick() {
    switchSection('services-onclick')
}

document.getElementById('menu-contact').onclick = handleContactClick

function handleContactClick() {
    switchSection('contact-onclick')
}

document.getElementById('home-link').onclick = handleHomeClick
document.getElementById('home-arrow1').onclick = handleHomeClick
document.getElementById('home-arrow2').onclick = handleHomeClick
document.getElementById('home-arrow3').onclick = handleHomeClick
document.getElementById('home-arrow4').onclick = handleHomeClick

function handleHomeClick() {
    switchSection('intro')
}