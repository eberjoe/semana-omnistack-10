# Buscador de Devs
Projeto no framework React, utilizando React Native para plataformas mobile e ReactJS com NodeJS no backend.

## Detalhes de implementação

### Backend
A arquitetura do projeto com a divisão backend/frontend exige a compreensão do padrão REST e a implementação de APIs RESTful em JavaScript.

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


