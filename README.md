# InsanyShop

InsanyShop é um e-commerce simples de produtos diversos, onde o usuário pode visualizar a lista completa de produtos com paginação, filtros por categoria e busca por termos, além de um sistema de carrinho funcional.

O design segue os layouts disponíveis no Figma, proporcionando uma interface intuitiva e responsiva.

---

## 🛠 Tecnologias utilizadas

- [Next.js](https://nextjs.org/) com **TypeScript**
- [Styled Components](https://styled-components.com/) para estilização
- [React Toastify](https://fkhadra.github.io/react-toastify/) para notificações
- [Lucide](https://lucide.dev/) e [React Icons](https://react-icons.github.io/react-icons/) para ícones
- Consumo de **API REST** para listar produtos, categorias e detalhes específicos
- **LocalStorage** para persistência do carrinho

---

## 📄 Funcionalidades

- **Catálogo de Produtos**
  - Listagem de todos os produtos com paginação
  - Filtro por categoria
- **Páginas Dinâmicas**
  - Produtos de uma categoria específica
  - Exibição de produto específico com detalhes e opção de adicionar ao carrinho
  - Resultados de pesquisa por termo
- **Carrinho de Compras**
  - Adicionar e remover produtos
  - Alterar quantidade de itens respeitando o estoque
  - Resumo do pedido (subtotal, frete, total)
  - Persistência de itens via localStorage
- **Loading**
  - Indicadores de carregamento enquanto o conteúdo das páginas é carregado

---

## 🎨 Design

O layout foi inspirado nos protótipos disponibilizados no Figma.

---

## 🚀 Instalação e execução

1. **Clonar o repositório**

```bash
git clone https://github.com/rickreisdev/insanyshop.git
cd insanyshop
```

2. **Criar arquivo `.env` na raiz do projeto**

- Adicionando a variável de ambiente com a url da API

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
```

3. **Instalar dependências**

```bash
npm install
```

4. **Rodar o projeto**

```bash
npm run dev
```

5. **Acessar a aplicação**

- Abrindo http://localhost:3000 no navegador

---

### ⚡ Observações

- O carrinho de compras persiste os itens mesmo após recarregar a página, utilizando `localStorage`.
- Todas as páginas são responsivas, adaptando-se a diferentes tamanhos de tela.
- A interface possui feedback visual via `react-toastify` para ações como adicionar ao carrinho e atingir o limite de estoque.

---

<div align = "center">
    <h4> Desenvolvido por</h4>
    <a href="https://rickreis.dev.br" target="_blank"> <img src="./src/assets/logo-rickreis.png" alt="Meu Logo" width="200"></a>
</div>
