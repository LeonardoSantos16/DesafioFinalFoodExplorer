# Front end: Food Explorer
O Desafio Final Food Explorer é uma aplicação web desenvolvida para gerenciar pratos de um restaurante, com funcionalidades de autenticação e controle de acesso. A plataforma permite que administradores adicionem, atualizem e excluam pratos, enquanto clientes podem visualizar detalhes e navegar pelas opções do menu. O projeto foi desenvolvido utilizando React, com rotas distintas para usuários comuns e administradores. A aplicação oferece uma interface intuitiva e interativa, além de garantir segurança por meio de autenticação baseada em token JWT.

### Contexto de Autenticação e Hook

#### `AuthenticatorProvider`

Este componente fornece contexto para gerenciar a autenticação do usuário, armazenando os dados do usuário e o token no `localStorage`. Também configura os cabeçalhos da API com o token de autorização para as requisições autenticadas.

**Principais Funcionalidades:**

- **Login:** Valida as credenciais do usuário via API `/sessions`, armazena os dados do usuário e o token no `localStorage` e atualiza os cabeçalhos da API.
- **Logout:** Limpa os dados do usuário e o token no `localStorage` e reinicia o estado de autenticação.

#### Hook `useAuth`

Este hook acessa o contexto de autenticação, fornecendo os dados do usuário, o estado de autenticação (`isAdmin`) e funções para gerenciar login e logout.

### Rotas

#### `AuthRoutes`

- **Responsabilidade:** Gerencia as rotas de autenticação, incluindo login e registro.
- Rotas:
  - `"/"`: Página de login (`SignIn`).
  - `"/register"`: Página de registro de novo usuário (`SignUp`).

#### `CustomerRoutes`

- **Responsabilidade:** Gerencia as rotas para os usuários comuns, como visualizar a página inicial e detalhes do prato.
- Rotas:
  - `"/"`: Página inicial (`Home`).
  - `"/details/:id"`: Página de detalhes de um prato específico (`DetailsPrate`).

#### `AppRoutes`

- **Responsabilidade:** Gerencia as rotas principais, incluindo as de criação e atualização de pratos, disponíveis para administradores.
- Rotas:
  - `"/"`: Página inicial (`Home`).
  - `"/new"`: Página de criação de prato (`CreatePrate`).
  - `"/details/:id"`: Página de detalhes de um prato específico (`DetailsPrate`).
  - `"/update/:id"`: Página de edição de prato (`UpdatePrate`).

Essas rotas são usadas para definir o comportamento do sistema baseado no tipo de usuário (administrador ou cliente).

### Instruções para Execução do Projeto

Para rodar este projeto, siga os passos abaixo:

1. **Instalar dependências:**

   - Abra o terminal no diretório do projeto e execute:

     ```
     npm install
     ```

2. **Executar o ambiente de desenvolvimento:**

   - Para iniciar o projeto em modo de desenvolvimento, use:

     ```
     npm run dev
     ```

   - Isso irá iniciar o servidor de desenvolvimento com Vite.


   ## Site da aplicação

   https://desafio-final-explorer.netlify.app/

   Para logar como admin use: email [leo@gmail.com](mailto:leo@gmail.com) e senha: leo123

   ## Autor

   Leonardo Santos
