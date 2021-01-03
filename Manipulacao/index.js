
const criarUsuario = document.getElementById('botao')

criarUsuario.addEventListener('click', (event) =>  {
    event.preventDefault();
    console.log('Cliquei');

    const listaPaciente = document.querySelector('[lista-user]');
    const input = document.querySelector('[data-input]');
    const valor = input.value;
    input.focus();

    console.log(valor)

    const criarElemento = document.createElement('span');
    criarElemento.classList.add('lista_pacientes');
    
    const conteudo = `<span class="content">${valor}</span> <br>`;
    criarElemento.innerHTML = conteudo;

    if(criarElemento == "") {
        return;
    }

    listaPaciente.appendChild(criarElemento);
    input.value = " "
});



// const addPacientes =  (event) => {
//     event.preventDefault();

//     const addPacientes = document.querySelector('[data-submit]');
//     const input = document.querySelector('[data-input]');
//     const valorInput = input.value;
 

//     const criarPaciente = document.createElement('span');
//     criarPaciente.appendChild('criado');

//     const aparecerFront = `<span class="content">${valorInput}</span>`;
//     criarPaciente.innerHTML = aparecerFront;

//     addPacientes.appendChild(criarPaciente)

//     console.log(addPacientes());

// }