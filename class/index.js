// const Livro = function (nome, editoria, paginas) {
//     nomeL = nome;
//     editoriaL = editoria;
//     paginasL = paginas;

//     this.getNome = function () {
//         return nomeL;
//     }
//     this.getEditoria = function () {
//         return editoriaL;
//     }
//     this.gePaginas = function() {
//         return paginas;
//     }
// }

// const js = new Livro('JS', 'Matheus', 120)

// console.log(js.getNome())
// console.log(js.getEditoria())
// console.log(js.getEditoria())


// const nome = 'Alura';

// const temp = new String(nome);
// console.log(temp.toString())


class Book { 
    constructor(nome, editoria, pagina) {
        this.nome = nome;
        this.editoria = editoria;
        this.pagina = pagina;
    }
    anunciarTitulo() {
        console.log(`Titulo: ${this.nome}`);
    }
    descreverTitulo() {
        console.log(`${this.nome} é um livro da editoria ${this.editoria} e tem ${this.pagina} paginas`)
    }
}

const nodeJS = new Book('NodeJs', 'Matheus', 200);
console.log(nodeJS);

nodeJS.anunciarTitulo();
nodeJS.descreverTitulo();

class SegundoLivro extends Book {
    constructor(nome,outroNome) {
        super(nome)
        this.outroNome = outroNome;
    }
    descreverColecao() {
        console.log(`O Livro ${this.nome} faz parte da coleção ${this.outroNome}`)
    }
}

const logicaDeProgramacao = new SegundoLivro('Logica de programação II', 'Comece a programar !!');

logicaDeProgramacao.descreverColecao();