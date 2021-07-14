const createButton = document.getElementById('criar-tarefa');
const itens = document.getElementById('lista-tarefas');

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

function removeItem() {
  const selectedItem = document.getElementsByClassName('selected');
  if (selectedItem != null) {
    selectedItem.classList.remove('selected');
  }
}

itens.addEventListener('click', (item) => {
  const itemList = item.target;
  removeItem();
  itemList.classList.add('selected');
});
