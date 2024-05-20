const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))
function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id)
  const categoria = elementoBtn.value
  let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
  exibirOsLivrosNaTela(livrosFiltrados)
  if (categoria == 'disponivel') {
    exibirValorTotalDosLivrosDisponiveisNaTela()
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela() {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `${livrosDisponiveis.length} livros disponíveis`
}