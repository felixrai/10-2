function adicionarLinhas() {
  var valorInput = document.getElementById("valor").value;
  var mensagem = document.getElementById("mensagem");
  var tabela = document.getElementById("tabela");

  // Limpa a mensagem anterior
  mensagem.innerHTML = "";

  // Verifica se o valor é numérico
  if (isNaN(valorInput)) {
    mensagem.innerHTML = "Só são aceitos valores numéricos.";
    return;
  }

  // Converte o valor para um número
  var valor = parseInt(valorInput);

  // Verifica se o valor está dentro do intervalo de 1 a 10
  if (valor < 1 || valor > 10) {
    mensagem.innerHTML = "Valores válidos estão entre 1 e 10.";
    return;
  }

  // Adiciona o número de linhas equivalente ao valor na tabela
  for (var i = 0; i < valor; i++) {
    var row = tabela.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Valor " + (i + 1);
    cell2.innerHTML = "Outro Valor " + (i + 1);
  }
}
