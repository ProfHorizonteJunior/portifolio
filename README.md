# 🚀 Projeto Colaborativo: Nossa Galeria de Landing Pages!

Bem-vindo(a) ao nosso projeto de equipe! 🎉

Aqui a gente vai trabalhar **igualzinho** a uma empresa de verdade de desenvolvimento de software. Cada pessoa da turma vai criar a **sua própria landing page** usando **React**, e todas elas vão morar no **mesmo repositório**. 

No final, teremos um site só, com várias páginas:
- `/joao` → a página do João
- `/maria` → a página da Maria
- `/seunome` → a SUA página! 😎

E o melhor: vamos aprender a usar o **Git** e o **GitHub**, as ferramentas que TODA empresa de tecnologia usa para trabalhar em equipe sem bagunçar o código uns dos outros. Bora? 👇

---

## 🤔 Antes de começar: entenda a ideia

Imagina que o código é um **caderno compartilhado** por toda a turma. Se todo mundo escrever na mesma página ao mesmo tempo, vira uma confusão, certo? 

O Git resolve isso! Cada pessoa cria a sua **branch** (uma cópia separada para trabalhar em paz) e, quando termina, junta o trabalho dela com o de todo mundo de um jeito organizado. 🧠✨

> 💡 **Branch** = um "galho" do projeto onde você trabalha sozinho(a) sem atrapalhar ninguém.

---

## 📌 Combinados da turma (LEIA ISSO!)

Para tudo dar certo, todo mundo precisa seguir os mesmos padrões:

- **Nome da sua branch:** `feature/landing-page-SEUNOME`  
  Exemplo: `feature/landing-page-joao`
- **Mensagem de commit:** comece com `feat:` e explique o que fez  
  Exemplo: `feat: cria landing page do joao`
- **Sua página** vai num arquivo só seu: `src/pages/SeuNome.jsx`
- **Faça commits pequenos e frequentes**, não deixe tudo pro final! 😉

---

## 🛠️ PASSO A PASSO (siga na ordem!)

### 🟢 Passo 1 — Baixar o projeto (só na primeira vez)

Copie o link do botão verde **"Code"** aqui no GitHub e rode:

```bash
git clone LINK-DO-REPOSITORIO

# Entre na pasta do projeto
cd nome-do-repo
```
### 🟢 Passo 2 — Pegar a versão mais nova do projeto
Antes de começar, sempre baixe as últimas novidades dos colegas:

```bash
git checkout main
git pull origin main
```
### 🟢 Passo 3 — Criar a SUA branch
Agora crie seu "galho" para trabalhar em paz (troque joao pelo seu nome):

```bash
git checkout -b feature/landing-page-joao
```
### 🟢 Passo 4 — Criar a sua landing page
Crie o arquivo da sua página em src/pages/SeuNome.jsx:
```
// src/pages/Joao.jsx
export default function Joao() {
  return (
    <div>
      <h1>Olá, eu sou o João! 👋</h1>
      <p>Bem-vindo à minha landing page!</p>
    </div>
  );
}
```
Depois, adicione a SUA rota no arquivo App.jsx (coloque só a sua linha):
```
<Route path="/joao" element={<Joao />} />
```

### 🟢 Passo 5 — Ver o que você mudou
```bash
git status
```
### 🟢 Passo 6 — Salvar seu trabalho (commit)
# Adiciona seus arquivos
```bash
git add .
```
# Cria o commit com uma mensagem clara
```bash
git commit -m "feat: cria landing page do joao na rota /joao"
```

### 🟢 Passo 7 — Atualizar de novo antes de enviar
Enquanto você trabalhava, seus colegas podem ter enviado código novo. Atualize:
```bash
git pull origin main
```
### 🟢 Passo 8 — Enviar sua branch para o GitHub
```bash
git push origin feature/landing-page-joao
```

### 🟢 Passo 9 — Juntar seu trabalho com o de todos (Pull Request)
Essa é a parte que as empresas de verdade fazem! Em vez de juntar o código sozinho, a gente pede uma "revisão". Olha que profissa: 😎

- Volte para o repositório aqui no GitHub.
- Vai aparecer um botão "Compare & pull request" → clique nele.
- Escreva um título e uma descrição do que você fez.
- Clique em "Create pull request".
- O(a) professor(a) ou um colega vai revisar seu código.
- Depois de aprovado, clique em "Merge pull request" → "Confirm merge".
- Por fim, clique em "Delete branch" para limpar a bagunça. 🧹
