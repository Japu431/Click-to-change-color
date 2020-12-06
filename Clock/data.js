function newHorario() {
    const agora = new Date();

    var novoHoras = agora.getHours();
    var novoMinuto = agora.getMinutes();
    var novoSegundo = agora.getSeconds();

    novoHoras = checked(novoHoras)
    novoMinuto = checked(novoMinuto);
    novoSegundo = checked(novoSegundo);

    document.getElementById("date").innerHTML = novoHoras + " : " + novoMinuto + " : " + novoSegundo;


     var time = setTimeout(function () { 
        newHorario();
    }, 500);
}

function checked(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
