/* script.js */
document.getElementById('modoOscuro').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('mensajeEnviado').style.display = 'block';
    setTimeout(() => {
        document.getElementById('mensajeEnviado').style.display = 'none';
    }, 3000);
});

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carruselInner = document.querySelector('.carrusel-inner');

let index = 0;
next.addEventListener('click', () => {
    if (index < carruselInner.children.length - 1) {
        index++;
    } else {
        index = 0;
    }
    carruselInner.style.transform = `translateX(-${index * 100}%)`;
});

prev.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = carruselInner.children.length - 1;
    }
    carruselInner.style.transform = `translateX(-${index * 100}%)`;
});

document.addEventListener("DOMContentLoaded", function() {
    // Animaciones de aparición al hacer scroll
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));

    // Validación del formulario de contacto
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("mensaje").value.trim();

            if (!name || !email || !message) {
                alert("Por favor, complete todos los campos.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Por favor, ingrese un correo válido.");
                return;
            }

            alert("¡Gracias por tu consulta! Te responderemos pronto.");
            form.reset();
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});