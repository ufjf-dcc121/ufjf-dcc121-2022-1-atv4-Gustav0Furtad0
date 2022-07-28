const move = (elemento, inicio, fim) => {
    if (inicio < fim) {
        let i = inicio + 1;
        setTimeout(() => {
            elemento.style.left = i + 'px';
            move(elemento, i, fim);
        }, 1);
    } else if (inicio > fim) {
        let i = inicio - 1;
        setTimeout(() => {
            elemento.style.left = i + 'px';
            move(elemento, i, fim);
        }, 1);
    } else {
        if (margemBarco == "maresquerda") {
            console.log("Tiringa chegou a margem direita");
            margemBarco = "mardireita";
            fazendeiro.style.transform = 'scaleX(-1)';
            verificaWL();
        } else if (margemBarco == "mardireita") {
            console.log("Tiringa chegou a margem esquerda");
            margemBarco = "maresquerda";
            fazendeiro.style.transform = 'scaleX(1)';
            verificaWL();
        };
    };
};


const gerfazendeiro = () => {
    let fazend = fazendeiro.getBoundingClientRect();
    let maresq = maresquerda.getBoundingClientRect();
    let mardir = mardireita.getBoundingClientRect();
    if (fazend.left == maresq.right) {
        console.log("Zarpando....");
        move(fazendeiro, fazend.left, (mardir.left - 450));
    } else if (fazend.right == mardir.left) {
        console.log("Zarpando...");
        move(fazendeiro, fazend.left, maresq.right);
    }
}