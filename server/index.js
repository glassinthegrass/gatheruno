require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session')
const peopleCtrl = require('./controllers/peopleCtrl')
// const birthdayCtrl = require('./controllers/birthdayCtrl')
const postCtrl = require('./controllers/postCtrl')
const authCtrl = require('./controllers/authCtrl')
// const authenticateUser = require('./middleware/authenticateUser')


const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie: {
        maxAge: 31556952000
    }
}))

//people or person table
app.get('/api/people', peopleCtrl.getPeople);
app.post('/api/people', peopleCtrl.addPerson);
app.get('/api/people/:id', peopleCtrl.getPerson);
app.put('/api/people/:id', peopleCtrl.updatePerson);
app.delete('/api/people/:id', peopleCtrl.deletePerson);

//posts or posts table
app.get('/api/posts', postCtrl.getPosts);
app.post('/api/posts', postCtrl.addPost);
app.get('/api/posts/:id', postCtrl.getPost);
app.put('/api/posts/:id', postCtrl.editPost);
app.delete('/api/posts/:id', postCtrl.deletePost);

//COOKIES/auth
app.get('/auth/user', authCtrl.getUser);
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.delete('/auth/logout', authCtrl.logout);

//Birthdays
// app.get('/api/birthday', birthdayCtrl.getBirthday);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    } 
})
.then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log(`DB connected & Server rockin out on ${SERVER_PORT}fm`));
})
.catch(err => console.log(err));


// const SERVER_PORT = 5050;
