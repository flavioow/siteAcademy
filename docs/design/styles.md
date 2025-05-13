🏠 [Página inicial](../index.md) | [Referência de Estilos e Design](./index.md) | <a href="javascript:history.back()">Voltar</a>

# Referência Técnica de Estilos (CSS)

## 📌 Índice

- [Paleta de Cores](#paleta-de-cores)
    - [Cores Principais](#estrutura-do-design-system)
    - [Cores de Feedback](#cores-de-feedback)
    - [Escala de Cinza](#escala-de-cinza)
    - [Estações](#estações)
- [Tipografia](#tipografia)
- [Devices Breakpoints](#devices-breakpoints)

Este documento descreve as variáveis CSS utilizadas no projeto, organizadas por categoria.
Elas garantem consistência visual, flexibilidade na personalização e facilitam a manutenção do tema.
Essa seção serve como **introdução geral** à padronização de estilos, e não como um guia exaustivo; os detalhes visuais e exemplos práticos estarão documentados separadamente com auxílio de ilustrações do Figma.

## Paleta de Cores

Cada cor possui um significado importante para o projeto, elas são utilizadas em todos os locais envolventes do projeto. Evite ao máximo utilizar outras cores que fogem dessa paleta.

### Cores Principais

| Variável            | Uso                                         |
|---------------------|---------------------------------------------|
| `--color-primary`   | Cor predominante (modo escuro)              |
| `--color-secondary` | Backgrounds secundários, botões secundários |
| `--color-accent`    | Cor predominante (modo claro)               |

> **Nota:** Todas as variáveis possuem uma versão RBG, onde o sufixo `--rgb` é adicionado. Sua utilização é recomendada quando precisa-se de cores com transparência. Nesse cenário, utilize um comando similar a `rgba(var(--color-accent--rgb), 0.5)`.

### Cores de Feedback

| Variável          | Uso                                             |
|-------------------|-------------------------------------------------|
| `--color-success` | Alertas positivos, badges, mensagens de sucesso |
| `--color-error`   | Campos inválidos, mensagens de erro             |

### Escala de Cinza

| Variável                                | Uso                              |
|-----------------------------------------|----------------------------------|
| `--color-gray-100` a `--color-gray-300` | Backgrounds claros, bordas sutis |
| `--color-gray-400` a `--color-gray-600` | Textos secundários, placeholders |
| `--color-gray-700` a `--color-gray-900` | Textos principais, destaques     |

> **Nota:** Para a realização do modo escuro, utilize `@media (prefers-color-scheme: dark) {}` e inverta a seleção de cor. Ou seja, caso o fundo utilize `gray-100` e o texto `gray-900` no modo claro, no modo escuro, o fundo deverá ser `gray-900` e o texto `gray-100`.

### Estações

| Variável              | Uso                      |
|-----------------------|--------------------------|
| `--color-tech`        | Tecnologia da Informação |
| `--color-gestao`      | Gestão                   |
| `--color-comunicacao` | Comunicação Digital      |
| `--color-academica`   | Acadêmicas               |

## Tipografia

Bem como a paleta de cor, a tipografia tem papel fundamental da identidade visual do projeto. Não altere-as em nenhum local.

| Variável        | Uso                           |
|-----------------|-------------------------------|
| `--font-heading`| Fonte para títulos principais |
| `--font-sans`   | Fonte para textos em geral    |

## Devices Breakpoints

São pontos de parada entre dispositívos, aquilo que permite e regula a responsividade do sistema.

| Dispositivo | Tamanho (max-width) |
|-------------|---------------------|
| Celular     | < 640px             |
| tablet      | 780px               |
| laptop      | 1024px              |
| desktop     | 1280px              |
| tv          | > 1536px            |
