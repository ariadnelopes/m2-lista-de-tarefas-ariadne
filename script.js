const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(lista) {
  const ul = document.querySelector('.tasks__list');
  ul.innerHTML = '';

  for (let i = 0; i < lista.length; i++) {
    const taskItem = createTaskItem(lista[i].title, lista[i].type);
    ul.appendChild(taskItem);
  }
}
renderElements(tasks)

function createTaskItem(title, type){
  const li = document.createElement('li');
  li.classList.add('task__item');

  const div = document.createElement('div');
  div.classList.add('task-info__container');

  const span = document.createElement('span');
  span.classList.add('task-type');

  if (type === 'Urgente') {
  span.classList.add('span-urgent');
} if (type === 'Importante') {
  span.classList.add('span-important');
} if (type === 'Normal') {
  span.classList.add('span-normal');
}

  div.appendChild(span);

  const p = document.createElement('p');
  p.textContent = title;
  div.appendChild(p);

  const button = document.createElement('button');
  button.classList.add('task__button--remove-task');
  
  button.addEventListener('click', function () {
    let index = -1; 
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title === title) {
            index = i; 
            break; 
        }
    }

    if (index !== -1) {
        tasks.splice(index, 1);
        renderElements(tasks);
    }
});

  li.appendChild(div);
  li.appendChild(button);

  return li;
}

const buttonH = document.querySelector('.form__button--add-task');

buttonH.addEventListener('click', function(){
  const titleInput = document.getElementById('input_title');
  const typeSelect = document.querySelector('.form__input--priority');

  const title = titleInput.value;
  const type = typeSelect.value;  
  
  const newTask = { title: title, type: type };
  tasks.push(newTask)

  renderElements(tasks)
})

const form = document.querySelector('.main__container')
form.addEventListener('submit', function(event){
  event.preventDefault()
})