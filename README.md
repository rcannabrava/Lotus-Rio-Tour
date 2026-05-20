# Lotus Rio Tour

Website oficial da Lotus Rio Tour, empresa de turismo privativo no Rio de Janeiro fundada e conduzida por Patricia Cannabrava. O site apresenta os tours disponíveis, depoimentos de clientes, informações sobre a guia e um canal direto de contato via WhatsApp.

## Sobre o projeto

Patricia atende turistas do mundo inteiro há mais de 10 anos, com fluência em português, inglês e espanhol. O site foi construído para mostrar a experiência que ela oferece: personalizada, elegante e sem burocracia. Tudo é privativo, do pickup ao desembarque no hotel.

## Stack

- React 19 com TypeScript
- TanStack Start (SSR) e TanStack Router (file-based routing)
- TanStack Query para gerenciamento de estado assíncrono
- Tailwind CSS v4 para estilização
- Framer Motion para animações
- Tolgee para internacionalização (PT-BR, EN, ES)
- Swiper para o carrossel de depoimentos
- Metadados de SEO, Open Graph e Twitter Cards configurados por rota via TanStack Router (`head()`)
- Cloudflare Workers como runtime de produção
- Vite como bundler

## Estrutura do projeto

```
src/
  assets/          # Imagens e SVGs
  components/
    layout/        # Navbar, Footer, WhatsApp float, LanguageSwitcher
    sections/      # Hero, About, Tours, WhyLotus, Testimonials, FAQ, CTA
  constants/       # Dados do site (nome, links, WhatsApp)
  data/            # Tours, depoimentos e FAQ
  i18n/            # Configuração do Tolgee e lista de idiomas
  lib/             # Utilitários, error handling
  routes/          # Páginas (file-based via TanStack Router)
  tests/           # Testes unitários com Vitest
```

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Testes

```bash
npm run test
```

Para rodar com cobertura:

```bash
npm run test:coverage
```

## Qualidade de código

```bash
# Lint
npm run lint

# Typecheck
npm run typecheck

# Formatação
npm run format
```

O projeto usa Husky com lint-staged para checar lint e formatação automaticamente antes de cada commit.

## Idiomas suportados

| Código | Idioma     |
|--------|------------|
| en     | English    |
| pt-BR  | Português  |
| es-ES  | Español    |

O idioma é detectado automaticamente pelo browser e armazenado via `LanguageStorage` do Tolgee. O usuário pode trocar pelo seletor no Navbar.

## Tours disponíveis

- Rio Express (Christ the Redeemer + principais pontos)
- Tailor-Made (Roteiro personalizado)
- Rio Nature (Floresta da Tijuca e natureza)
- Helicopter Tour
- Brazilian Passions (Carnaval Experience e Maracanã)
- Boat Tour

Cada tour tem título, localização, duração e descrição gerenciados via i18n.

## Contato direto

Todos os CTAs do site levam ao [WhatsApp da Patricia](https://wa.me/5521971577557)

## Convenções de commit

O projeto segue Conventional Commits:

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `build:` mudanças no processo de build
- `chore:` tarefas de manutenção
- `refactor:` refatoração sem mudança de comportamento
- `docs:` documentação
- `test:` criação de testes
