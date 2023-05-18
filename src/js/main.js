import productList from './productList';
import {loadHeaderFooter} from './utils.mjs'
import { updateCartCount } from './superscript.mjs';

productList('.product-list', 'tents');
loadHeaderFooter()
  .then(() => {
    updateCartCount();
  })
  .catch((error) => {
    console.error('Error loading header and footer:', error);
  });



