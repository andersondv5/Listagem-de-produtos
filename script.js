let produtos = [];

function cadastrarProduto() {
  const nome = document.getElementById('nome').value;
  const descricao = document.getElementById('descricao').value;
  const valor = parseFloat(document.getElementById('valor').value);
  const disponivel = document.getElementById('disponivel').value;

  if (!nome || !descricao || !valor) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const produto = {
    nome,
    descricao,
    valor,
    disponivel
  };
  produtos.push(produto);

  document.getElementById('nome').value = '';
  document.getElementById('descricao').value = '';
  document.getElementById('valor').value = '';
  document.getElementById('disponivel').value = 'sim';

  atualizarListagem();
}

function atualizarListagem() {
  produtos.sort((a, b) => a.valor - b.valor);

  const tabela = document.getElementById('tabela-produtos').getElementsByTagName('tbody')[0];
  tabela.innerHTML = '';

  produtos.forEach(produto => {
    const tr = document.createElement('tr');
    
    const tdNome = document.createElement('td');
    tdNome.textContent = produto.nome;
    tr.appendChild(tdNome);
    
    const tdValor = document.createElement('td');
    tdValor.textContent = `R$${produto.valor.toFixed(2)}`;
    tr.appendChild(tdValor);
    
    tabela.appendChild(tr);
  });
}
