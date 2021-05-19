# Portal de Notícias - React.js 📰

###### Veja o projeto em execução: [Portal de Notícias](https://...) 

O aplicativo é um portal de notícias desenvolvido em React.js para a exibição de notícias sobre dois tópicos (tecnologia e ciência), os quais são fornecidos pela API do The New York Times.

### 💡 Escolhas
- Design: Como o aplicativo consome a API do The New York Times, foi optado por fazer um visual similar ao visual do próprio NY Times. Também foi preferido fazer todo o visual básico da aplicação, usando `Styled Componentes`, antes de colocar lógica nos componentes.
- API: Como a API utilizada é bastante limitada, sem quaisquer ferramentas de filtro ou ordenação, foi escolhido sincronizar os dados da API com o IndexedDB utilizando `Axios` e `Dexie.js` para tal. Dessa forma, é possível buscar ou todas as notícias ou notícias de um tópico específico. Também permitiu a realização de um _infinite scroll_ com _skeleton loading_.   
- Gerenciamento de estado: Foi escolhido utilizar o `Redux Toolkit` para manter o projeto mais compreensível e organizado. Também foi optado por separar os modelos e as funções de integração com o banco em classes para posterior reutilização no [vue-exam](https://...).
- Rotas: Foi utilizado o `React Router` para criar rotas para os diferentes tipos de busca.

ESTRUTURA DE DADOS

  
### 🔧 Instalação e execução
Clone o projeto e acesse a pasta:
```bash
$ https://github.com/LucasSFranco/react-exam.git && cd react-exam
```

Siga os passos abaixo:
```bash
# instale as dependências
$ yarn

# inicie o projeto
$ yarn start

# ou

# instale as dependências
$ npm install

# inicie o projeto
$ npm run start
```

