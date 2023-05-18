import { loadHeaderFooter } from './utils.mjs';
import { updateCartCount } from './superscript.mjs';

loadHeaderFooter()
  .then(() => {
    updateCartCount();
  })
  .catch((error) => {
    console.error('Error loading header and footer:', error);
  });

const addToCartBtn = document.querySelector('#addToCart');
if(addToCartBtn) {
  addToCartBtn.addEventListener('click', () => {
    updateCartCount();
  });
}
