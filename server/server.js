const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const db = require("./config/connection");
// const routes = require('./routes');  ==not needed with graphql
const { typeDefs, resolvers } = require("./schemas");

const app = express();
const PORT = process.env.PORT || 3001;
//start new instance of apolloserver
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
//apply the middleware to express app
server.applyMiddleware({ app });
// express middlware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.use(routes); ==not needed with apollo & graphgl

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    consol; // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    e.log(`🌍 Now listening on localhost:${PORT}`);
  });
});
