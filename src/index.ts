import express from "express";
require("dotenv").config();
import { expressMiddleware } from "@apollo/server/express4";
import { apollo_server, server } from "./conf/apollo";
import './conf/passport'

const passport = require('passport');
const session = require('express-session');

(async function () {
  const app = express();
  
  app.use(express.json());
  await apollo_server();
  app.use(express.urlencoded({ extended: true }));
  app.use("/graphql", expressMiddleware(server));

  app.use(
    session({
      secret: process.env.SECRET,
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
    res.send("Hello World!");
  });



//auth
app.get('/auth/github', passport.authenticate('github'));

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (_req, res) {
    // Successful authentication, redirect home.
    res.redirect('/passport');
  }
);

app.post('/api/logout', (_req, res) => {
	res.clearCookie('connect.sid');  // clear the session cookie

});


  app.listen(process.env.PORT, () => {
    console.log(`🚀 Express ready at http://localhost:${process.env.PORT}`);
  });
})();


