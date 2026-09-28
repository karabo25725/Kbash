console.log("KBash JavaScript is working!");

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function() {
    console.log("MENU BUTTON CLICKED");
    navLinks.classList.toggle("active");
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

const sections = document.querySelectorAll("section");
const navLinksList = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinksList.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});
// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
    "#services, #work, #about, #process, #contact, .service-card, .work-card, .process-step"
);

const revealObserver = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(function(element) {
    element.classList.add("reveal");
    revealObserver.observe(element);
});
// Contact Form

// Contact Form

emailjs.init({
    publicKey: "e9Cf4zHUwxcx0J3kp"
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    emailjs.sendForm(
        "service_l8x720h",
        "template_1yn7bw5",
        contactForm
    )
    .then(function() {

        alert("Thanks! Your message has been sent.");

        contactForm.reset();

    })
    .catch(function(error) {

        console.error("EmailJS Error:", error);

        alert("Something went wrong. Please try again.");

    });

});
// Hero Typing Effect

const typingText = document.getElementById("typing-text");

const words = [
    "Web Development",
    "Digital Design",
    "Modern Websites"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();
// Back To Top

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});