/*=== toggle icon navbar ===*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=== scroll sections active link ===*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*=== sticky navbar ===*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*=== remove toggle icon and navbar when click navbar link (scroll) ===*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*=== settings smtp server for sending emails from contact form ===*/
const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});