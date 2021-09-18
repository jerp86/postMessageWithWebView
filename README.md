<h2 align="center">postMessage with WebView</h2>

---

<p align="center">
  <img src="https://img.shields.io/static/v1?label=React Native&message=framework&color=blue&style=plastic&logo=React" />
  <img src="https://img.shields.io/static/v1?label=JavaScript&message=language&color=blue&style=plastic&logo=JavaScript" />
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>
</p>

---

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#seedling-requisitos-mínimos">Requisitos</a>
</h3>
<h3 align="center">
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#package-como-baixar-o-projeto">Como baixar o projeto</a>&nbsp;|&nbsp;
  <a href="#memo-licença">Licença</a>
</h3>

---

<div style="display: flex; justify-content: space-around">
  <img src="https://user-images.githubusercontent.com/54115624/133905963-0e1c3df2-9a82-4be0-864b-4560d716b4d7.png" height="500" alt="app's main screen, with two buttons">
  <img src="https://user-images.githubusercontent.com/54115624/133905971-acd5a9af-f700-4799-b1d7-acc86864ba23.png" height="500" alt="alert message after clicking the 1st button">
  <img src="https://user-images.githubusercontent.com/54115624/133905976-5ba1dd41-69ba-450c-83f0-108f00472a8f.png" height="500" alt="alert message after clicking the 2nd button">
</div>

## :information_source: Sobre

Projeto trata de demostrar de forma simples como é possível haver comunicação de texto e/ou objetos entre um app Nativo/Híbrido e um site, através do window.postMessage().

## :interrobang: Motivo

Enquanto era produzido um WebApp que será chamado em uma WebView nativa (Android e iOS), foi detectado a necessidade de troca de informações entre o Nativo e WebApp.

## :seedling: Requisitos Mínimos

[NodeJS](https://nodejs.org/en/)

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [React Native WebView](https://github.com/react-native-webview/react-native-webview#readme)
- [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)

## :package: Como baixar o projeto

Para copiar o projeto, utilize os comandos:

```bash
  # Clonar o repositório
  ❯ git clone https://github.com/jerp86/postMessageWithWebView.git

  # Entrar no diretório
  ❯ cd postMessageWithWebView
```

Para instalar as dependências e iniciar o projeto, você pode utilizar o Yarn ou NPM:

**Utilizando yarn**

```bash
  # Instalar as dependências
  ❯ yarn

  # Iniciar o projeto
  ❯ yarn start
```

**Utilizando npm**

_PS: Caso utilize o NPM, apague o arquivo `yarn.lock` para ter todas as dependências instaladas da melhor forma._

```bash
  # Instalar as dependências
  ❯ npm install

  # Iniciar o projeto
  ❯ npm start
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<h4 align="center">
  Feito com ❤️ por Jerp86 👋️ <a href="mailto:jerp4@hotmail.com">Entre em contato!</a>
</h4>

<p align="center">
  <a href="https://www.linkedin.com/in/jerp/">
    <img alt="José Eduardo Rodrigues Pinto" src="https://img.shields.io/badge/LinkedIn-jerp-0e76a8?style=flat&logoColor=white&logo=linkedin">
  </a>
  <a href="https://twitter.com/jerpbtu">
    <img alt="José Eduardo Rodrigues Pinto" src="https://img.shields.io/twitter/follow/jerpbtu?style=flat&logoColor=white&logo=Twitter">
  </a>
</p>
