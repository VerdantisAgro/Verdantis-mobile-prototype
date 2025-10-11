# 🌿 Verdantis Mobile

Aplicativo mobile desenvolvido em **React Native**, parte do ecossistema **Verdantis**, voltado para a gestão e monitoramento do agronegócio.  
O app oferece uma interface moderna e intuitiva para **Produtores** e **Gestores**, com login, dashboard de produção, comunicação e visualização de dados agrícolas.

---

## 🏷️ **Badges**

![React Native](https://img.shields.io/badge/React%20Native-0A0A0A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7E018?style=for-the-badge&logo=javascript&logoColor=black)
![FIAP](https://img.shields.io/badge/FIAP-Challenge%202025-EC1C24?style=for-the-badge)
![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📱 **Preview**

<img src="./assets/readme-preview.png" width="300" alt="Preview do Verdantis Mobile" />

---

## 🚀 **Funcionalidades**

- 🔐 **Autenticação com AsyncStorage** (login, cadastro e logout)
- 👥 Perfis diferentes para **Produtor** e **Gestor**
- 🏠 Tela inicial com cultivos recomendados
- 📊 **Dashboard de produção e analytics**
- 💬 Área de contato entre gestor e fazendas
- 🌾 Exibição de dados e estatísticas agrícolas
- 🎨 Design inspirado no ambiente agro, com tons de verde e imagens naturais

---

## 🧠 **Tecnologias Utilizadas**

| Categoria | Ferramentas |
|------------|-------------|
| **Framework** | React Native |
| **Navegação** | @react-navigation/native, bottom-tabs, native-stack |
| **Gerenciamento de estado** | Context API |
| **Armazenamento local** | @react-native-async-storage/async-storage |
| **Gráficos** | react-native-chart-kit + react-native-svg |
| **Ícones** | @expo/vector-icons (Ionicons) |
| **Estilização** | StyleSheet e componentes personalizados |

---

## ⚙️ **Instalação e Execução**

### 🔸 Pré-requisitos
- Node.js (LTS)
- NPM ou Yarn
- Expo CLI **ou** React Native CLI
- Android Studio / Emulador (ou dispositivo físico)

---

### 🔸 Passos para rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/verdantis-mobile.git

# Acesse a pasta do projeto
cd verdantis-mobile

# Instale as dependências
npm install

# (Se for React Native CLI)
npx pod-install

# Execute o app (Android)
npx react-native run-android

# Ou inicie com Expo
npx expo start
🧩 Estrutura do Projeto
bash
Copiar código
src/
 ├─ assets/               # Imagens e ícones
 ├─ components/           # Componentes reutilizáveis
 ├─ context/              # AuthContext global
 ├─ routes/               # Configuração de navegação
 ├─ screens/
 │   ├─ login-screen/     # Login e cadastro
 │   ├─ produtor-screens/ # Telas do produtor
 │   └─ gestor-screens/   # Telas do gestor
 └─ App.js                # Ponto de entrada principal
🧭 Navegação
LoginScreen → Tela inicial de login

RegisterScreen → Cadastro com seleção de tipo de usuário

Produtor → Acesso à Home, Dashboard, Contato e Perfil

Gestor → Acesso à Home, Dashboard (com gráficos) e Contato

💾 Autenticação
Os dados de login são armazenados localmente via AsyncStorage.

O contexto global (AuthContext) gerencia login, logout e registro.

O app redireciona automaticamente com base no tipo de usuário.

🌍 Design
O design foi inspirado na identidade visual do Verdantis Web,
com fundo agrícola, tipografia legível e ícones suaves.

Exemplo da tela de login:

<img src="./assets/readme-login.png" width="280" alt="Login screen" />
🤝 Contribuição
Contribuições são sempre bem-vindas 🌱

Faça um fork do projeto

Crie uma branch com sua feature (git checkout -b feature/nome-da-feature)

Commit suas alterações (git commit -m 'feat: adicionei nova tela')

Envie para o branch principal (git push origin feature/nome-da-feature)

Abra um Pull Request

📜 Licença
Este projeto é de uso acadêmico e segue a licença MIT.
Sinta-se livre para estudar, adaptar e evoluir o código.

💚 Desenvolvido por
Caio • Projeto Verdantis 🌱
Apoio: FIAP - Challenge 2025
