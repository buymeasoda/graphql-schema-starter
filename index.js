const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
  type Query {
    foo: String
  }
`;

const server = new ApolloServer({typeDefs, mockEntireSchema: true});

server.listen(4001).then(({url}) => console.log(`Server: ${url}`));
