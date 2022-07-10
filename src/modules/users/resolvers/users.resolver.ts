export const userResolver = {
  Query: {
    jwt: async (_, {email, password}, { dataSources }) => {
      return dataSources.userService.login(email, password);
    },
    user: async (_, { id }, { dataSources }) => {
      return dataSources.userService.getUserById(id);
    }
  },

  Mutation: {
    createUser: async (_, { firstName, lastName, password, email }, { dataSources }) => { 
      return dataSources.userService.createUser({firstName, lastName, password, email});
    }
  }
}