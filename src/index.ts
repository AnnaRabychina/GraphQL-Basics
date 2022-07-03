import { ApolloServer } from 'apollo-server';
import 'dotenv/config';
import { typeDefs } from './schema.js';

const PORT = process.env.PORT || 3000;
const server = new ApolloServer({ typeDefs });

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});