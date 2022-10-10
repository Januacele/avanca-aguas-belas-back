# <p align = "center"> Projeto Autoral - Avança Águas Belas </p>

<p align="center">
   <img src="https://miro.medium.com/max/1400/1*PoH0pTYeT1zmX06Ehbq1UA.jpeg"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Januacele Vieira-4dae71?style=flat-square" />
   <img src="https://img.shields.io/badge/language-Typescript-4dae71?style=flat-square" />
</p>

##  :clipboard: Descrição
  O projeto Avança Águas Belas é um sistema para gestores públicos utilizarem para registrar dados quanto a infraestrutura da cidade. Foi idealizado para
  o secretário de infraestrutura utilizar, onde ele irá cadastrar os bairros da cidade e as ruas. Para cada bairro serão respondidas perguntas como se no 
  bairro possui posto de saúde, posto de segurança, escola, creche. Paras as ruas serão respondidas questões como a extensão, se a rua é asfaltada, se 
  tem iluminação pública, se tem abastecimento de água e a partir dessas informações poderão ser gerados resultados gráficos que ajudarão na tomada de 
  decisão e planejamento.
***
## :computer:	 Tecnologias e Conceitos

- Node.js
- TypeScript
- SQL database with Prisma
- SuperTest e o Jest
- JWTs

***
## :rocket: Rotas

#### Rota de Cadastro e Login de usuário
```yml
POST /signup
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum",
        "name": "loremipsum",
        "cpf": "000.000.000-00",
        "secretary": "loremipsum"
}
```

```yml
POST /signin
    - Rota para fazer login
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum"
}
```

#### Rota de Bairros
```yml 
POST /district (autenticada)
    - Rota para inserir um bairro
    - headers: { "Authorization": "Bearer $token" }
    - body:{
       "districtName": "Bairro1"
}
```

```yml
GET /districts (autenticada)
    - Rota para listar os bairros cadastrados
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /district/:id (autenticada)
    - Rota para listar um bairro pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
PATCH /district/:id (autenticada)
    - Rota para atualizar um bairro pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {
      "districtName": "Bairro1 Updated"
    }
``` 

```yml
DELETE /district/:id (autenticada)
    - Rota para deletar um bairro pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 
#### Rota de Ruas

```yml
POST /streat (autenticada)
    - Rota para cadastrar uma rua
    - headers: { "Authorization": "Bearer $token" }
    - body: {
      "streatName": "Rua Lorem",
      "districtId": 1
    }
``` 

```yml
GET /streats (autenticada)
    - Rota para listar uma rua
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /streat/:id (autenticada)
    - Rota para listar uma rua pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 
```yml
PATCH /streat/:id (autenticada)
    - Rota para listar uma rua pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {
       "streatName": "Rua Lorem Updated",
       "districtId": 1
    }
``` 
```yml
DELETE /streat/:id (autenticada)
    - Rota para listar uma rua pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 
#### Rota Informações Ruas

```yml
POST /streat/information (autenticada)
    - Rota para cadastrar informações da rua
    - headers: { "Authorization": "Bearer $token" }
    - body: {
      "totalArea": 400.00,
      "hasBasicSanitation": true,
      "hasAsphalt": true,
      "hasPaving": true,
      "hasStreetLighting": true,
      "hasCleanWaterAccess": true,
      "streatId": 1
    }
``` 
```yml
GET /streat/information/:id (autenticada)
    - Rota para listar informações de uma rua pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 
```yml
PATCH /streat/information/:id (autenticada)
    - Rota para atualizar os dados de uma rua pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {
       "totalArea": 600,
      "hasBasicSanitation": false,
      "hasAsphalt": false,
      "hasPaving": false,
      "hasStreetLighting": false,
      "hasCleanWaterAccess": false
    }
``` 

#### Rota Informações Bairros

```yml
POST /district/information (autenticada)
    - Rota para cadastrar informações do bairro
    - headers: { "Authorization": "Bearer $token" }
    - body: {
     "hasHospital": false,
    "hasPark": false,
    "hasHealthCenter": false,
    "hasSecurityCenter": false,
    "hasSchool": false,
    "hasKindergartens": false,
    "districtId": 1
    }
``` 
```yml
GET /district/information/:id (autenticada)
    - Rota para listar informações de um bairro pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 
```yml
PATCH /district/information/:id (autenticada)
    - Rota para atualizar os dados de um bairro pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {
       "hasHospital": true,
      "hasPark": true,
      "hasHealthCenter": true,
      "hasSecurityCenter": true,
      "hasSchool": true,
      "hasKindergartens": true
    }
``` 

## 🏁 Rodando a aplicação

Este projeto foi inicializado com o [node js](https://nodejs.org/pt-br/docs/), então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/Januacele/repoprovas-back
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm dev
```


## 🏁 Rodando os testes


Para rodar os testes unitários e de integração, use o seguinte comando dentro da pasta back-end:

```
  npm run test
```

Para rodar apenas o teste unitário, use o seguinte comando dentro da pasta back-end:

```
   npm run test:unit
```

Para rodar apenas o teste de integração, use o seguinte comando dentro da pasta back-end:

```
  npm run test:integration
```
