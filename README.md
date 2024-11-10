# Previsão do Tempo - App React

Este é um aplicativo simples de previsão do tempo, desenvolvido em **React**, que permite aos usuários consultar as condições climáticas de uma cidade. O aplicativo utiliza a API do **OpenWeatherMap** para obter informações sobre o clima, incluindo temperatura, umidade, descrição e um ícone representativo do tempo.

## Funcionalidades

- **Consulta de clima por cidade**: O usuário pode digitar o nome de uma cidade para obter as informações meteorológicas.
- **Exibição de dados**: Mostra a temperatura atual, umidade e descrição do clima.
- **Ícone do tempo**: Exibe um ícone correspondente ao tipo de clima (ex: céu limpo, chuva, nuvens, etc.).
- **Interface simples e intuitiva**: O design é responsivo e fácil de usar.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **OpenWeatherMap API**: API para obter dados meteorológicos.
- **CSS**: Estilização do layout e dos componentes.

## Como Usar

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (Node Package Manager) instalados em sua máquina. Caso ainda não tenha, você pode instalá-los a partir de [nodejs.org](https://nodejs.org/).

### Passos

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/previsao-do-tempo.git


2. **Acesse a pasta do projeto**:

bash

Copiar código  

cd previsao-do-tempo

4. **Instale as dependências**:
Execute o seguinte comando para instalar as dependências do projeto:

bash  

Copiar código  

npm install

6. **Obtenha uma chave de API do OpenWeatherMap**:

Vá até o site do OpenWeatherMap e crie uma conta.  

Após criar a conta, acesse a seção de API Keys e gere uma chave de API.  

Substitua a variável apiKey no código pelo seu próprio valor da chave de API.

8. **Inicie o servidor de desenvolvimento**

Execute o comando abaixo para rodar o projeto localmente:  

bash  

Copiar código  

npm start

O aplicativo será iniciado e você poderá acessá-lo no navegador através do endereço http://localhost:3000.

## Estrutura do Projeto

O projeto está organizado da seguinte maneira:

- index.html: Arquivo HTML principal, localizado na raiz do projeto, que carrega o aplicativo React no navegador.

- src/: Pasta que contém os arquivos JavaScript e CSS principais do aplicativo:

  - App.jsx: Componente principal do aplicativo, responsável pela lógica de busca da previsão do tempo e exibição dos dados.
  
  - main.jsx: Ponto de entrada do React. Este arquivo é responsável por renderizar o componente App dentro do root no index.html.
  
  - style.css: Arquivo de estilos CSS que define o layout e a aparência do aplicativo.
  
- public/: Pasta que contém arquivos estáticos como o ícone do site:

  - favicon.ico.jpg: Imagem do ícone (favicon) que será exibido na aba do navegador.

## Como Funciona

O usuário digita o nome de uma cidade no campo de entrada.
Ao clicar em "Buscar", o aplicativo faz uma requisição para a API do OpenWeatherMap utilizando a cidade fornecida.
As informações retornadas pela API (temperatura, umidade, descrição do clima, e ícone) são exibidas no aplicativo.
Se houver um erro (como cidade não encontrada), uma mensagem de erro será exibida.

## Contribuindo:

Contribuições são bem-vindas! Para sugerir melhorias ou corrigir problemas, por favor, abra um issue ou envie um pull request.

## Licença:

Este projeto está licenciado sob a MIT License.
