<div align="center" >
  <img width="150px" src="https://studio-luciana-viana-front.vercel.app/static/media/Logo_c_fundo@4x.8125ea6d.png" alt="studio-logo" width="400">
  <br>
  <br>
  <h1>Studio Luciana Viana</h1>
</div>

## 📝 Descrição

Studio Luciana Viana é uma aplicação web que permite usuários a realizar agendamentos ao salão de beleza Studio Luciana Viana. 
O projeto automatiza o processo realizado pessoalmente que conta com o seguintes passos:
 - Preenchimento de um formulário de avaliação
 - Preenchimento de um formulário de histórico 
 - Agendamento

O usuário só pode realizar o agendamento se obtiver a ficha de avaliação e historicos preenchidos.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [eslint](https://eslint.org/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Calendly](https://calendly.com/pt)

## 📦 Instalação

Clone o repositório.

```bash
# https
$ git clone https://github.com/frreiro/studio-luciana-viana
# ssh
$ git clone git@github.com:frreiro/studio-luciana-viana.git
```

Instale as dependências.

```bash
$ cd studio-luciana-viana && npm install
#or
$ cd studio-luciana-viana &&  yarn
```

## 🚀 Uso

Este projeto necessita de um arquivo ambiente
 - .env

Para criar o arquivo e saber as variáveis, siga as instruções do:
- .env.example


### Modo de desenvolvimento

Para rodar em ambiente de desenvolvimento, crie o arquivo `.env` baseado no arquivo `.env.example` com as suas configurações e rode os seguintes comandos:    
```bash
$ npm run dev
#or
$ yarn run dev
```

## 📌 Features

- [x] Cadastro do usuário 
- [x] Login do usuário
- [x] Registro do histórico de um usuário
- [x] Atualização do histórico de um usuário
- [x] Leitura do histórico de um usuário
- [x] Registro da avaliação de um usuário
- [x] Leitura da avaliação de um usuário
- [x] Atualização da avaliação de um usuário

## 🔀 Routes

- **POST** `/signup` - Registra um novo usuário
  - headers: none
  - body:
	```json
	{
		"username": "yourusername",
		"email": "youremail@example.com",
		"password": "yourpassword",
		"birthday": "DD/MM/YYYY",
		"phone": "21999999999",
		"occupation": "jobname",
		"musicStyle": "anymusicstyle",
	}
	```
- **POST** `/login` - Login de um usuário
  - headers: none
  - body:
	```json
	{
		"email": "youremail@example.com",
		"password": "yourpassword",
	}
	```
- **POST** `/historic` - Registra um histórico de um usuário 
    - headers: 
		```json
		{ "Authorization": "Bearer $token" }
		```
  - body:
	```json
	{
		"alergies": "lorem ipsum" | null,
		"familyAlergies": "lorem ipsum" | null,
		"skinDeseases": "lorem ipsum" | null,
		"medicines": "lorem ipsum" | null,
		"pregnancy": true | false,
	}
	```
- **PUT** `/historic/:id` - Atualiza o histórico de um usuário 
    - headers: 
		```json
		{ "Authorization": "Bearer $token" }
		```
  - body:
	```json
	{
		"alergies": "lorem ipsum" | null,
		"familyAlergies": "lorem ipsum" | null,
		"skinDeseases": "lorem ipsum" | null,
		"medicines": "lorem ipsum" | null,
		"pregnancy": true | false,
	}
	```
- **GET** `/historic` - Recebe informações do histórico de um usuário 
  - headers: 
	```json
	{ "Authorization": "Bearer $token" }
	```
  - body: none
  - response: 
	```json
	{
		"alergies": "lorem ipsum" | null,
		"familyAlergies": "lorem ipsum" | null,
		"skinDeseases": "lorem ipsum" | null,
		"medicines": "lorem ipsum" | null,
		"pregnancy": true | false,
	}
	```
- **POST** `/assessment` - Registra a avaliação de um usuário 
    - headers: 
		```json
		{ "Authorization": "Bearer $token" }
		```
  - body:
	```json
	{
		"skinType": "Seca" | "Oleosa" | "Normal" | null,
		"spots": "lorem ipsum" | null,
		"skinChanges": "lorem ipsum" | null,
		"acidTreatment": "lorem ipsum" | null,
		"skinHidratation": "lorem ipsum" | null,
		"hasDiabetes": true | false,
		"alreadyWax": true | false,
		"lastStyle": "CERA_FRIA" | "CERA_QUENTE" | "LAMINA" | "LASER" | null,
	}
	```
- **PUT** `/assessment/:id` - Atualiza a avaliação de um usuário 
    - headers: 
		```json
		{ "Authorization": "Bearer $token" }
		```
  - body:
	```json
	{
		"skinType": "Seca" | "Oleosa" | "Normal" | null,
		"spots": "lorem ipsum" | null,
		"skinChanges": "lorem ipsum" | null,
		"acidTreatment": "lorem ipsum" | null,
		"skinHidratation": "lorem ipsum" | null,
		"hasDiabetes": true | false,
		"alreadyWax": true | false,
		"lastStyle": "lorem ipsum" | null,
	}
	```
- **GET** `/assessment` - Recebe informações da avaliação de um usuário 
  - headers: 
	```json
	{ "Authorization": "Bearer $token" }
	```
  - body: none
  - response: 
	```json
	{
		"skinType": "Seca" | "Oleosa" | "Normal" | null,
		"spots": "lorem ipsum" | null,
		"skinChanges": "lorem ipsum" | null,
		"acidTreatment": "lorem ipsum" | null,
		"skinHidratation": "lorem ipsum" | null,
		"hasDiabetes": true | false,
		"alreadyWax": true | false,
		"lastStyle": "lorem ipsum" | null,
	}
	```
- **GET** `/user` - Recebe informações de um usuário 
  - headers: 
	```json
	{ "Authorization": "Bearer $token" }
	```
  - body: none
  - response: 
	```json
	{
		"id": 0,
		"name": "username",
		"email": "useremail",
	}
	```

## 💽 Banco de dados

Esse projeto usa o banco de dados [PostgreSQL](https://www.postgresql.org/).
- **Nome do banco de dados:** `studiodb`
- **`Tabelas`:**
  - **`user`:** Armazena todos os usuários
  - **`historic`:** Armazena todos os históricos dos usuários
  - **`assessment`:** Armazena todos as avaliações dos usuários
  - **`session`:** Armazena todos as sessões dos usuários 


