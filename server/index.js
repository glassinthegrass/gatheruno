require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const peopleCtrl = require('./controllers/peopleCtrl')
const birthdayCtrl = require('./controllers/birthdayCtrl')
const postCtrl = require('./controllers/postCtrl')
const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

//people or person table
app.get('/api/people', peopleCtrl.getPeople);
app.post('/api/people', peopleCtrl.addPerson);
app.get('/api/people/:id', peopleCtrl.getPerson);
app.put('/api/people/:id', peopleCtrl.updatePerson);
app.delete('/api/people/:id', peopleCtrl.deletePerson);

//posts or posts table
app.get('/api/posts', postCtrl.getPosts);
// app.post('/api/people', peopleCtrl.addPerson);
// app.get('/api/people/:id', peopleCtrl.getPerson);
// app.put('/api/people/:id', peopleCtrl.updatePerson);
// app.delete('/api/people/:id', peopleCtrl.deletePerson);


//Birthdays
app.get('/api/birthday', birthdayCtrl.getBirthday);

// app.get('/auth/login', ctrl.);
// app.get('/auth/logout', ctrl.);

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
