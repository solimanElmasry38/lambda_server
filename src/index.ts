import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { apollo_server, server } from "./conf/apollo";
import passport from "passport";
import session from "express-session";
import cors from "cors";
require("dotenv").config();
import "./conf/passport";
const cookieParser = require("cookie-parser");

(async function () {
  const app = express();
  const corsOpts = {
    origin: "*",

    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  };
  app.use(cookieParser());

  app.use(cors(corsOpts));
  app.use(express.json());
  await apollo_server();
  app.use(express.urlencoded({ extended: true }));
  app.use("/graphql", expressMiddleware(server));

  app.use(
    session({
      secret: process.env.SESSION_SECRET!,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.get("/", (_req, res) => {
    console.log(_req.cookies);
    res.send("Hello World!");
  });

  //auth
  app.get("/auth/github", passport.authenticate("github"));

  app.get(
    "/auth/github/callback",
    passport.authenticate("github", { failureRedirect: "/login" }),
    function (_req, _res) {
      // Successful authentication, redirect home.
      // console.log(_req.session.cookie())

      _res.send(_req.cookies["connect.sid"]);
      // res.redirect('http://localhost:5173');
    }
  );

  // app.post('/api/logout', (_req, res) => {
  // 	res.clearCookie('connect.sid');  // clear the session cookie
  //   session.clearCookie('connect.sid')
  //   res.send("logout")

  // });

  app.listen(process.env.EX_PORT, () => {
    console.log(`🚀 Express ready at http://localhost:${process.env.EX_PORT}`);
  });
})();

// import express from "express";
// import { ApolloServer } from "apollo-server-express";
// import passport from 'passport';
// import session from 'express-session';
// import cors from "cors";
// import dotenv from "dotenv";
// import './conf/passport';
// import cookieParser from "cookie-parser";
// import { makeExecutableSchema } from "@graphql-tools/schema";
// import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
// import { loadSchemaSync } from "@graphql-tools/load";
// import { resolvers } from "./graphql/resolvers/resolvers";

// dotenv.config();

// (async function () {
//   const app = express();

//   // CORS Configuration
//   const corsOptions = {
//     origin: process.env.CORS_ORIGIN || '*',
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type'],
//   };
//   app.use(cors(corsOptions));

//   app.use(cookieParser());
//   app.use(express.json());
//   app.use(express.urlencoded({ extended: true }));

//   // GraphQL Schema Setup
//   const typeDefs = loadSchemaSync("../**/*.gql", {
//     loaders: [new GraphQLFileLoader()],
//   });
//   const schema = makeExecutableSchema({
//     typeDefs,
//     resolvers,
//   });

//   // Apollo Server Setup
//   const apolloServer = new ApolloServer({
//     schema,
//     context: ({ req, res }) => ({
//       test: true,
//       req,
//       res,
//     }),
//   });

//   // Apply Apollo Server middleware to Express
//   apolloServer.applyMiddleware({ app, path: "/graphql" });

//   // Express Session Middleware
//   app.use(session({
//     secret: process.env.SESSION_SECRET!,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       maxAge: 24 * 60 * 60 * 1000,
//     },
//   }));

//   // Passport Middleware
//   app.use(passport.initialize());
//   app.use(passport.session());

//   // Routes
//   app.get("/", (_req, res) => {
//     res.send("Hello World!");
//   });

//   // GitHub Authentication
//   app.get('/auth/github', passport.authenticate('github'));
//   app.get(
//     '/auth/github/callback',
//     passport.authenticate('github', { failureRedirect: '/login' }),
//     function (_req, res) {
//       res.send(_req.cookies["connect.sid"]);
//     }
//   );

//   // Logout Route
//   // app.post('/logout', (_req, res) => {
//   //   _req.logout();
//   //   res.clearCookie('connect.sid');
//   //   res.send("Logged out successfully");
//   // });

//   // Error Handling Middleware
//   app.use((err, _req, res, _next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
//   });

//   // Start Server
//   const port = process.env.PORT || 3000;
//   app.listen(port, () => {
//     console.log(`🚀 Express server running on port ${port}`);
//   });
// })();

// import express, { Application } from "express";
// import { ApolloServer } from "apollo-server-express";
// import passport from 'passport';
// import session from 'express-session';
// import cors from "cors";
// import dotenv from "dotenv";
// import './conf/passport';
// import cookieParser from "cookie-parser";
// import { makeExecutableSchema } from "@graphql-tools/schema";
// import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
// import { loadSchemaSync } from "@graphql-tools/load";
// import { resolvers } from "./graphql/resolvers/resolvers";

// dotenv.config();

// (async function () {
//   // const app: Application = express(); // Explicitly define app type as Application
//   const app = express() as Application;

//   // CORS Configuration
//   const corsOptions = {
//     origin: process.env.CORS_ORIGIN || '*',
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type'],
//   };
//   app.use(cors(corsOptions));

//   app.use(cookieParser());
//   app.use(express.json());
//   app.use(express.urlencoded({ extended: true }));

//   // GraphQL Schema Setup
//   const typeDefs = loadSchemaSync("../**/*.gql", {
//     loaders: [new GraphQLFileLoader()],
//   });
//   const schema = makeExecutableSchema({
//     typeDefs,
//     resolvers,
//   });

//   // Apollo Server Setup
//   const apolloServer = new ApolloServer({
//     schema,
//     context: ({ req, res }) => ({
//       test: true,
//       req,
//       res,
//     }),
//   });

//   // Apply Apollo Server middleware to Express
//   apolloServer.applyMiddleware({ app, path: "/graphql" });

//   // Express Session Middleware
//   app.use(session({
//     secret: process.env.SESSION_SECRET!,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       maxAge: 24 * 60 * 60 * 1000,
//     },
//   }));

//   // Passport Middleware
//   app.use(passport.initialize());
//   app.use(passport.session());

//   // Routes
//   app.get("/", (_req, res) => {
//     res.send("Hello World!");
//   });

//   // GitHub Authentication
//   app.get('/auth/github', passport.authenticate('github'));
//   app.get(
//     '/auth/github/callback',
//     passport.authenticate('github', { failureRedirect: '/login' }),
//     function (_req, res) {
//       res.send(_req.cookies["connect.sid"]);
//     }
//   );

//   // Error Handling Middleware
//   app.use((err, _req, res, _next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
//   });

//   // Start Server
//   const port = process.env.PORT || 3000;
//   app.listen(port, () => {
//     console.log(`🚀 Express server running on port ${port}`);
//   });
// })();
