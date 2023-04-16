<h1>Desafio-Fullstack</h1>

<h2>Introdução</h2>
Este é um projeto Fullstack para gerenciamento de contatos, utilizando Node.js, TypeScript, Express e TypeORM no backend e React no frontend. Antes de executá-lo, certifique-se de ter o Yarn e o Node.js instalados em seu computador.
<br><br>

<h2>Instalação</h2>
Abra seu terminal e navegue até o diretório onde deseja armazenar o projeto e clone o repositório.
Depois de clonar o repositório, navegue até o diretório raiz do projeto e instale as dependências necessárias executando o comando: <strong>yarn</strong>.<br>
Em seguida, execute as migrations com o comando: yarn typeorm migration:<strong>run -d src/data-source</strong>
<br><br>

<h2>Execução</h2>
Para executar a aplicação, abra um terminal e navegue até o diretório raiz do projeto e execute o comando: <strong>yarn dev</strong>.<br>
A aplicação estará disponível no endereço http://localhost:3000.
<br><br>

<h2>Rotas</h2>
A aplicação possui as seguintes rotas principais:
<br><br>

<h3>POST/users</h3>
Esta rota é responsável por cadastrar novos usuários e retorna o usuário sem o password.
<br><br>

<h3>POST/login</h3>
Esta rota é responsável por fazer o login e retorna o token de acesso.
<br><br>

<h3>POST/contact</h3>
Esta rota é responsável por cadastrar novos contatos, ligando-os ao usuário logado, e retorna o contato criado.
<br><br>

<h3>GET/contact</h3>
Esta rota é responsável por retornar todos os contatos do usuário logado, de forma que contatos cadastrados por outros usuários não serão retornados.
<br><br>

<h3>DELETE/contact/:id</h3>
Esta rota é responsável por apagar um contato utilizando o id passado por parâmetro.
<br><br>

<h2>Conclusão</h2>
Este é um projeto simples, mas funcional, para gerenciamento de contatos, desenvolvido como um desafio Fullstack. Sinta-se à vontade para usá-lo como base para seus próprios projetos!