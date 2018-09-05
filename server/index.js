const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      'editor.theme': 'light',
      'editor.cursorShape': 'block'
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
