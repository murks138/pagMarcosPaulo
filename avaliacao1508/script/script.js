function calcular() {
    const idades = [
        parseInt(document.getElementById('1').value),
        parseInt(document.getElementById('2').value),
        parseInt(document.getElementById('3').value),
        parseInt(document.getElementById('4').value),
        parseInt(document.getElementById('5').value)
    ];

    let faixaEtariaAte15 = 0;
    let faixaEtaria16a40 = 0;
    let faixaEtariaAcima40 = 0;
    let maiorIdade = idades[0];
    
    idades.forEach(idade => {
        if (idade <= 15) {
            faixaEtariaAte15++;
        } else if (idade <= 40) {
            faixaEtaria16a40++;
        } else {
            faixaEtariaAcima40++;
        }

        if (idade > maiorIdade) {
            maiorIdade = idade;
        }
    });

    document.querySelector('table tbody').innerHTML = 
        '<tr>' +
            '<td>' + faixaEtariaAte15 + '</td>' +
            '<td>Até 15 anos</td>' +
        '</tr>' +
        '<tr>' +
            '<td>' + faixaEtaria16a40 + '</td>' +
            '<td>De 16 a 40 anos</td>' +
        '</tr>' +
        '<tr>' +
            '<td>' + faixaEtariaAcima40 + '</td>' +
            '<td>Acima de 40 anos</td>' +
        '</tr>';

    document.getElementById('resultado').innerText = 'A maior idade é: ' + maiorIdade;
}