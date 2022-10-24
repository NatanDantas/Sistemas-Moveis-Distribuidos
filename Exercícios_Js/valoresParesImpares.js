<script>
    let val1 = prompt("Digite o valor:");
    let val2 = prompt("Digite o valor:");

    if (parseInt(val1) % 2 == 0 || parseInt(val2) % 2 == 0) {
        alert(val1 + " e " + val2 + "são Pares");
} else if (parseInt(val1) % 2 !== 0 || parseInt(val2) % 2 !== 0) {
        alert(val1 + " e " + val2 + " são Ímpares");
} else if (parseInt(val1) % 2 !== 0 || parseInt(val2) % 2 == 0) {
        alert(val1 + " é Ímpar " + val2 + " é Par");
} else if (parseInt(val1) % 2 == 0 || parseInt(val2) % 2 !== 0) {
        alert(val1 + " é Par " + val2 + " é Ímpar");
};
</script>
