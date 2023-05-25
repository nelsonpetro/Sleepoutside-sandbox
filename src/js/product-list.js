import productList from './productList';
import { loadHeaderFooter, getParameter } from './utils.mjs';
import { updateCartCount } from './superscript.mjs';

loadHeaderFooter()
  .then(() => {
    updateCartCount();
    const addToCartBtn = document.querySelector('#addToCart');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', () => {
        updateCartCount();
      });
    }
  })
  .catch((error) => {
    alert('Error loading header and footer: ' + error);
  });

const category = getParameter('category');
productList('.product-list', category);
