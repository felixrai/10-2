function adicionarLinhas() {
  var valorInput = document.getElementById("valor").value;
  var mensagem = document.getElementById("mensagem");
  var tabela = document.getElementById("tabela");

  
  mensagem.innerHTML = "";

  
  if (isNaN(valorInput)) {
    mensagem.innerHTML = "Só são aceitos valores numéricos.";
    return;
  }

  
  var valor = parseInt(valorInput);

  
  if (valor < 1 || valor > 10) {
    mensagem.innerHTML = "Valores válidos estão entre 1 e 10.";
    return;
  }

  
  for (var i = 0; i < valor; i++) {
    var row = tabela.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Valor " + (i + 1);
    cell2.innerHTML = "Outro Valor " + (i + 1);
  }
}
