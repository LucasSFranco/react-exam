# Portal de Notícias - React.js 📰

###### Veja o projeto em execução: [Portal de Notícias](https://brave-engelbart-cb0aae.netlify.app/) 

O aplicativo é um portal de notícias desenvolvido em React.js para a exibição de notícias sobre dois tópicos (tecnologia e ciência), os quais são fornecidos pela API do The New York Times.

### 💡 Escolhas
- Design: Como o aplicativo consome a API do The New York Times, foi optado por fazer um visual similar ao visual do próprio NY Times. Também foi preferido fazer todo o visual básico da aplicação, usando `Styled Componentes`, antes de colocar lógica nos componentes. Além disso, o aplicativo é totalmente responsivo e utiliza o princípio de _mobile first_.
- API: Como a API utilizada é bastante limitada, sem quaisquer ferramentas de filtro ou ordenação, foi escolhido sincronizar os dados da API com o IndexedDB utilizando `Axios` e `Dexie.js` para tal. Dessa forma, é possível salvar notícias mais antigas do que as que são retornadas pela API e é possível buscar ou todas as notícias ou notícias de um tópico específico. Também permitiu a realização de um _infinite scroll_ com _skeleton loading_.   
- Gerenciamento de estado: Foi escolhido utilizar o `Redux Toolkit` para manter o projeto mais compreensível e organizado. Também foi optado por separar os modelos e as funções de integração com o banco em classes para posterior reutilização no [vue-exam](https://github.com/LucasSFranco/vue-exam.git).
- Rotas: Foi utilizado o `React Router` para criar rotas para os diferentes tipos de busca.
- Estrutura do projeto:
  - assets: possui alguns recursos estáticos, como fontes, ícones e imagens.
  - components: possui os componentes do projeto e está dividida em uma estrutura baseada no _atomic design_:
    - atoms: componentes genéricos, que ou são reutilizados (Container) ou possuem lógica própria (Modal);
    - molecules: componentes específicos e que não têm integração com recursos externos ou com o gerenciador de estado;
    - organisms: componentes específicos e que têm integração com recursos externos ou com o gerenciador de estado.
  - models: mantém os objetos manipulados (Article).
  - services: possui a integração com os recursos externos (IndexedDB e API do NYT).
  - store: serve para gerenciar o estado da aplicação. 
  - styles: possui os estilos globais da aplicação.
  - views: possui as rotas e as páginas da aplicação.
- Testes: Foi optado por fazer os testes mais importantes da aplicação por meio do Cypress, no qual é testada toda a funcionalidade, para facilitar a equalização dos testes nos dois projetos. Além disso, também foram feitos alguns testes de componente, sobretudo utilizando _snapshot_, para garantir que os componentes estão sendo gerados corretamente.
  
### 🔧 Instalação e execução
Clone o projeto e acesse a pasta:
```bash
$ https://github.com/LucasSFranco/react-exam.git && cd react-exam
```

Comandos:
```bash
# instala as dependências
$ yarn

# compila e recarrega automaticamente para desenvolvimento
$ yarn start

# compila e minifica para produção
$ yarn build

# executa os testes unitários
$ yarn test:unit

# compila e recarrega automaticamente para os testes e2e
$ yarn test-server

# executa os testes e2e
$ yarn test:e2e
```
___OBS___: Após executar os testes e2e, é possível visualizar o _coverage report_ dos testes: `react-exam/coverage/lcov-report/index.html`.


