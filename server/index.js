import express from "express";
import graphqlServer from "express-graphql";
import { buildSchema } from "graphql";
import cors from "cors";
import path from "path";

import data from "./data";

const schema = buildSchema(`
  type Query {
    homepage: Homepage
    faqs: [Faq]
  }
  type Faq {
    title: String!
    body: String!
  }
  type Homepage {
    heading: String!
    subheading: String!
    heroImageUrl: String!
  }
`);

const PORT = 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, "../../build"), { index: false }));
app.use(
  "/graphql",
  graphqlServer({
    schema,
    rootValue: data
  })
);

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "../../build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`); // eslint-disable-line
});
