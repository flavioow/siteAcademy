# Componentes: Botão

Os botões possuem um padrão simples de ser seguido, primeiramente com suas definição padrão

```css
.btn {
    text-decoration: none;
    padding: 1rem .25rem;
    border-radius: 0.625rem;
    transition: all .3s ease-in-out;
    cursor: pointer;
}
```
e muda de acordo com o tema do usuário

### No modo claro:

```css
@media (prefers-color-scheme: light) {
    .btn {
        color: var(--color-gray-700);
    }

    .btn:hover,
    .btn.ativo {
        color: var(--color-gray-900);
    }

    .btn.primary {
        background-color: var(--color-accent);
    }

    .btn.primary:hover {
        background-color: color-mix(in srgb, var(--color-accent) 100%, var(--color-gray-100) 20%);
        color: color-mix(in srgb, var(--color-gray-700) 100%, var(--color-gray-100) 20%);
    }

}
```

### No modo escuro:

```css
@media (prefers-color-scheme: dark) {
    .btn {
        color: var(--color-gray-300);
    }

    .btn:hover,
    .btn.ativo {
        color: var(--color-gray-100);
    }

        .btn.primary {
        background-color: var(--color-primary);
    }

    .btn.primary:hover {
        background-color: color-mix(in srgb, var(--color-primary) 100%, var(--color-gray-900) 20%);
        color: color-mix(in srgb, var(--color-gray-300) 100%, var(--color-gray-900) 20%);
    }
}
```
