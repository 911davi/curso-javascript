// Curso de JavaScript
// Aula 01 - O que o JavaScript é capaz de fazer?

// Exemplo 1: Exibindo uma mensagem no navegador
alert('Olá, mundo')

// Exemplo 2: Alterando o estilo da página
document.body.style.background = 'black'

// Exemplo 3: Acessando elementos do HTML (DOM)
const imagem = document.querySelector('img')

// Verifica se a imagem existe antes de tentar manipulá-la
if(imagem){
    imagem.style.filter = 'grayscale(100%)'
    imagem.style.visibility = 'hidden'    
}

// Obs: esses comandos foram inicialmente demonstrados no console do navegador
