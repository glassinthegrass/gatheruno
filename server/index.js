require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const peopleCtrl = require("./controllers/peopleCtrl");
const birthdayCtrl = require("./controllers/birthdayCtrl");
const groupCtrl = require("./controllers/groupCtrl");
const postCtrl = require("./controllers/postCtrl");
const authCtrl = require("./controllers/authCtrl");
const authenticateUser = require("./middleware/authenticateUser");

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 31556952000,
      sameSite: "Strict",
    },
  })
);

app.get("/api/groups", groupCtrl.getGroups);
app.get("/api/groupNames", groupCtrl.getGroupNames);
app.get("/api/groups/:group_name", groupCtrl.getPeopleInGroup);
app.post("/api/groups", groupCtrl.addGroup);

//people or person table
app.get("/api/people", peopleCtrl.getPeople);
app.post("/api/people", peopleCtrl.addPerson);
app.get("/api/people/:person_id", peopleCtrl.getPerson);
app.put("/api/people/:id", peopleCtrl.updatePerson);
app.delete("/api/people/:id", peopleCtrl.deletePerson);

//posts or posts table
app.get("/api/posts", postCtrl.getPosts);
app.post("/api/posts", postCtrl.addPost);

app.get("/api/posts/:person_id", postCtrl.getPost);
app.get("/api/posts/:user_id", postCtrl.getPostProfile);
app.put("/api/posts/:id", postCtrl.editPost);
app.delete("/api/posts/:id", postCtrl.deletePost);

//COOKIES/auth
app.get("/auth/user", authCtrl.getUser);
app.post("/api/register", authenticateUser.register);
app.post("/auth/login", authCtrl.login);
app.delete("/auth/logout", authCtrl.logout);
app.get("/auth/profile/:email", authCtrl.getProfile);

// Birthdays
app.get("/api/birthday", birthdayCtrl.getBirthday);
app.post("/api/email", birthdayCtrl.sendEmail);
app.post("/api/birthday-email", birthdayCtrl.sendEmail);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((dbInstance) => {
    app.set("db", dbInstance);
    app.listen(SERVER_PORT, () =>
      console.log(`Now you're cooking with GAS down here in  Server Port ${SERVER_PORT}`)
    );
  })
  .catch((err) => console.log(err));

// const SERVER_PORT = 5050;
