function entraSaiBarco(id) {
    const elemento = document.querySelector(`#${id}`);
    let fazend = fazendeiro.getBoundingClientRect();
    let maresq = maresquerda.getBoundingClientRect();
    let mardir = mardireita.getBoundingClientRect();
    let copia = elemento.outerHTML;

    if (elemento.parentNode == maresquerda || elemento.parentNode == mardireita) {
        //testar se bau tem elementos filho para ver se é possível entrar non barco
        if(bau.childElementCount)
            return;
    }

    if(elemento.parentNode == maresquerda && fazend.left == maresq.right) {
        console.log(`${elemento.id} entrou no barco pela esquerda`);
        elemento.remove();
        bau.innerHTML = copia;
    } else if(elemento.parentNode == mardireita && fazend.left == (mardir.left - 450)) {
        console.log(`${elemento.id} Produto entrou no barco pela direita`);
        elemento.remove();
        bau.innerHTML = copia;
    } else if(elemento.parentNode == bau) {
        if(fazend.left == maresq.right) {
            console.log(`${elemento.id} saiu do baú para margem esquerda`);
            elemento.remove();
            maresquerda.innerHTML += copia;
        } else if (fazend.left == (mardir.left - 450)) {
            console.log(`${elemento.id} saiu do baú para margem direita`)
            elemento.remove();
            mardireita.innerHTML += copia;
        } else {
            console.log("Não pode sair do baú, tiringa não está na margem"); 
        }
    } else {
        console.log(`${elemento.id} não pode entrar no baú, tiringa não está na margem`);
    }
};