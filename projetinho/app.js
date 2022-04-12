function alterarLetras (spaceship, letraAlt, alterar){
    let newSpaceship = "";
    if (Number(spaceship, letraAlt, alterar))
        throw new Error (" digite apenas letras");
    for(let i = 0; i < spaceship.length; i++){
        if(spaceship[i] == letraAlt){
            newSpaceship += alterar;
        } else {
            newSpaceship += spaceship[i]
        }
    }
    
    alert("o novo nome da nave é " + newSpaceship);
    
}

function main (){
    try {
        
        let a = prompt("Digite Um Nome");
        let b = prompt("digite a letra que deseja alterar no nome");;
        let c = prompt("digite a letra que vai substituir a letra que voce quer alterar");
    
        alterarLetras(a, b, c);
    } catch (error) {
        alert("error " + error.message);
    }

}

main();