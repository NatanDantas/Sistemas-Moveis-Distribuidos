<script>
let val = prompt("Digite o valor:");

if (parseInt(val) % 10 == 0) {
    alert("Valor é divisível por 10");
} else if(parseInt(val) % 5 == 0) {
    alert("Valor é divisível por 5");
} else if(parseInt(val) % 2 == 0){
	alert("Valor é divisível por 2");
}
</script>