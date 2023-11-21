import express from "express";
import cors from "cors";
require("dotenv").config();
import { expressMiddleware } from "@apollo/server/express4";
import { apollo_server, server } from "./conf/apollo";

(async function () {
  const app = express();
  app.use(cors());
  app.use(express.json());
  await apollo_server();
  app.use(express.urlencoded({ extended: true }));
  app.use("/graphql", expressMiddleware(server));

  app.get("/", (_req, res) => {
    res.send("Hello World!");
  });

  app.listen(process.env.PORT, () => {
    console.log(`🚀 Express ready at http://localhost:${process.env.PORT}`);
    
  });
})();
