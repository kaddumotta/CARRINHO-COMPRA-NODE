# 🛒 Shopping Cart CLI - Node.js

Sistema de carrinho de compras inspirado na experiência da Shopee, desenvolvido com Node.js e executado diretamente no terminal.

O projeto simula o funcionamento de um carrinho de compras real, permitindo adicionar, remover e atualizar produtos, além de calcular automaticamente subtotais e o valor total da compra.

Este projeto foi desenvolvido como parte dos estudos do curso de formação Node.js da DIO (Digital Innovation One), com foco em prática de lógica de programação, modularização e manipulação de dados no backend utilizando JavaScript.

---

# 🚀 Funcionalidades

- ✅ Adicionar produtos ao carrinho
- ✅ Remover produtos do carrinho
- ✅ Incrementar quantidade de itens
- ✅ Diminuir quantidade de itens
- ✅ Excluir item pelo nome
- ✅ Calcular subtotal dos produtos
- ✅ Calcular valor total do carrinho
- ✅ Exibir todos os itens no terminal
- ✅ Estrutura modular utilizando ESModules

---

# 📂 Estrutura do Projeto

```bash
📦 shopping-cart
 ┣ 📂services
 ┃ ┣ 📜cart.js
 ┃ ┗ 📜item.js
 ┣ 📜index.js
 ┣ 📜package.json
 ┗ 📜README.md
```

---

# 🧠 Conceitos Utilizados

Este projeto aborda diversos conceitos importantes do desenvolvimento backend com Node.js:

- Modularização de código
- Funções assíncronas (`async/await`)
- Manipulação de arrays
- Métodos como:
  - `push()`
  - `splice()`
  - `findIndex()`
  - `reduce()`
  - `forEach()`
- Organização de regras de negócio
- Simulação de fluxo de e-commerce

---

# ⚙️ Tecnologias

- Node.js
- JavaScript ESModules

---

# 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/shopping-cart.git
```

Acesse a pasta do projeto:

```bash
cd shopping-cart
```

---

# ▶️ Executando o Projeto

Execute o projeto com:

```bash
node src/index.js
```

---

# 🛍️ Exemplo de Uso

## Criando itens

```js
const item1 = await createItem("Hotwheels Ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels Lamborghini", 39.99, 3);
```

## Adicionando ao carrinho

```js
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
```

## Exibindo carrinho

```js
await cartService.displayCart(myCart);
```

## Calculando total

```js
await cartService.calculateTotal(myCart);
```

---

# 📋 Exemplo de Saída no Terminal

```bash
Welcome to the your Buy Cart

Your Cart List:
1. Hotwheels Ferrari - R$ 20.99 | Quantity: 1x | Subtotal: 20.99
2. Hotwheels Lamborghini - R$ 39.99 | Quantity: 4x | Subtotal: 159.96

🛒 Total : 180.95
```

---

# 🔧 Regras de Negócio

## ➕ Adicionar Item

Adiciona um novo produto ao carrinho.

## ➖ Remover Quantidade

Diminui a quantidade do item em 1 unidade.

- Se a quantidade chegar a `0`, o item é removido automaticamente.

## ❌ Deletar Produto

Remove completamente o item do carrinho através do nome.

## 💰 Cálculo de Total

O total é calculado automaticamente utilizando:

```js
reduce()
```

---

# 📚 Objetivo do Projeto

Este projeto foi desenvolvido com foco em aprendizado prático de Node.js, simulando operações reais de um sistema de e-commerce diretamente no terminal.

O principal objetivo é reforçar conceitos fundamentais do backend com JavaScript, utilizando uma aplicação simples, organizada e modular.

---

# 💡 Possíveis Melhorias

- [ ] Criar sistema de login
- [ ] Salvar carrinho em banco de dados
- [ ] Adicionar estoque de produtos
- [ ] Criar API com Express/Fastify
- [ ] Interface web com React
- [ ] Integração com pagamentos
- [ ] Sistema de favoritos
- [ ] Aplicar arquitetura MVC

---

# 👨‍💻 Autor

Projeto desenvolvido para fins de estudo durante o curso de formação Node.js da DIO (Digital Innovation One).
