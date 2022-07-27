function move(elemento, inicio, fim) {
    if (inicio < fim) {
        let i = inicio + 1;
        setTimeout(() => {
            elemento.style.left = i + 'px';
            move(elemento, i, fim);
        }, 4);
    } else if (inicio > fim) {
        let i = inicio - 1;
        setTimeout(() => {
            elemento.style.left = i + 'px';
            move(elemento, i, fim);
        }, 4);
    }
}

fazendeiro.addEventListener("click", e => {
    if (e.target.id != 'fazendeiro') {
        entraSaiBarco(document.querySelector(`#${e.target.id}`));
        return;
    }
    let fazend = fazendeiro.getBoundingClientRect();
    let maresq = maresquerda.getBoundingClientRect();
    let mardir = mardireita.getBoundingClientRect();
    if (fazend.left == maresq.right) {
        console.log("Zarpando");
        move(fazendeiro, fazend.left, (mardir.left - 450));
        fazendeiro.style.transform = 'scaleX(1)';
    } else if (fazend.right == mardir.left) {
        move(fazendeiro, fazend.left, maresq.right);
        fazendeiro.style.transform = 'scaleX(-1)';
        console.log("Zarpando");
    } 
});