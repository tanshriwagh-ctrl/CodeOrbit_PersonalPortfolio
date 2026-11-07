// ----- Dark / Light mode -----
var themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});

// ----- Mobile menu -----
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");
});

// close the menu when a link is clicked
var menuLinks = menu.querySelectorAll("a");
for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function () {
    menu.classList.remove("open");
  });
}

// ----- Fade-in effect when scrolling -----
var items = document.querySelectorAll(".card, .mini-card, .timeline-item, .about-text");
items.forEach(function (item) {
  item.classList.add("fade");
});

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

items.forEach(function (item) {
  observer.observe(item);
});

// ----- Contact form: opens the email app with the message -----
var form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var subject = "Portfolio message from " + name;
  var body = message + "\n\nFrom: " + email;

  window.location.href =
    "mailto:tanshriwagh14@gmail.com?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
});

// ----- Footer year -----
document.getElementById("year").textContent = new Date().getFullYear();