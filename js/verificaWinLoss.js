const verificaWL = () => {
    
    const popup = (tit, message) => {
        let mensaegm = `
        
        `; 
    }


    const lobo = document.querySelector("#lobo").parentNode.id;
    const ovelha = document.querySelector("#ovelha").parentNode.id;
    const alface = document.querySelector("#alface").parentNode.id;
    if (lobo == 'mardireita' && ovelha == 'mardireita' && alface == 'mardireita') {
        console.log("Você venceu!")
    } else if (lobo == ovelha && lobo != margemBarco) {
        console.log("Perdeu: Lobo pegou a ovelha!!");
    } else if (ovelha == alface && ovelha != margemBarco) {
        console.log("Perdeu: Ovelha comeu o alface!!");
    }
};