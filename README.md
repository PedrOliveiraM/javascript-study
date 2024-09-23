# DOM (Document Object Model)

O DOM é uma interface de programação para documentos HTML e XML. Ele representa a estrutura de um documento como uma árvore de objetos, permitindo que scripts manipulem o conteúdo, estrutura e estilo de uma página web.

## Métodos de Seleção de Elementos

### 1. querySelector

Seleciona o primeiro elemento que corresponde a um seletor CSS específico.

```jsx
const elemento = document.querySelector('.classe-exemplo');
```

### 2. querySelectorAll

Seleciona todos os elementos que correspondem a um seletor CSS específico.

```jsx
const elementos = document.querySelectorAll('p');
```

### 3. getElementById

Seleciona um elemento pelo seu atributo ID.

```jsx
const elemento = document.getElementById('id-exemplo');
```

### 4. getAttribute

Obtém o valor de um atributo específico de um elemento.

```jsx
const valor = elemento.getAttribute('nome-do-atributo');
```

### 5. setAttribute

Define o valor de um atributo específico de um elemento.

```jsx
elemento.setAttribute('nome-do-atributo', 'novo-valor');
```

Esses métodos são essenciais para manipular o DOM eficientemente em JavaScript, permitindo selecionar, modificar e interagir com elementos HTML de forma dinâmica.

### 6. hasAttribute

Verifica se tal atributo existe em um elemento html

```jsx
const link = document.getElementById('meuLink');
const temHref = link.hasAttribute('href');

console.log(temHref); // Saída: true
const temTarget = link.hasAttribute('target');
console.log(temTarget); // Saída: false
```

Neste exemplo, o método `hasAttribute` foi usado para verificar se o elemento com o ID "meuLink" possui o atributo "href" (que é verdadeiro) e se possui o atributo "target" (que é falso).

### 6. removeAttribute

O método `removeAttribute` é usado para remover um atributo específico de um elemento HTML. Ele recebe um argumento, que é o nome do atributo que desejamos remover. Por exemplo:

```bash
// HTML: <img src="imagem.jpg" alt="Imagem de exemplo" id="minhaImagem">

const imagem = document.getElementById('minhaImagem');
imagem.removeAttribute('alt');
```# DOM (Document Object Model)

O DOM é uma interface de programação para documentos HTML e XML. Ele representa a estrutura de um documento como uma árvore de objetos, permitindo que scripts manipulem o conteúdo, estrutura e estilo de uma página web.

## Métodos de Seleção de Elementos

### 1. querySelector

Seleciona o primeiro elemento que corresponde a um seletor CSS específico.

```jsx
const elemento = document.querySelector('.classe-exemplo');
```

### 2. querySelectorAll

Seleciona todos os elementos que correspondem a um seletor CSS específico.

```jsx
const elementos = document.querySelectorAll('p');
```

### 3. getElementById

Seleciona um elemento pelo seu atributo ID.

```jsx
const elemento = document.getElementById('id-exemplo');
```

### 4. getAttribute

Obtém o valor de um atributo específico de um elemento.

```jsx
const valor = elemento.getAttribute('nome-do-atributo');
```

### 5. setAttribute

Define o valor de um atributo específico de um elemento.

```jsx
elemento.setAttribute('nome-do-atributo', 'novo-valor');
```

Esses métodos são essenciais para manipular o DOM eficientemente em JavaScript, permitindo selecionar, modificar e interagir com elementos HTML de forma dinâmica.

### 6. hasAttribute

Verifica se tal atributo existe em um elemento html

```jsx
const link = document.getElementById('meuLink');
const temHref = link.hasAttribute('href');

console.log(temHref); // Saída: true
const temTarget = link.hasAttribute('target');
console.log(temTarget); // Saída: false
```

Neste exemplo, o método `hasAttribute` foi usado para verificar se o elemento com o ID "meuLink" possui o atributo "href" (que é verdadeiro) e se possui o atributo "target" (que é falso).

### 6. removeAttribute

O método `removeAttribute` é usado para remover um atributo específico de um elemento HTML. Ele recebe um argumento, que é o nome do atributo que desejamos remover. Por exemplo:

```bash
// HTML: <img src="imagem.jpg" alt="Imagem de exemplo" id="minhaImagem">

const imagem = document.getElementById('minhaImagem');
imagem.removeAttribute('alt');
```