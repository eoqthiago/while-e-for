const readline = require('prompt-sync')();

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
    
    console.log(newSpaceship);
}

function main (){
    try {
        console.log("Digite Um Nome");
        let a = readline();
        console.log("digite a letra que deseja alterar no nome");
        let b = readline();
        console.log("digite a letra que vai substituir a letra que voce quer alterar");
        let c = readline();
    
        alterarLetras(a, b, c);
    } catch (error) {
        console.log("error " + error.message);
    }

}

main();