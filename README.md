# 📱 Portfólio em React Native

Este projeto é um **Portfólio Mobile** desenvolvido em **React Native com TypeScript**, criado como parte de um desafio prático para mostrar perfil e habilidades.

## 🚀 Funcionalidades

* **Main Screen (Perfil)**
  * Foto do usuário
  * Nome em destaque
  * Links clicáveis: GitHub, LinkedIn e Email
  * Navegação para a tela de Skills
  * Botão para visualizar o currículo em PDF sem sair do app

* **Skills Screen (Habilidades)**
  * Foto e nome do usuário
  * Subtítulo "Skills"
  * Cards de habilidades com ícones e barra de progresso
  * Animação suave na entrada dos cards

* **Resume Screen (Curriculo)**
  * Visualização do Curriculo
    
## 📱 Capturas de Tela

<div align="center">
  
| Perfil | Habilidades | Currículo |
|--------|-------------|-----------|
| <img src="assets/image.png" width="250" /> | <img src="assets/image2.png" width="250" /> | <img src="assets/image3.png" width="250" /> |

</div>

## 📲 Download do APK

Você pode baixar e instalar o app no Android por aqui:

[⬇️ Baixar APK](https://expo.dev/accounts/carloscb124/projects/Portifolio-React-Native/builds/16372e42-0d8d-4063-880b-e73e2c611445)


## 🎨 Tecnologias Utilizadas

* [React Native](https://reactnative.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [React Navigation](https://reactnavigation.org/)
* [Expo](https://expo.dev/)

## 📂 Estrutura do Projeto

```
Portifolio-React-Native/
├── assets/             # imagens e ícones
├── src/
│   ├── Screens/        # telas: MainScreen, SkillsScreen
│   ├── Styles/         # arquivos de estilo
│   └── ...
├── App.tsx
└── README.md
```

## ⚙️ Como rodar

1. Clone o repositório:

```bash
git clone https://github.com/Carloscb124/Portifolio-React-Native.git
```

2. Entre na pasta do projeto:

```bash
cd Portifolio-React-Native
```

3. Instale as dependências:

```bash
npm install
```

4. Rode o projeto:

```bash
npx expo start
```

5. Abra no celular usando o app **Expo Go** ou em um emulador Android/iOS.

## 📦 Build do aplicativo

Para gerar o APK e instalar no celular:

```bash
npx eas build -p android --profile preview
```

## 💡 Melhorias Futuras

* Adicionar animações mais avançadas entre telas
* Barra de progresso animada para as skills
* Cards de skills renderizados dinamicamente a partir de um array ou JSON
* Mais seções de portfólio (projetos, certificados)

## 👨‍💻 Autor

**Carlos Eduardo**

* GitHub: [https://github.com/Carloscb124](https://github.com/Carloscb124)
* LinkedIn: [https://www.linkedin.com/in/carloscb124/](https://www.linkedin.com/in/carloscb124/)
