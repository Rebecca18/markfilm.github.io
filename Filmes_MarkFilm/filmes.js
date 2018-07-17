let tarefas = [
  {
    nome: 'filme',
    categoria: 'filme',
    marcado: false
  }
];

function insereTarefaNaPagina(tarefa){

  let containerEl = document.querySelector('#lista-tarefas');
  let tarefaEl = document.createElement('li');
  //estilizando o elemento
  tarefaEl.classList.add('item-tarefa');

  if(tarefa.marcado==true){
    tarefaEl.classList.add('marcado');
  }
  //
  tarefaEl.innerHTML = tarefa.nome;
  containerEl.appendChild(tarefaEl);

}
tarefas.forEach(insereTarefaNaPagina);


let botao = document.querySelector('#incluir-nova-tarefa');
botao.addEventListener("click", addTarefa);

function addTarefa(tarefa){
  let nomeEl = document.querySelector("#nova-tarefa-nome");
  let novoTarefa= {
    nome: nomeEl.value,
    categoria: 'outros',
    marcado: false
  };
  tarefas.push(novoTarefa);
  insereTarefaNaPagina(novoTarefa);
}
