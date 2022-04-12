

function texto(n){
    let pos = 0;
    let constellationLength = n.length;

    while (pos < constellationLength)
    {
        if (n[pos] == "D" || n[pos] == "d"){
            console.log(pos);
        }
        pos += 1;
    } return constellationLength;
}

texto("Eduardo");