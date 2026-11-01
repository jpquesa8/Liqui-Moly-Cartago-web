
/* ========================================
   MENÚ DE NAVEGACIÓN
======================================== */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}


/* ========================================
   FILTROS DEL CATÁLOGO
======================================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((filter) => {
      filter.classList.remove("active");
    });

    button.classList.add("active");

    productCards.forEach((card) => {
      const category = card.dataset.category;

      card.style.display =
        selectedFilter === "todos" || category === selectedFilter
          ? ""
          : "none";
    });
  });
});


/* ========================================
   SELECCIÓN DE PRODUCTOS
======================================== */

const productButtons = document.querySelectorAll("[data-product]");
const productInput = document.getElementById("producto");
const contactSection = document.getElementById("contacto");

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (productInput) {
      productInput.value = button.dataset.product;
    }

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* ========================================
   BANNER ROTATIVO DE PRODUCTOS
======================================== */

/*
  IMPORTANTE:
  Las imágenes deben guardarse dentro de la carpeta "images".
  Estos nombres son ejemplos de archivos locales.
  Agrega las imágenes reales antes de publicar el banner.
*/

const featuredProducts = [
  {
    name: "Cera Tec 3721",
    description: "Aditivo antifricción para ayudar a proteger el motor.",
    image: "images/cera-tec-3721.png",
    link: "#productos"
  },
  {
    name: "Special Tec F 5W-30",
    description: "Aceite de motor para aplicaciones compatibles.",
    image: "images/special-tec-f-5w30.png",
    link: "#productos"
  },
  {
    name: "Octane Booster 21610",
    description: "Aditivo diseñado para mejorar el octanaje del combustible.",
    image: "images/octane-booster-21610.png",
    link: "#productos"
  },
  {
    name: "ATF Additive 5135",
    description: "Aditivo para el mantenimiento de transmisiones automáticas.",
    image: "images/atf-additive-5135.png",
    link: "#productos"
  }
];

const sliderTitle = document.getElementById("sliderTitle");
const sliderDescription = document.getElementById("sliderDescription");
const sliderImage = document.getElementById("sliderImage");
const sliderLink = document.getElementById("sliderLink");
const prevProduct = document.getElementById("prevProduct");
const nextProduct = document.getElementById("nextProduct");

let currentProduct = 0;
let sliderInterval = null;

function showProduct(index) {
  if (
    !sliderTitle ||
    !sliderDescription ||
    !sliderImage ||
    !sliderLink ||
    featuredProducts.length === 0
  ) {
    return;
  }

  currentProduct =
    (index + featuredProducts.length) % featuredProducts.length;

  const product = featuredProducts[currentProduct];

  sliderTitle.textContent = product.name;
  sliderDescription.textContent = product.description;
  sliderImage.src = product.image;
  sliderImage.alt = product.name;
  sliderLink.href = product.link;
}

function nextSlide() {
  showProduct(currentProduct + 1);
}

function previousSlide() {
  showProduct(currentProduct - 1);
}

function startSlider() {
  stopSlider();

  if (featuredProducts.length > 1) {
    sliderInterval = setInterval(nextSlide, 5000);
  }
}

function stopSlider() {
  if (sliderInterval !== null) {
    clearInterval(sliderInterval);
    sliderInterval = null;
  }
}

if (sliderTitle && sliderImage && featuredProducts.length > 0) {
  showProduct(0);
  startSlider();

  if (nextProduct) {
    nextProduct.addEventListener("click", () => {
      nextSlide();
      startSlider();
    });
  }

  if (prevProduct) {
    prevProduct.addEventListener("click", () => {
      previousSlide();
      startSlider();
    });
  }

  const productSlider = document.getElementById("productSlider");

  if (productSlider) {
    productSlider.addEventListener("mouseenter", stopSlider);
    productSlider.addEventListener("mouseleave", startSlider);
  }
}


/* ========================================
   FORMULARIO DE CONTACTO
======================================== */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (formMessage) {
      formMessage.textContent =
        "Gracias por tu consulta. Este formulario es una demostración y todavía no envía mensajes.";
    }

    contactForm.reset();
  });
}

