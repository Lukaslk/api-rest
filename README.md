# Description

Um API REST com persistência de dados para uma aplicação,sendo um simples repositório para gerenciar as cadastros, cada qual  
com seus respectivos nome, links de documentação, descrições e tags.

# Packages

* body-parser: "^1.19.0",
* express: "^4.17.1",
* mysql: "^2.18.1",
* mysql2: "^2.2.5".

# Necessary programs

Um editor de código-fonte(Visual studio code, por exemplo) e uma ferramenta para fazer teste(como o Postman).
Também é necessário criar uma tabela com os mesmos nomes conforme imagem abaixo:

O database deve se chamar "tecnologia" e a tabela "produtos", ao qual irá receber 5 colunas: "id_produto", "name", "link", "description" e "tags", conforme imagem abaixo:

 ![tecnologia](https://github.com/Lukaslk/api-rest/blob/main/tabela_tecnologias.png) 

# Getting Started

1. Faça o download ou clone este repositório;
2. Abra seu Terminal/Prompt e navegue até o diretório rest;
3. Inicie o server com "node server.js";

Com o servidor funcionando abra o Postman e siga Script de teste para as rotas propostas:

Para adicionar um cadastro usando o metodo POST:

 ![post](https://github.com/Lukaslk/api-rest/blob/main/metodo_POST.gif)
 
 Para atualizar um cadastro com o metodo PATCH:
 
 ![patch](https://github.com/Lukaslk/api-rest/blob/main/metodo_PATCH.gif)
  
 Para recuperar todos os cadastros com o metodo GET:
 
  ![get](https://github.com/Lukaslk/api-rest/blob/main/metodo_GET_all.gif)
  
 Para recuperar cadastros pela(s) tag(s):
 
 ![getTag](https://github.com/Lukaslk/api-rest/blob/main/metodo_GET_tags.gif)
 
Para deletar um cadastro:

 ![delete](https://github.com/Lukaslk/api-rest/blob/main/metodo_DELETE.gif)
