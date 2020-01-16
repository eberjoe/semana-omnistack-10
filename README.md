# Buscador de Devs
Projeto no framework React, utilizando React Native para plataformas mobile e ReactJS com Node.js no backend.

## Detalhes de implementação
A arquitetura do projeto com a divisão backend/frontend exige a compreensão do padrão REST e a implementação de APIs RESTful em JavaScript.

### Backend

Métodos HTTP: **GET**, **POST**, **PUT**, **DELETE**.

#### Tipos de parâmetros
* Query Params: request.query (filtros, ordenação, paginação, etc.)
* Route Params: request.params (identifica um recurso na alteração ou remoção)
* Body: request.body -- pode ter vários formatos (JSON, XML, etc.)

#### Banco de dados
Foi utilizado o MongoDB Atlas em conjunto com a biblioteca Mongoose.

#### APIs externas
A biblioteca Axios é utilizada para o consumo de APIs externas, como a do GitHub.

#### Funções do controller
* index
* show
* store
* update
* destroy

### Frontend
Um projeto React foi inicializado com o seguinte comando do gerenciador de pacotes **Yarn**:

```yarn create react-app web```

Foram excluídos os seguintes arquivos de ```web/src```:
* ```App.test.js```
* ```index.css```
* ```logo.svg```
* ```serviceWorker.js```
* ```setupTests.js```

#### Conceitos de React

##### Componente
Um componente é um bloco isolado de HTML, CSS e JS, o qual não interfere no resto da aplicação. O componente possui:

* *Propriedade*: informações que um componente pai passa para um componente filho.

* *Estado*: informações mantidas pelo componente, baseando-se no conceito de imutabilidade.