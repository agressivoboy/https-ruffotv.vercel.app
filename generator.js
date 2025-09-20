export function generatorUI(container) {
  container.innerHTML = `
    <h1>Gerador de Vídeos e Imagens</h1>
    <input type="text" id="textPrompt" placeholder="Digite o texto ou URL da imagem" />
    <button id="generateBtn">Gerar</button>
    <div id="result"></div>
  `;

  document.getElementById('generateBtn').addEventListener('click', () => {
    const prompt = document.getElementById('textPrompt').value;
    const result = document.getElementById('result');
    result.innerHTML = `<p>Resultado gerado para: <strong>${prompt}</strong></p>`;
  });
}
