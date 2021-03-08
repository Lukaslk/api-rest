Politica de acesso

O API proposto tem a função de ser um repositório simples para gerenciar as tecnologias de mercado com seus respectivos nomes, links de documentação, descrições e tags.

Padrão e convenção

REST

REST significa Representational State Transfer. Traduzingo para o português, Transferência de Estado Representacional. Consiste em princípios, regras e constraints que quando seguidas, permitem a criação de um projeto com interfaces bem definidas. 

Código de retorno

Os códigos de status de resposta fazem parte da especificação HTTP, os que apareceram no projeto são:
200 OK - Código geral de resposta. Usado normalmente para indicar sucesso na operação.
201 CREATED - Uma criação foi realizada com sucesso.
404 NOT FOUND - Indica que o recurso solicitado não foi encontrado ou para mascarar um erro 401 ou 403 por razões de segurança.
500 INTERNAL SERVER ERROR - O servidor ainda não suporta a funcionalidade ativada.
JSO

JSON (JavaScript Object Notation - Notação de Objetos JavaScript) é uma formatação leve de troca de dados. Para seres humanos, é fácil de ler e escrever. Para máquinas, é fácil de interpretar e gerar.

Necessário ter um banco de dados condizente com os campos mensionados.
Para funcionamento, instalar o npm.

Inserção de produto
Abaixo uma demostração do padrão para inserção de itens na API via postman:

Selecionar opção POST, colocar o endereço do server e inserir o seguinte códido:

{
    "name": "node",
    "link": "https://nodejs.org/en/",
    "description": "O Node.js pode ser definido como um ambiente de execucao Javascript server-side",
    "tags": "node"
}

Apos apertar o send, a resposta do Postman:

{
    "response": {
        "mensagem": "Produto inserido com sucesso",
        "produtoCriado": {
            "name": "node",
            "link": "https://nodejs.org/en/",
            "description": "O Node.js pode ser definido como um ambiente de execucao Javascript server-side",
            "tags": "node",
            "request": {
                "url": "http://localhost:5000/produtos"
            }
        }
    }
}

Recuperação dos itens

Os produtos recebem um índice (ID) único e pode ser agregado uma tag para a sua recuperação, sendo elas tanto recuperação total como busca avulsa.

Atualização
O API permite fazer alteração posteriores. Segue exemplo abaixo, via postman, sua execução.
Selecionar opção PATCH, colocar o endereço do server e inserir o seguinte códido:


{
	"id_produto": 10,
	"name": "node",
	"link": "https://nodejs.org/en/",
	"description": "O Node.js pode ser definido como um ambiente de 	execucao Javascript server-side",
	"tags": "node"
}

apos apertar send, ira ser atualizada a tag, ao qual era “a”, e agora passou a ser “node”:

{
    "response": {
        "mensagem": "Produto alterado com sucesso",
        "produtoAtualizado": {
            "id_produto": 10,
            "name": "node",
            "link": "https://nodejs.org/en/",
            "description": "O Node.js pode ser definido como um ambiente de execucao Javascript server-side",
            "tags": "node",
            "request": {
                "url": "http://localhost:5000/produtos/10"
            }
        }
    }
}

Remoção de item
O Api permite remover itens por inteiro a partir do índice (ID), Segue exemplo via postman:
Selecionar opção DELETE, colocar o endereço do server e inserir o seguinte códido:

Código inserido:

{
    "id_produto": 10
}

Apos apertar o send, tera a seguinte resposta do Postman:

{
    "response": {
        "mensagem": "Produto removido com sucesso",
        "request": {
            "url": "http://localhost:5000/produtos"
        }
    }
}