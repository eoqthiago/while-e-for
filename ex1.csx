public void triangulo (int n)
{

    int i, j;
    for(i = 1; i <= n; i++){
        for(j = n - i; j >= 1; j--) // imprime os espaços
        Console.Write("");
        for(j = 1; j <= i; j++) // imprime os *
        Console.Write("*");
        Console.WriteLine("");
    }
}

triangulo(5);