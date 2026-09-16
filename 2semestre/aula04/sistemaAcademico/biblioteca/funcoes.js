potencia, restint, fatorial, somatorio

function potencia(a, b){
    return a ** b;
}

function restint(a, b){
    return Math.trunc(a%b);
}
function fatorial(a){
    if(a <=0){
        return 1;
    }
    return a * Number(fatorial(a-1));
}
function somatorio(a, b){
    
    if (b == a) {
        return a;
    }
    else {
        return  b + Number(somatorio(a, b-1));
    }
}

export{
    potencia,
    restint,
    fatorial,
    somatorio
};