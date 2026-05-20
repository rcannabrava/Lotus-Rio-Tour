
# Contributing

Obrigado por considerar contribuir com o Lotus Rio Tour.

## Tecnologias utilizadas

- React
- TypeScript
- TanStack Start
- Vite
- Tailwind CSS
- Cloudflare Workers
- Tolgee

## Pré-requisitos

Antes de começar, você precisa ter instalado:

- Node.js
- npm
- Git

## Rodando o projeto localmente

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/lotusriotour.git
```

Entre na pasta:

```bash
cd lotusriotour
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Para testar o ambiente Cloudflare localmente:

```bash
npx wrangler dev
```

## Padrão de commits

Este projeto utiliza Conventional Commits.

Exemplos:

```bash
feat: add testimonials section
fix: correct language detection bug
refactor: simplify translation setup
docs: update README
style: improve mobile spacing
```

## Estrutura básica do projeto

```txt
src/
├── components/
├── routes/
├── lib/
├── styles/
├── assets/
└── server.ts
```

## Pull Requests

Antes de abrir um PR:

* Verifique se o projeto builda corretamente
* Evite commits desnecessários
* Mantenha o código consistente com o padrão atual
* Teste as alterações localmente

## Branches

Sugestão de nomenclatura:

```bash
feature/nome-da-feature
fix/nome-do-fix
refactor/nome-do-refactor
```

## Licença

Ao contribuir com este projeto, você concorda que seu código será disponibilizado sob a mesma licença do repositório.
