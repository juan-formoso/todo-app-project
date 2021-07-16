const createButton = document.getElementById('criar-tarefa');
const itens = document.getElementById('lista-tarefas');

function addItemList(item) {
  const li = document.createElement('li');
  li.innerText = item;
  itens.appendChild(li);
}

createButton.addEventListener('click', () => {
  const input = document.getElementById('texto-tarefa');
  addItemList(input.value);
  input.value = '';
});

function removeSelectedItem() {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem != null) {
    selectedItem.classList.remove('selected');
  }
}

itens.addEventListener('click', (item) => {
  const itemList = item.target;
  removeSelectedItem();
  itemList.classList.add('selected');
});

itens.addEventListener('dblclick', (item) => {
  const itemList = item.target;
  if (itemList.classList.contains('completed')) {
    itemList.classList.remove('completed');
  } else {
    itemList.classList.add('completed');
  }
});
