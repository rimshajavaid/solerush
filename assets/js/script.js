'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 

document.addEventListener('DOMContentLoaded', function() {
  const sortSelect = document.getElementById('product-sort');
  const productsContainer = document.querySelector('.all-products-container');
  
  sortSelect.addEventListener('change', function() {
      const sortValue = this.value;
      const productCards = Array.from(document.querySelectorAll('.product-card'));
      
      productCards.sort((a, b) => {
          const priceA = parseFloat(a.querySelector('p').textContent.replace('$', ''));
          const priceB = parseFloat(b.querySelector('p').textContent.replace('$', ''));
          
          const ratingA = a.querySelectorAll('.fa-star').length + 
                         (a.querySelector('.fa-star-half-o') ? 0.5 : 0);
          const ratingB = b.querySelectorAll('.fa-star').length + 
                         (b.querySelector('.fa-star-half-o') ? 0.5 : 0);
          
          switch(sortValue) {
              case 'price-low':
                  return priceA - priceB;
              case 'price-high':
                  return priceB - priceA;
              case 'rating-high':
                  return ratingB - ratingA;
              case 'rating-low':
                  return ratingA - ratingB;
              default:
                  return 0; 
          }
      });
      
      
      productsContainer.innerHTML = '';
      productCards.forEach(card => {
          productsContainer.appendChild(card);
      });
  });
});

function changeImage(element) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = element.src;
    mainImage.alt = element.alt;
}

document.getElementById('quantity').addEventListener('change', function() {
    if (this.value < 1) this.value = 1;
});

document.querySelector('.add-to-cart').addEventListener('click', function() {
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    
    if (!size) {
        alert('Please select a size');
        return;
    }
    
    alert(`Added ${quantity} pair(s) of size ${size} to cart!`);
    
});

