let var1 = prompt("Digite número:");

const multiploDeTres = (x) => {
    x = parseInt(x) % 3;
    return [x];
}

const [x] = multiploDeTres(var1);
if(x == 0){
alert("O número " + var1 + " é múltiplo de 3 ");
}else{
alert(var1 + " não é múltiplo de 3");
}