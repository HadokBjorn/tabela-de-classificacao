var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
var gui = { nome: "Gui", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
var esau = { nome: "Esaú", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
var jogadores = [rafa, paulo, gui, esau];

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);
esau.pontos = calculaPontos(esau);

console.log(rafa);
console.log(paulo);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}
function exibeJogadorNaTela(jogadores) {
  var elemento = "";
  for (i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabela = document.getElementById("tabelaJogadores");
  tabela.innerHTML = elemento;
}
exibeJogadorNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadorNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadorNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadorNaTela(jogadores);
}