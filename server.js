const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/schema");
const root = require("./graphql/resolvers/index");
require("./api/db/index");
const CORS = require("cors");

const app = express();
app.use(CORS());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(process.env.PORT || 4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
