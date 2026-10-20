const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    products.forEach(product => {
      const show = filter === "todos" || product.dataset.category === filter;
      product.style.display = show ? "block" : "none";
    });
  });
});

const productInput = document.getElementById("producto");
const contactSection = document.getElementById("contacto");

document.querySelectorAll("[data-product]").forEach(button => {
  button.addEventListener("click", () => {
    productInput.value = button.dataset.product;
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const producto = document.getElementById("producto").value.trim();

  formMessage.textContent = `¡Gracias, ${nombre}! Recibimos tu solicitud para: ${producto}.`;

  contactForm.reset();
});
