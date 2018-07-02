import express from "express";
import graphqlServer from "express-graphql";
import { buildSchema } from "graphql";
import cors from 'cors';
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

const PORT = 4000;
const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlServer({
    schema,
    rootValue: data
  })
);
app.listen(PORT);
