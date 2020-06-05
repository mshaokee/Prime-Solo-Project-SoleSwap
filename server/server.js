
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const shoesRouter = require('./routes/shoes.router');
const detailRouter = require('./routes/detail.router');
const accountRouter = require('./routes/account.router');
const editRouter = require('./routes/edit.router');

//heroku require path
const path = require('path');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/shoes', shoesRouter);
app.use('/details', detailRouter)
app.use('/accounts', accountRouter);
app.use('/account/edit', editRouter);

// Serve static files
app.use(express.static('build'));

// Adding for HEROKU - CATCH ALL -> Go here instead if above routes are not found.
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
