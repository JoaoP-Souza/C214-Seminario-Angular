Este Projeto tem o objetivo de abordar o uso de conceitos da engenharia de software como a implementação de uma pipeline pelo github actions, testes unitários que testam métodos desenvolvidos e validam novas iterações que passam pela esteira de CI/CD. 

O framework escolhido foi o Angular, usado pra criar uma aplicação web simples que realiza um CRUD completo e exibe uma lista de filmes com informações cadastradas pelo usuário.

[![CI Class](https://github.com/JoaoP-Souza/C214-Seminario-Angular/actions/workflows/ci.yml/badge.svg)](https://github.com/JoaoP-Souza/C214-Seminario-Angular/actions/workflows/ci.yml)

Ao clonar, abra o terminal na pasta MyCinemaList e insira os seguintes comandos

    npm i - instala dependências do projeto
    
    npm install -g @angular/cli@15 - instala a versão 15 do angular no projeto

npm install --save-dev jasmine - instala o framework jasmine de testes
    
    ng add @angular/material - adiciona a lib de ui angular Material UI

Após executá-los, abra um prompts de comando e execute,

    npm test, para executar os testes unitários, usando da ferramenta Jasmine
    
    ng serve --open, para iniciar a aplicação web em um ambiente local
