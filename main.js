import './style.css'
import { setupHomeApp } from './src/homeApp.js'
import { setupDiceRNGApp } from './src/diceRNGApp.js'

const app = document.querySelector('#app')

// Simple SPA navigation state
let currentPage = 'home';

function render() {
  if (currentPage === 'home') {
    setupHomeApp(app, () => {
      currentPage = 'dice';
      render();
    });
  } else if (currentPage === 'dice') {
    setupDiceRNGApp(app);
  }
}

// Start at home page
render();
