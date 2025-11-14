# 🎲 Projeto: Jogo da Velha (Tic-Tac-Toe)

![Preview do Jogo da Velha](preview.gif)

Uma aplicação web interativa do clássico Jogo da Velha, desenvolvida com JavaScript puro, HTML5 e CSS. Este projeto foca no gerenciamento de estado e na implementação de lógica de jogo no front-end.

---

### 🎯 Objetivo

O objetivo principal deste projeto é demonstrar a capacidade de implementar **lógica algorítmica** e **gerenciamento de estado** em JavaScript. O desafio é controlar o turno dos jogadores, validar movimentos, verificar todas as condições de vitória ou empate em tempo real e atualizar a interface do usuário (UI) de acordo.

---

### 🛠️ Tecnologias Utilizadas

* **Linguagem:** JavaScript (ES6+)
* **Tecnologias Web:** HTML5, CSS3
* **Framework/Biblioteca:** Bootstrap 5 (para o grid do tabuleiro e botões)
* **Ambiente:** Navegador Web

---

### 🧱 Estrutura do Código

A lógica do jogo é centralizada no `main.js`, que gerencia o estado e interage com o DOM.

| Arquivo/Função | Propósito Principal |
| :--- | :--- |
| `index.html` | Estrutura do tabuleiro com 9 botões (`.btn-square`) e a área de status. |
| `css/style.css` | Estilização para garantir que o tabuleiro seja quadrado e responsivo. |
| `js/main.js` | **Lógica Principal:** Contém todas as variáveis de estado e funções do jogo. |
| `main.js` » `handleCellClick()` | Função principal que é acionada a cada clique em uma célula. |
| `main.js` » `handleCheckResult()` | Verifica se o estado atual do jogo resultou em vitória ou empate. |
| `main.js` » `handlePlayerChange()` | Alterna o jogador atual (`X` ou `O`). |
| `main.js` » `handleRestartGame()` | Reseta todas as variáveis de estado para um novo jogo. |

---

### 📦 Estrutura dos Dados

* **`gameState` (Array de Strings)**
    O estado do tabuleiro é armazenado em um array de 9 posições, onde cada índice corresponde a uma célula. Ex: `['X', '', 'O', '', 'X', '', 'O', '', '']`
* **`winningConditions` (Array de Arrays)**
    Um array 2D (matriz) que armazena todas as 8 combinações de índices que resultam em uma vitória. Ex: `[0, 1, 2]`, `[0, 3, 6]`, etc.
* **`currentPlayer` (String)**
    Uma variável simples que armazena o jogador atual (`'X'` ou `'O'`).
* **`gameActive` (Boolean)**
    Uma variável booleana que trava o tabuleiro após uma vitória ou empate.

---

### 🔍 Funcionalidades

* **Jogabilidade para Dois Jogadores:** Permite que dois jogadores alternem os turnos.
* **Verificação de Vitória:** O script verifica automaticamente se há um vencedor após cada jogada.
* **Verificação de Empate:** Detecta se o tabuleiro está cheio sem um vencedor.
* **Feedback Visual:** Exibe mensagens claras informando o turno do jogador, o vencedor ou se houve empate.
* **Reiniciar Jogo:** Um botão permite que os jogadores comecem uma nova partida a qualquer momento.

---

### 🧪 Como Executar

Este é um projeto de front-end estático.

1.  Clone o repositório (ou tenha a pasta do projeto em sua máquina).
2.  Abra o arquivo `index.html` no seu navegador de preferência.

---

### 📚 Aprendizado

Este projeto foi um exercício profundo de lógica e gerenciamento de estado:

* **Mapeamento Lógico:** Aprendi a traduzir um conceito do mundo real (um tabuleiro) para uma estrutura de dados (um array) e a lógica de verificação (a matriz de `winningConditions`).
* **Gerenciamento de Estado:** Foi meu primeiro contato com a importância de variáveis de estado (`gameActive`, `currentPlayer`) para controlar o fluxo de uma aplicação.
* **Algoritmos:** A função `handleCheckResult()` é um pequeno algoritmo que itera sobre as condições de vitória, um conceito fundamental em ciência da computação.
* **Interação com o DOM:** Pratiquei o uso de `data-attributes` (`data-cell-index`) no HTML para passar informações de forma limpa para o JavaScript.

---

📄 **Licença**
Este projeto está licenciado sob a MIT License.
