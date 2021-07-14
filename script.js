const createButton = document.getElementById('criar-tarefa');

function addItem(item) {
  const list = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  li.textContent = item;
  list.appendChild(li);
}

createButton.addEventListener('click', () => {
  const input = document.getElementById('texto-tarefa');
  addItem(input.value);
  input.value = '';
});