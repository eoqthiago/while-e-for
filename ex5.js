function triangulo(n)
{
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j <= i; j++)
        {
            console.log("*");
        }
        console.log();
    }
}

triangulo(5);