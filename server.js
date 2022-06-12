// const express = require("express")
// const routes = require("./controllers")
// const session = require('express-session')
// // import sequelize connection
// const sequelize = require("./config/connection")
// const SequlizeStore = require('connect-session-sequelize')(session.Store)
// const app = express()
// const PORT = process.env.PORT || 3001

// const sess = {
//     secret: 'Super secret secret',
//     cokkie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequlizeStore({
//         db: sequelize
//     })
// }
// app.use(session(sess))
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// app.use(routes)

// // sync sequelize models to the database, then turn on the server

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => {
//     console.log(`App listening on port ${PORT}!`)
//     })
// })
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session')
const helpers = require('./utils/helpers')


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequlizeStore = require('connect-session-sequelize')(session.Store)

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequlizeStore({
    db: sequelize
  })
}
app.use(session(sess))
const hbs = exphbs.create({helpers});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
