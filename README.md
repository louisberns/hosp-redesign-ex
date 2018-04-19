# Exemplo Layout Aplicação Web
Página desenvolvida para exemplificar a utilização do CSS para animações e outras microinterações com auxílio do Javascript (VanillaJS) e ainda, a aplicação do Flexbox CSS para o layout.

## Open front-end workshop/study
Essa aplicação foi desenvolvida com o intuito de fornecer uma visualização prática às aplicações de interações com CSS e JS, sem a utilização de frameworks, apenas uma biblioteca que facilita a aplicação e entendimento do Flexbox, [The Grid CSS](http://quinalha.me/the-grid/).

Será utilizada para apresentações de workshops sobre padrões de CSS e exemplo para estudo de interações que podem engajar mais o usuário.

## Interface
A interface foi desenvolvida com o propósito de mostrar microinterações e responsividade do sistema.

### Mobile
![mobile]()
![mobile menu open]()

### Desktop
![desktop]()
![desktop menu open]()

## Tecnologias utilizadas
O projeto foi desenvolvido utilizando Javascript (Vanilla JS, sem frameworks) e CSS com [SASS](https://sass-lang.com/).

Também utilizado o Task Runner [Gulp](https://gulpjs.com/) para processar os arquivos SCSS, minificar arquivos e gerar o server com browser sync e watch.

- CSS
  - Flexbox - [The Grid CSS](http://quinalha.me/the-grid/)
  - Animations
  - @ Media Querys
  - Transition e transform
- JS (Vanilla JS)
  - Arrow functions
  - Funções ternárias
  - Event Listeners
- Task Runner [Gulp](https://gulpjs.com/)
- Pré-processador CSS [SASS](https://sass-lang.com/)

## Instalação
Clone o projeto para sua máquina
`$ git clone https://github.com/louisberns/hosp-redesign-ex.git`

Instale as dependências do projeto
```bash
$ npm i
// ou
$ yarn
```

Rode o projeto com o [Gulp](https://gulpjs.com/)
`$ gulp default`
