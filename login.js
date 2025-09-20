export function loginUI(container, onSuccess) {
  container.innerHTML = `
    <h1>Ruffo TV - Login</h1>
    <button id="googleLogin">Login com Google</button>
    <button id="fbLogin">Login com Facebook</button>
  `;

  document.getElementById('googleLogin').addEventListener('click', () => {
    alert('Login com Google simulado!');
    onSuccess();
  });

  document.getElementById('fbLogin').addEventListener('click', () => {
    alert('Login com Facebook simulado!');
    onSuccess();
  });
}
