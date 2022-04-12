public void main()
{
    string constellation = "Andromeda";
    int pos = 0;
    int constellationLength = constellation.Length();

    while (pos < constellationLength)
    {
        if (constellation[pos] == "a" || constellation[pos] == "A"){
            Console.WriteLine(pos);
        }
    }
}