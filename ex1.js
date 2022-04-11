function triangulo (n){
    let i, j;

    for (i = 1; i <= n; i++) {
        for(j = n - i; j >= 1; j--)
        console.log("");
        for(j = 1; j <= i; j++)
        console.log("*");
        console.log("");
        
    }
}

triangulo(5);