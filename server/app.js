const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;

const users = require('./controllers/userController');
const folders = require('./controllers/folderController');
const tasks = require('./controllers/taskController');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//To allow api calls from origin
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Origin',
    '*',
    'Origin, X-Requested-With, Content-Type, Accept, content-type'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  next();
});

//Setting up the endpoints
app.get('/:userId', users.getUser);

app.get('/:userId/folders', folders.getFolders);
app.post('/:userId/folders', urlencodedParser, folders.postFolder);
app.put('/:userId/folders', urlencodedParser, folders.updateFolder);
app.delete('/:userId/folders', urlencodedParser, folders.deleteFolder);

app.get('/:userId/tasks', urlencodedParser, tasks.getTasks);
app.post('/:userId/tasks', urlencodedParser, tasks.postTask);
app.put('/:userId/tasks', urlencodedParser, tasks.updateTaskState);
app.put('/:userId/tasks/edit', urlencodedParser, tasks.updateTaskContent);
app.delete('/:userId/tasks', urlencodedParser, tasks.deleteTask);

app.listen(port, () => {
  console.log(`CRUD API listening at port: ${port}`);
});
