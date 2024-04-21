// menu


function toggleMenu(element) {
    if (window.innerWidth < 930) {
      element.classList.toggle('change');
      var menuLinks = document.querySelector('.menu-links');
      menuLinks.classList.toggle('show');
  
      document.body.style.overflow = (menuLinks.classList.contains('show')) ? 'hidden' : 'auto';
    }
  }
  
  document.querySelectorAll('.menu-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      var menuButton = document.querySelector('.menu');
      if (window.innerWidth < 930) {
        toggleMenu(menuButton);
      }
    });
  })
  
  function toggleActive(event) {
    var links = document.querySelectorAll('.menu-links a');
    links.forEach(function(link) {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
  }
  
  // function for moving the underline according to the section the user hovers
  
  window.addEventListener('scroll', function() {
    var sections = this.document.querySelectorAll('#hero-section, #about-atz-section, #atz-specializari-section, #acreditari-atz-section, #intrebari-frecvente-section, #informatii-contact-section, #recenzii-section');
    var scrollPosition = window.scrollY;
  
    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        var link = document.querySelector('a[href="#' + section.id + '"]');
        toggleActive({target: link});
      }
    });
  });
  
  // function for changing the background color of the header and its contents depending on the position of the user on the website
  
  function adjustHeaderStyles() {
    var header = document.querySelector('.header');
    var logo = document.querySelector('#logo');
    var menuLinks = document.querySelectorAll('.menu-links a');
    var menuBars = document.querySelectorAll('.menu .bar');
    var heroSection = document.querySelector('#hero-section');
  
    if (window.scrollY > heroSection.clientHeight) {
        header.style.backgroundColor = '#f2f2f2';
        logo.style.filter = 'brightness(0)';
        menuLinks.forEach(function(link) {
            link.style.color = '#1e1e1e';
        });
        menuBars.forEach(function(bar) {
            bar.style.backgroundColor = '#1e1e1e';
        });
    } else {
        header.style.backgroundColor = 'transparent';
        logo.style.filter = 'brightness(1)';
        menuLinks.forEach(function(link) {
            link.style.color = '#f2f2f2';
        });
        menuBars.forEach(function(bar) {
            bar.style.backgroundColor = '#f2f2f2';
        });
    }
  }
  
  // Listen for scroll events to adjust header styles
  window.addEventListener('scroll', function() {
    adjustHeaderStyles();
  });


  // Generating cards dinamically.

  const recommendedProducts = [
    { name: 'Pin', image: 'public/images/pin.png', price: '100RON'},
    { name: 'Cedru', image: 'public/images/cedru.png', price: '200RON'},
    { name: 'Podocarpus', image: 'public/images/podocarpus.png', price: '300RON'},
    { name: 'Glicina', image: 'public/images/glicina.png', price: '100RON'},
    { name: 'Agrișă', image: 'public/images/agrisa.png', price: '200RON'},
    { name: 'Hortensia', image: 'public/images/hortensia.png', price: '300RON'},
  ];

  // Function to generate HTML for a single product card.

  function generateProductCard(product) {
    return `
    <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <span class="material-symbols-outlined favorite">
        favorite
        </span>
        <a href="product.html?product=${encodeURIComponent(product.name)}" class="default-secondary-btn" data-product="${product.name}" data-hover="Vezi Produs">Vezi Produs</a>
        <a href="#" class="default-primary-btn">
        <span data-hover="Adaugă în coș">Adaugă în coș</span>
        </a>
    </div>
`;
}

  function handleButtonClick(event) {
    if (event.target.classList.contains('default-secondary-btn')) {
      const productName = event.target.dataset.product;

      window.location.href = `${productName.toLowerCase().replace(/\s+/g, '-')}.html`;
    }
  }

  // Function to generate recommended products section.

  function generateRecommendedProducts() {
    const container = document.getElementById("recommended-products");
    container.innerHTML = "";

    recommendedProducts.forEach(product => {
      const cardHTML = generateProductCard(product);
      container.insertAdjacentHTML("beforeend", cardHTML);
    });

    container.addEventListener('click', handleButtonClick);

  }

  // call the functioon to generate the recommended products when the page loads

  document.addEventListener("DOMContentLoaded", generateRecommendedProducts);