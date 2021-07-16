const createButton = document.getElementById('criar-tarefa');
const itens = document.getElementById('lista-tarefas');
const deleteItens = document.getElementById('apaga-tudo');

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

function removeAllItens() {
  const list = document.querySelector('#lista-tarefas');
  list.innerHTML = '';
}

deleteItens.addEventListener('click', () => {
  removeAllItens();
});
