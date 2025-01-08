const button = document.querySelector(".button-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-task");

let minhaListaDeItens = [];

function adicionarTarefa() {
  minhaListaDeItens.push({
    tarefa: input.value,
    concluida: false,




  });

  input.value = "";
  mostrarTarefa();
}

function mostrarTarefa() {
  let novaLista = "";

  minhaListaDeItens.forEach((item, posicao) => {
    novaLista =
      novaLista +
      `       
        <li class="task ${item.concluida && "done"} ">
        <img title="Concluir tarefa" src="Checkmark.png" alt="concluido" onclick="concluirTarefa(${posicao})"> 
        <p>${item.tarefa}</p>
            
        <img title="Excluir tarefa" src="Cancel.png" alt="excluir"  onclick = "deletarItem(${posicao})">
        </li> `;
  });

  listaCompleta.innerHTML = novaLista;

  localStorage.setItem("lista", JSON.stringify(minhaListaDeItens));
}

function concluirTarefa(posicao) {
  minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida;

  mostrarTarefa();
}

function deletarItem(posicao) {
  minhaListaDeItens.splice(posicao, 1);

  mostrarTarefa();
}

function recarregarTarefa() {
  const tarefaLocalStorage = localStorage.getItem("lista");

  if (tarefaLocalStorage) {
    minhaListaDeItens = JSON.parse(tarefaLocalStorage);
    console.log(tarefaLocalStorage);
  }

  mostrarTarefa();
}
recarregarTarefa();
button.addEventListener("click", adicionarTarefa);




//let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
//if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
    //return alert("Please, select a valid time to set Alarm!");
