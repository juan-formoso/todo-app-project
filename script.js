const createButton = document.getElementById('criar-tarefa');
const itens = document.getElementById('lista-tarefas');
const deleteItens = document.getElementById('apaga-tudo');
const cleanList = document.getElementById('remover-finalizados');
const saveList = document.getElementById('salvar-tarefas');

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

function removeFinishedItens() {
  const list = itens.childNodes;
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].classList.contains('completed')) {
      list[i].remove();
    }
  }
}

cleanList.addEventListener('click', () => {
  removeFinishedItens();
  removeFinishedItens();
});

function storeList() {
  const lis = document.querySelector('ol').innerHTML;
  localStorage.setItem('save', lis);
}
function load() {
  if (localStorage.save !== undefined) {
    document.querySelector('ol').innerHTML = localStorage.save;
  }
}

window.onload = load;
saveList.addEventListener('click', storeList)
