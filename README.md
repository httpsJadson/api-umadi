# 🚀 API UMADI

API REST para gerenciamento de formulários de inscrição de jovens e obreiros da igreja.

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Sequelize** - ORM para banco de dados
- **MariaDB** - Banco de dados
- **Sucrase** - Transpilador para desenvolvimento
- **JWT** - Autenticação
- **Multer** - Upload de arquivos
- **ESLint** - Linting

## 📦 Pré-requisitos

- Node.js (versão 18 ou superior)
- MySQL
- npm ou yarn

## ⚙️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/httpsJadson/api-umadi.git
cd api-umadi
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Copie o arquivo `.env.example` para `.env` e preencha as informações:
```env
DATABASE_NAME=nome_do_banco
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=usuario
DATABASE_PASSWORD=senha

APP_URL=http://localhost
APP_PORT=3002
```

4. Execute as migrações do banco:
```bash
npx sequelize db:migrate
```

## 🏃‍♂️ Executando a Aplicação

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm run build
npm start
```

A API estará rodando em `http://localhost:3002` (ou a porta configurada).

## 📊 Estrutura do Banco de Dados

### Tabela: inscricoes-jovens
Campos para formulário de jovens:
- id (PK)
- nome
- idade
- congrega_igreja
- congregacao
- nome_igreja
- oficina_segunda
- oficina_terça
- oficina_quarta
- area_desejada
- campo
- como_conheceu
- como_conheceu_outro
- como_soube
- como_soube_outro
- nao_congrega_confirm
- oficina_dia
- oficina_tema
- participa_ministerio
- created_at
- updated_at

### Tabela: inscricoes-obreiros
Campos para formulário de obreiros:
- id (PK)
- nome
- idade
- congregacao
- whatsapp
- area
- batismo
- disponibilidade_geral
- equipe
- habilidade_especial
- perfil_pessoal
- pontualidade
- preferencia_trabalho
- pressao
- setores_prioridade (JSON)
- tempo_igreja
- voluntario
- created_at
- updated_at

## 🔗 Endpoints da API

### 🏠 Home
- **GET /** - Retorna lista de jovens e obreiros inscritos

### 👨‍🎓 Jovens
- **GET /jovens/** - Lista todos os jovens
- **GET /jovens/:id** - Busca jovem por ID
- **POST /jovens/** - Cadastra novo jovem
- **PUT /jovens/:id** - Atualiza jovem
- **DELETE /jovens/:id** - Remove jovem

### 👷 Obreiros
- **GET /obreiros/** - Lista todos os obreiros
- **GET /obreiros/:id** - Busca obreiro por ID
- **POST /obreiros/** - Cadastra novo obreiro
- **PUT /obreiros/:id** - Atualiza obreiro
- **DELETE /obreiros/:id** - Remove obreiro

## 📝 Exemplo de Uso

### Cadastrar Jovem
```bash
POST /jovens/
Content-Type: application/json

{
  "nome": "João Silva",
  "idade": 20,
  "congrega_igreja": "Sim",
  "oficina_segunda": "Evangelismo Pessoal"
}
```

### Cadastrar Obreiro
```bash
POST /obreiros/
Content-Type: application/json

{
  "nome": "Maria Santos",
  "idade": 25,
  "congregacao": "Centro",
  "setoresPrioridade": ["Comunicação", "Cozinha"]
}
```

## 🐛 Tratamento de Erros

A API retorna erros no formato:
```json
{
  "errors": ["Mensagem de erro"]
}
```

## 🛠️ Desenvolvimento

### Scripts Disponíveis
- `npm run dev` - Inicia servidor em modo desenvolvimento
- `npm run build` - Compila para produção
- `npm start` - Inicia servidor em produção
- `npm test` - Executa testes

### 📁 Estrutura do Projeto
```
src/
├── app.js              # Configuração do Express
├── server.js           # Inicialização do servidor
├── config/
│   ├── database.js     # Configuração do banco
│   ├── appConfig.js    # Configurações gerais
├── controllers/        # Controladores da API
├── models/             # Modelos Sequelize
├── routes/             # Definição das rotas
├── middlewares/        # Middlewares customizados
└── database/
    ├── index.js        # Conexão com banco
    └── migrations/     # Migrações do banco
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
