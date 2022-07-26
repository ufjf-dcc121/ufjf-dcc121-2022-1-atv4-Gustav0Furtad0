const verificaWL = () => {
    /*
        função responsável pela verifcação de derrota ou vitória
        com base no elemento pai dos mesmos
    */
    //captura elemento pai dos produtos
    const lobo = document.querySelector("#lobo").parentNode.id;
    const ovelha = document.querySelector("#ovelha").parentNode.id;
    const alface = document.querySelector("#alface").parentNode.id;
    //verifica se produtos estão sozinho na margem e vitória
    if (lobo == 'mardireita' && ovelha == 'mardireita' && alface == 'mardireita') {
        popup(
            "Você Venceu!!!",
            "Você conseguiu deslocar os três produtos sem perdas, parabéns!",
            "Jogar novamente?"
        );
    } else if (lobo == ovelha && lobo != margemBarco) {
        popup(
            "Você Perdeu! :(",
            "O lobo comeu a ovelha, eles ficaram sozinhos na margem...",
            "Tentar de novo?"
        );
    } else if (ovelha == alface && ovelha != margemBarco) {
        popup(
            "Você Perdeu! :(",
            "A ovelha comeu o alface, eles ficaram sozinhos na margem...",
            "Tentar de novo?"
        );
    }
};

const popup = (tit, message, btmessage, reset = true) => {
    //função insere um popup na tela com um botão de reset e uma mensagem
    let mensagem = `
    <div class="mensagemfundo" id="popup">
        <div class="mensagemcorp">
            <h3>${tit}</h3>
            <p>${message}</p>
            <button onclick="resmensagem(${reset})">${btmessage}</button>
        </div>
    </div>
    `;
    document.querySelector("body").innerHTML += mensagem;
};

const resmensagem = (reset = true) => {
    //função verifca se é necessário reload
    if(reset)
        document.location.reload(true);
    else
        document.querySelector("#popup").remove();
};