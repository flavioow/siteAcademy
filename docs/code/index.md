# Padrão de Código e sua Aplicação

Para esse projeto, foi utilizado conceitos avançados de HTML5, CSS3, junto da implementação de Javascript para a parte responsiva do site em diferentes situações. Usando uma organização de pastas (adicionar informações de pastas do django) para cada tipo de arquivo.

## Organização de pastas

Como estamos trabalhando com muitos arquivos, foi necessário uma organização em relação a cada tipo de arquivo, segue abaixo uma demonstração de padronização utilizada:

```plaintext
assets/
├── css/
│ ├── global/
│ │ ├── global.css
│ │ ├── normalize.css
│ │ ├── fonts.css
│ │ ├── variables.css
│ ├── pages/
│ │ ├── index/
│ │ │ ├── partials/
│ │ │ │ ├── index.css
│ │ ├── sobre/
│ │ │ ├── partials/
│ │ │ │ ├── section-um.css
│ │ │ │ ├── section-dois.css
│ │ │ │ ├── section-tres.css
│ │ │ ├── sobre.css
│ │ ├── contato/
├── js/
│ ├── pages/
│ │ ├── index.js
│ │ ├── sobre.js
├── index.html
```

### 📂 assets/css/global/

Contém arquivos CSS globais utilizados em todo o projeto:

• button: Define as propriedades dos botões do site.
• carousel.css: Define as propriedades do carrossel da tela inicial.
• footer.css: Define as propriedades do rodapé que será utilizado em todas as telas.
• header.css: Define as propriedades do cabeçalho que será utilizado em todas as telas.
• input.css: Estiliza o input.
• layout.css: Regula a responsividade do site.
• normalize.css: Zera margens e paddings padrão dos navegadores.
• station-card.css: Estiliza os cards das estações.
• variables.css: Define variáveis globais de cores e tamanhos de fonte utilizando :root.
• global.css: Importa todos os arquivos dentro de global, facilitando a importação única.

### 📂 assets/css/pages/

Organiza os estilos por página para melhor manutenção e modularização.

• index/partials/index.css: Estilos específicos da página inicial.
• sobre/partials/: Divide os estilos em seções (section-um.css, section-dois.css, etc.), que são • • • • importadas dentro de sobre.css.
• contato/: Pode conter estilos específicos para a página de contato.

### 📂 assets/js/pages/

Separa os arquivos JavaScript por página para evitar arquivos grandes e difíceis de manter.

• carousel.js: Aplica o carrossel de forma funcional.
• navToggle.js: Transforma o conteúdo da nav em hamburguer.
• tilt.js: Uma biblioteca externa para aplicar efeitos de hover no site.

### 📂 index.html

Arquivo principal que carrega os estilos e scripts necessários para renderizar a aplicação corretamente.
