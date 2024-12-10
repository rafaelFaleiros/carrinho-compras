let valorTotal = 0;
limpar();


function adicionar(){
    //recupera dados
    let IdItem = document.getElementById('produto').value;
    let nomeProduto = IdItem.split('-')[0];
    let valor = IdItem.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value; 
    //calcular preço e subtotal
    let valorSoma = valor * quantidade;
    //adiciona na lista
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul"> ${quantidade} </span> ${nomeProduto} <span class="texto-azul">R$${valorSoma}</span>
  </section>`;

    //soma o valor
    valorTotal = valorTotal + valorSoma;
    let campoTotal = (document.getElementById('valor-total'));
    campoTotal.textContent = `R$ ${valorTotal}`;
    
    document.getElementById('quantidade').value = 0;

}

function limpar(){
valorTotal = 0;
document.getElementById('lista-produtos').innerHTML  = ' ';
document.getElementById('valor-total').textContent = 'R$ 0';
}