<script>
let val1 = prompt("Digite o valor:");
let val2 = prompt("Digite o valor:");

if (parseInt(val1) % 2 == 0 || parseInt(val2) % 2 == 0) {
    alert("Valor"+ val1 + val2 +"são Pares");
} else if (parseInt(val1) % 2 !== 0 || parseInt(val2) % 2 !== 0) {
	alert("Valor " + val1 + val2 + " são Ímpares");
} else if (parseInt(val1) % 2 !== 0) {
}
</script>
