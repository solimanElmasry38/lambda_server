// const GitHubStrategy = require('passport-github').Strategy;
// const passport = require('passport');
// passport.serializeUser(function (user, cb) {
//   cb(null, user.id);
// });

// passport.deserializeUser(function (id, cb) {
//   cb(null, id);
// });

// passport.use(
//   new GitHubStrategy( 
//     {
//       clientID: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       callbackURL: 'http://127.0.0.1:8888/auth/github/callback',
//     },
//     function (_accessToken, _refreshToken, profile, cb) {
//       console.log(_accessToken)
//       console.log(profile._json.avatar_url)
//       console.log(profile._json.login)


//       cb(null, profile);
//     }
//   )
// );