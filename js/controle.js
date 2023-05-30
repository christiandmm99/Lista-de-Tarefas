let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add')
let main = document.getElementById('areaLista')

function addTarefa() {
    let valorInput = input.value;
    
    if((valorInput !=="") && (valorInput !==null) && (valorInput !==undefined)) {

        ++contador; 
        
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="material-symbols-outlined">
                radio_button_unchecked</i>

        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
           ${valorInput} 
            
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><span class="material-symbols-outlined">
                delete
                </span></button>

        </div>
    </div>`

    //adicionar novo item no main
    main.innerHTML += novoItem;

    //zerar campo de digitação após adicionar item
    input.value = "";
    input.focus();  

    }
}

//deletando tarefa por tarefa  ( olhar no codigo as mudanças tambem )
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if(classe=="item"){
        item.classList.add('clicado');
        item.classList.remove('material-symbols-outlined')

        item.parentNode.appendChild(item);
        
    }else{
        (classe=="item")
            item.classList.remove('clicado');
        

    }
}


//adicionar item na lista clicando no enter
input.addEventListener("keyup", function(event){
   //se teclou enter (13)
    if(event.keyCode ===13){
       event.preventDefault(); 
       btnAdd.click();
    }
})