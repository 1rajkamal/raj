// AOS init
AOS.init();

// Typed.js
var typed = new Typed(".text", {
    strings: [" Full Stack Developer", " Web Developer", " UI/UX Designer"],
    typeSpeed: 50,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

// ================= EMAILJS =================

// Init EmailJS with PUBLIC KEY
(function () {
    emailjs.init("3uJVJh_znHCLOV9Me");
})();

// Form submit handler
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // page reload band

    emailjs.sendForm(
        "service_yf0r48c",
        "template_ca0qtvi",
        this
    ).then(
        function () {
            document.getElementById("sentMessage").classList.remove("hidden");
            document.getElementById("contact-form").reset();
        },
        function (error) {
            console.log("EmailJS Error:", error);
            alert("Message failed ❌");
        }
    );
});
