import { gql } from 'apollo-server';
import { getTypeDefs } from './utils.js';

export const typeDefs = gql`${await getTypeDefs()}`;