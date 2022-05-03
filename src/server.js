const users = [
    {
      id: 1,
      name: "Francis",
      email: "franny@ha.com",
      addresses: [
        {
          street: "1644 Melrose Place",
          city: "Los Angeles",
          country: "USA",
        },
      ],
    },
    {
      id: 2,
      name: "Janet",
      email: "janet@foo.com",
      addresses: [
        {
          street: "1234 Lincoln Avenue",
          city: "Dallas",
          country: "USA",
        },
      ],
    }
  ];
  
  const resolvers = {
    Query: {
      getUser: function (_, { id }) {
        return users.find(u => u.id === id)
      },
      users: function () {
        return users
      }
    },
   Mutation: {
      addUser: (_, { user }) => {
        const id = users.length + 1;
        const newUser = {
          id,
          name: user.name,
          email: user.email,
          addresses: user.addresses,
        };
        users.push(newUser)
        return newUser;
      },
    },
  };
  
  const fs = require("fs");
  const { makeExecutableSchema } = require("@graphql-tools/schema");
  
  // grab the GraphQL type definitions
  let typeDefs = fs.readFileSync("schema.graphql", {
    encoding: "utf8",
    flag: "r",
  });
  
  // connect schema with resolvers
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  
  const express = require("express");
  const { graphqlHTTP } = require("express-graphql");
  const cors = require("cors");
  const expressPlayground = require("graphql-playground-middleware-express").default;

  // make our /graphql endpoint where requests are sent
  const app = express();

  app.use(cors())
  
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
    })
  );

  app.get('/', expressPlayground({ endpoint: '/graphql' }))

  app.listen(5000, () => console.log("Express is now live at localhost:5000"));