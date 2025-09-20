import { loginUI } from './components/login.js';
import { generatorUI } from './components/generator.js';

export function initApp() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  // Mostra tela de login primeiro
  loginUI(app, () => {
    generatorUI(app);
  });
}
