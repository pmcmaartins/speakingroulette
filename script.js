// Função principal para girar a roda
function spinWheel(wheelId, inputId) {
  const wheel = document.getElementById(wheelId); // Elemento da roda
  const input = document.getElementById(inputId); // Elemento do textarea

  // Obter os nomes do textarea e transformá-los em uma lista
  const names = input.value.split("\n").map(name => name.trim()).filter(name => name);

  // Verificar se há pelo menos um nome na lista
  if (names.length === 0) {
    alert("Por favor, insira pelo menos um nome na lista!");
    return;
  }

  // Exibir o ponto de interrogação durante a "animação"
  const span = wheel.querySelector("span");
  span.textContent = "?";

  // Adicionar classe de rotação para animação
  wheel.classList.add("spinning");

  // Após o tempo da animação, escolher um nome aleatório
  setTimeout(() => {
    wheel.classList.remove("spinning"); // Remover a classe de rotação
    const randomIndex = Math.floor(Math.random() * names.length); // Índice aleatório
    const selectedName = names[randomIndex]; // Nome selecionado
    span.textContent = selectedName; // Exibir o nome no centro da roda
  }, 1000); // Duração da "animação" (2 segundos)
}

// Configurar eventos para os botões
document.querySelector("button[onclick='spinWheel(\"wheel-left\", \"input-left\")']")
    .addEventListener("click", () => spinWheel("wheel-left", "input-left"));

document.querySelector("button[onclick='spinWheel(\"wheel-right\", \"input-right\")']")
    .addEventListener("click", () => spinWheel("wheel-right", "input-right"));
