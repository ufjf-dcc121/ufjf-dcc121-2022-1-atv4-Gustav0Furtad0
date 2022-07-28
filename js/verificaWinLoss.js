const verificaWL = () => {
    const popup = (tit, message, btmessage) => {
        let mensagem = `
        <div class="mensagemfundo">
            <div class="mensagemcorp">
                <h3>${tit}</h3>
                <p>${message}</p>
                <button onclick="resmensagem()">${btmessage}</button>
            </div>
        </div>
        `;
        document.querySelector("body").innerHTML += mensagem
    }

    const lobo = document.querySelector("#lobo").parentNode.id;
    const ovelha = document.querySelector("#ovelha").parentNode.id;
    const alface = document.querySelector("#alface").parentNode.id;
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

const resmensagem = () => {
    document.location.reload(true);
}