function entraSaiBarco(elemento) {
    let fazend = fazendeiro.getBoundingClientRect();
    let maresq = maresquerda.getBoundingClientRect();
    let mardir = mardireita.getBoundingClientRect();
    let copia = elemento.outerHTML;
    if(elemento.parentNode == maresquerda && fazend.left == maresq.right) {
        console.log(`${elemento.id} entrou no barco pela esquerda`);
        elemento.remove();
        bau.innerHTML = copia;
    } else if(elemento.parentNode == mardireita && fazend.left == (mardir.left - 450)) {
        console.log(`${elemento.id} Produto entrou no barco pela direita`);
        elemento.remove();
    } else {
        console.log("Lobo no baú");
    }
};

bau.addEventListener("click", () => {
    //console.log("click bau")
});

lobo.addEventListener("click", () => {
    //console.log('click lobo')
    entraSaiBarco(lobo);
});

ovelha.addEventListener("click", () => {
    entraSaiBarco(ovelha);
});

alface.addEventListener("click", () => {
    entraSaiBarco(alface);
}); 