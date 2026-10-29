# Jovem Paulista

Rede de conexão empresarial e networking profissional, inspirada na proposta do LinkedIn. O sistema reúne uma área de acesso (login, cadastro e recuperação de senha) e uma área restrita com perfil, feed de publicações, sugestões de conexões e vagas em destaque.

> **Status:** protótipo de interface (front-end). Autenticação, cadastro e recuperação de senha são **apenas visuais** e não se comunicam com um servidor.

## Objetivo

Oferecer a base visual e estrutural de uma plataforma onde profissionais possam:

- criar um perfil informando nome, habilidades e formação;
- acessar uma área restrita de forma segura (com logoff);
- acompanhar publicações, conhecer pessoas e encontrar oportunidades de trabalho.

O projeto serve como ponto de partida: a interface e o fluxo de navegação já estão prontos, e os pontos de integração com uma API real estão identificados no código.

## Funcionalidades

| Funcionalidade | Rota | Descrição |
| --- | --- | --- |
| Login | `/login` | Campos de e-mail e senha editáveis. Ao enviar, o usuário entra na área restrita. |
| Cadastro | `/cadastro` | Nome completo, e-mail, senha, habilidades e formação. Ao enviar, o nome é salvo e o usuário entra. |
| Esqueci minha senha | `/esqueci-senha` | Campo de e-mail e mensagem de confirmação de envio do link de redefinição. |
| Área restrita | `/home` | Perfil, feed, sugestões de conexão e vagas. Exige sessão ativa. |
| Logoff | botão **Sair** | Encerra a sessão e retorna ao login. |

## Como funciona

1. **Cadastro:** o usuário preenche o formulário. Apenas o **nome completo** é gravado no `localStorage` (chave `jovempaulista:nome`). E-mail, senha, habilidades e formação não são armazenados.
2. **Sessão:** o estado de autenticação fica **somente em memória** (`AuthContext`). Ao recarregar a página ou clicar em **Sair**, a sessão termina e o acesso à `/home` volta a exigir login.
3. **Login:** como não há servidor, qualquer envio é aceito. O nome exibido vem do `localStorage`; se o usuário nunca se cadastrou nesse navegador, aparece "Usuário".
4. **Header:** exibe o nome (e a inicial em um avatar) no **canto superior direito**, ao lado do botão **Sair**.
5. **Proteção de rotas:** o componente `ProtectedRoute` redireciona para `/login` quando não há sessão ativa.
6. **Conteúdo:** o feed permite publicar novos textos (mantidos apenas na tela), e o botão "+ Conectar" marca a solicitação como enviada e incrementa o contador de conexões. Os dados iniciais vêm de `src/data/mock.ts`.

## Tecnologias

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router v6](https://reactrouter.com/)

Identidade visual em tons de **azul e branco**.

## Estrutura do projeto

```
src/
├── components/     # Logo, Field, Button, AuthCard, Header, ProfileCard, Feed, Sidebar, ProtectedRoute
├── pages/          # Login, Register, ForgotPassword, Home
├── context/        # AuthContext (sessão e nome do usuário)
├── services/       # api.ts (camada de integração com a API)
├── data/           # mock.ts (dados de exemplo)
├── App.tsx         # definição das rotas
├── main.tsx        # ponto de entrada
└── index.css       # importa o Tailwind
```

## Como executar

Pré-requisito: Node.js 18 ou superior (recomendado 20+).

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # verificação de tipos + build de produção
npm run preview   # pré-visualização do build
```

## Integração com a API

Todas as chamadas ao servidor estão centralizadas em `src/services/api.ts`. Hoje elas apenas simulam uma pequena espera. Para integrar de verdade:

1. Copie `.env.example` para `.env` e defina `VITE_API_URL`.
2. Em cada função (`loginRequest`, `registerRequest`, `forgotPasswordRequest`, `publishPostRequest`), descomente o bloco `fetch` indicado por `TODO (integração API)` e ajuste os endpoints.
3. Armazene o token retornado no login e valide a sessão a partir dele (hoje a sessão é só em memória).
4. Substitua os dados de `src/data/mock.ts` por chamadas reais (feed, sugestões e vagas).

## Limitações atuais

- Não há validação de formulários, tratamento de erros de rede nem verificação de e-mail ou senha.
- Publicações e conexões não são persistidas.
- A sessão não sobrevive ao recarregamento da página.