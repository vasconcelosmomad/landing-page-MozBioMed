# Guia Completo: Configuração Git e Push para GitHub

## 📋 Índice
1. [Pré-requisitos](#pré-requisitos)
2. [Configuração Inicial do Git](#configuração-inicial-do-git)
3. [Criação do Repositório Local](#criação-do-repositório-local)
4. [Preparação dos Arquivos](#preparação-dos-arquivos)
5. [Primeiro Commit](#primeiro-commit)
6. [Configuração do Repositório Remoto](#configuração-do-repositório-remoto)
7. [Push para GitHub](#push-para-github)
8. [Comandos Úteis](#comandos-úteis)
9. [Solução de Problemas](#solução-de-problemas)

---

## 🎯 Pré-requisitos

### 1. Instalar Git
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install git

# Verificar instalação
git --version
```

### 2. Criar Conta no GitHub
- Acesse [github.com](https://github.com)
- Crie uma conta gratuita
- Crie um novo repositório no GitHub

---

## ⚙️ Configuração Inicial do Git

### 1. Configurar Identidade do Usuário
```bash
# Configurar nome de usuário
git config --global user.name "seu-nome-de-usuario"

# Configurar email
git config --global user.email "seu-email@exemplo.com"

# Verificar configurações
git config --list
```

### 2. Configurar Branch Padrão (Opcional)
```bash
# Definir 'main' como branch padrão
git config --global init.defaultBranch main
```

---

## 📁 Criação do Repositório Local

### 1. Navegar para o Diretório do Projeto
```bash
cd /caminho/para/seu/projeto
```

### 2. Inicializar Repositório Git
```bash
# Inicializar repositório
git init

# Verificar status
git status
```

---

## 📦 Preparação dos Arquivos

### 1. Criar README.md (Opcional)
```bash
echo "# Nome-do-Projeto" >> README.md
```

### 2. Adicionar Arquivos ao Staging
```bash
# Adicionar arquivo específico
git add README.md

# Adicionar todos os arquivos
git add .

# Verificar arquivos em staging
git status
```

---

## 💾 Primeiro Commit

### 1. Fazer o Primeiro Commit
```bash
git commit -m "Initial commit: descrição do projeto"
```

### 2. Verificar o Commit
```bash
# Ver histórico de commits
git log --oneline

# Ver detalhes do último commit
git show
```

---

## 🌐 Configuração do Repositório Remoto

### 1. Adicionar Repositório Remoto
```bash
git remote add origin https://github.com/usuario/nome-do-repositorio.git
```

### 2. Verificar Repositórios Remotos
```bash
git remote -v
```

### 3. Renomear Branch (se necessário)
```bash
# Se o Git criou branch 'master', renomear para 'main'
git branch -M main
```

---

## 🚀 Push para GitHub

### 1. Primeiro Push
```bash
# Push inicial com configuração de upstream
git push -u origin main
```

### 2. Verificar no GitHub
- Acesse seu repositório no GitHub
- Confirme que os arquivos foram enviados

---

## 🔄 Comandos Úteis

### Comandos Básicos
```bash
# Verificar status
git status

# Ver histórico de commits
git log --oneline

# Ver diferenças
git diff

# Ver branches
git branch -a
```

### Comandos de Atualização
```bash
# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Descrição das mudanças"

# Enviar para GitHub
git push

# Baixar mudanças do GitHub
git pull
```

### Comandos de Configuração
```bash
# Ver configurações
git config --list

# Configurar editor padrão
git config --global core.editor "code"

# Configurar alias úteis
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
```

---

## 🛠️ Solução de Problemas

### 1. Erro: "Author identity unknown"
```bash
# Solução: Configurar identidade
git config --global user.name "seu-nome"
git config --global user.email "seu-email@exemplo.com"
```

### 2. Erro: "src refspec main does not match any"
```bash
# Solução: Fazer commit primeiro
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 3. Erro: "remote origin already exists"
```bash
# Solução: Verificar remotes existentes
git remote -v

# Se necessário, remover e adicionar novamente
git remote remove origin
git remote add origin https://github.com/usuario/repositorio.git
```

### 4. Erro de Autenticação
```bash
# Solução: Usar Personal Access Token
# 1. Ir para GitHub Settings > Developer settings > Personal access tokens
# 2. Gerar novo token
# 3. Usar token como senha
```

---

## 📝 Exemplo Completo do Processo

```bash
# 1. Configurar Git
git config --global user.name "vasconcelosmomad"
git config --global user.email "mvasconcelos@softetech.com"

# 2. Navegar para o projeto
cd ~/mozbiomed

# 3. Inicializar repositório
git init

# 4. Criar README
echo "# landing-page-MozBioMed" >> README.md

# 5. Adicionar arquivos
git add .

# 6. Fazer commit
git commit -m "Initial commit: MozBioMed.AI landing page"

# 7. Configurar branch main
git branch -M main

# 8. Adicionar remote
git remote add origin https://github.com/vasconcelosmomad/landing-page-MozBioMed.git

# 9. Fazer push
git push -u origin main
```

---

## 🔗 Links Úteis

- [Documentação Oficial do Git](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub CLI](https://cli.github.com/) - Interface de linha de comando do GitHub

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique a documentação oficial
2. Consulte o [GitHub Community](https://github.community/)
3. Use `git help <comando>` para ajuda específica

---

**Última atualização:** $(date)
**Versão:** 1.0
**Autor:** Vasconcelos Momad 