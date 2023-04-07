# Desafio-Fullstack
# Para Rodar o projeto...
inicie com o comando de instalação Yarn
depois é so executar o comando yarn dev para rodar a aplicação.

# Dentro da aplicação
## Temos as seguintes Rotas...

### 01 POST/users
Essa Rota é responsavel por cadastrar novos usuarios, ela retorna o usuario sem o password

### 02 POST/login
Essa é a rota responsavel por fazer o login ela retorna o token de acesso.

### 03 POST/contact
Essa rota é responsavel por cadastrar novos contados ligando-os ao usuario logado, ela retorna o contato criado.

### 04 GET/contact
Essa rota é responsavel por retornar todos os contatos do usuario logado, de forma que contatos cadastrados por outros usuarios não serão retornados.

### 05 DELETE/contact/:id
Essa rota é resposavel por apagar um contato utilizando o id passado por parametro.
