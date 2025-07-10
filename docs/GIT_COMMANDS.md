# 🚀 Comandos Git - Referência Rápida

## 📋 Configuração Inicial

```bash
# Configurar usuário
git config --global user.name "seu-nome"
git config --global user.email "seu-email@exemplo.com"

# Verificar configurações
git config --list
```

## 🔄 Fluxo Básico de Trabalho

```bash
# 1. Verificar status
git status

# 2. Adicionar mudanças
git add .                    # Adicionar todos os arquivos
git add arquivo.html         # Adicionar arquivo específico

# 3. Fazer commit
git commit -m "Mensagem do commit"

# 4. Enviar para GitHub
git push
```

## 📁 Gerenciamento de Repositório

```bash
# Inicializar repositório
git init

# Clonar repositório
git clone https://github.com/usuario/repositorio.git

# Adicionar remote
git remote add origin https://github.com/usuario/repositorio.git

# Ver remotes
git remote -v
```

## 🌿 Gerenciamento de Branches

```bash
# Ver branches
git branch

# Criar nova branch
git branch nome-da-branch

# Mudar para branch
git checkout nome-da-branch
git switch nome-da-branch

# Criar e mudar para branch
git checkout -b nova-branch

# Renomear branch atual
git branch -m novo-nome

# Deletar branch
git branch -d nome-da-branch
```

## 📊 Visualização

```bash
# Ver histórico
git log
git log --oneline
git log --graph --oneline

# Ver diferenças
git diff
git diff --staged

# Ver status
git status
git status -s  # Formato resumido
```

## 🔄 Sincronização

```bash
# Baixar mudanças
git pull
git pull origin main

# Enviar mudanças
git push
git push origin main

# Primeiro push
git push -u origin main
```

## 🔧 Comandos Avançados

```bash
# Ver configurações
git config --list

# Configurar editor padrão
git config --global core.editor "code"

# Criar alias úteis
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit

# Ver ajuda
git help comando
git comando --help
```

## 🛠️ Solução de Problemas

```bash
# Desfazer último commit (mantém mudanças)
git reset --soft HEAD~1

# Desfazer último commit (remove mudanças)
git reset --hard HEAD~1

# Desfazer staging
git reset HEAD arquivo

# Verificar arquivo específico
git checkout -- arquivo

# Verificar branch específica
git checkout branch-name
```

## 📝 Exemplo de Workflow Completo

```bash
# 1. Verificar status
git status

# 2. Adicionar mudanças
git add .

# 3. Fazer commit
git commit -m "feat: adicionar nova funcionalidade"

# 4. Enviar para GitHub
git push

# 5. Verificar no GitHub
# Acesse: https://github.com/usuario/repositorio
```

## 🏷️ Convenções de Commit

```bash
# Tipos de commit
git commit -m "feat: nova funcionalidade"
git commit -m "fix: correção de bug"
git commit -m "docs: atualizar documentação"
git commit -m "style: formatação de código"
git commit -m "refactor: refatoração de código"
git commit -m "test: adicionar testes"
git commit -m "chore: tarefas de manutenção"
```

## 🔗 Comandos Específicos para o Projeto MozBioMed

```bash
# Configuração específica do projeto
git config --global user.name "vasconcelosmomad"
git config --global user.email "mvasconcelos@softetech.com"

# Repositório do projeto
git remote add origin https://github.com/vasconcelosmomad/landing-page-MozBioMed.git

# Push inicial
git push -u origin main
```

---

**💡 Dica:** Use `git status` frequentemente para verificar o estado do seu repositório!

**📚 Para mais informações:** `git help <comando>` ou consulte a documentação oficial. 