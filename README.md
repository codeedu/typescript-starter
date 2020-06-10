<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://fullcycle.com.br/wp-content/themes/fullcycle-blog/application/img/logo-fullcycle.png"/></a>
</p>

## Descrição

Projeto Front-end para se começar com TypeScript de forma produtiva.

## Motivação

O entendimento do que é o TypeScript é simples, todos sabemos que é uma linguagem de programação com tipagem 
para dar outra dinâmica a programação JavaScript.

Instalar o TypeScript e roda-lo em cima de scripts .ts também é simples.

Porém, na hora de criar aplicações WEB a história pode ser um pouco diferente. 
Temos inicialmente dois problemas:

* Qual sistema de módulos utilizar para carregar os arquivos JavaScript?
* Como organizar os arquivos de bibliotecas para usar somente os arquivos necessários?

Hoje já temos o sistema de módulos como ES6 Modules que ajudam a padronizar o carregamento de módulos JavaScript, 
porém muitos browsers ainda não suportam este sistema e existem muitas máquinas
que ainda rodam browsers antigos, então retrocompatibilidade é essencial para aplicações WEB.

E mesmo trabalhando com ES6 Modules e se temos várias bibliotecas de terceiros a usar? Queremos uma forma simples invocar estas bibliotecas
e colocar no projeto apenas os arquivos necessários do projeto.

Lembre-se que o TypeScript não irá ajudar a tomar estas decisões.

O TypeScript apenas converterá os arquivos .ts para .js para a EcmaScript especificada e 
ficará por sua conta ter um carregamento de módulos funcionando no browser: AMD, CommonJS, ES6 Modules e etc.

Isto pode desestimular seu uso ou desincentivar quem está começando, pois organizar módulos e bibliotecas de terceiros não é simples.

Este pacote é uma forma produtiva de se começar com TypeScript.

Veja o vídeo no nosso canal do Youtube para entender mais detalhes: [https://www.youtube.com/watch?v=9qJT3t9syFM](https://www.youtube.com/watch?v=9qJT3t9syFM)

## Instalação

* Node.js
* Faça o clone do projeto
* Execute o comando ```npm install```

## Rodar o projeto

* ```npm start``` - Compila o TypeScript e roda um servidor em http://localhost:9000 para testar o projeto.
* ```npm run dev``` - Compila o TypeScript em modo desenvolvimento.
* ```npm run prod``` - Compila o TypeScript em modo produção.
