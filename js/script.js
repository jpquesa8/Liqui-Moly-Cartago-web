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
// BANNER ROTATIVO DE PRODUCTOS

const sliderProducts = [
  {
    name: "Octane Booster 21610",
    description: "Aditivo potenciador del índice de octano para motores de gasolina.",
    image: "https://www.capris.cr/media/catalog/product/cache/2f6b2b7ee41e3a231a46fe73c1b96633/a/d/aditivo-potenciador-del-indice-de-octano-para-motores-deportivos-200ml-liqui-moly-21610-octane-booster-527145.webp",
    link: "https://www.capris.cr/es/liqui-moly-21610-octane-booster-aditivo-potenciador-del-indice-de-octano-para-motores-deportivos-200ml-527145.html"
  }
];

let currentSlide = 0;

function showSlide(index) {
  const product = sliderProducts[index];

  document.getElementById("sliderTitle").textContent = product.name;
  document.getElementById("sliderDescription").textContent = product.description;
  document.getElementById("sliderImage").src = product.image;
  document.getElementById("sliderLink").href = product.link;
}

document.getElementById("nextSlide").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % sliderProducts.length;
  showSlide(currentSlide);
});

document.getElementById("prevSlide").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + sliderProducts.length) % sliderProducts.length;
  showSlide(currentSlide);
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % sliderProducts.length;
  showSlide(currentSlide);
}, 5000);
