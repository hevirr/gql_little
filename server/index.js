const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const createUser = require('./helpers');

//db imitation
const users = [
  {
    id: 1,
    username: 'john_snow',
    age: 22,
  },
];

const app = express();
app.use(cors());

const root = {
  getAllUsers: () => users,
  getUser: ({ id }) => users.filter((user) => id === user.id),
  createUser: ({ input }) => {
    const user = createUser(input);
    users.push(user);
    return user;
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  }),
);

app.listen(3001, () => console.log('server started on port 3001'));
