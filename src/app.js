const express = require('express');
const accountRouter = require('./routers/account.router');
const taskRouter = require('./routers/task.router');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/account', accountRouter);
app.use('/task', taskRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});