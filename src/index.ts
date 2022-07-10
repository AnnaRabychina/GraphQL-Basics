import { ApolloServer } from 'apollo-server';
import 'dotenv/config';
import { typeDefs } from './schema.js';
import { appResolvers } from './resolvers.js';
import { appServices } from './services.js';

const resolvers = {
  ...appResolvers
} 

const services = {
  ...appServices
}

const PORT = process.env.PORT || 3000;
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  csrfPrevention: true, 
    context: ({ req }) => { 
      const token = req.headers.authorization || '';
      return { token };  
    },
  dataSources : () => {
  return services;
  },  
});


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});