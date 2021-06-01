const bcrypt = require("bcryptjs");

module.exports = {
  login: async (req, res) => {
    const db = req.app.get("db"),
    { email, password } = req.body;

    try {
      const [existingUser] = await db.get_user_by_email(email);

      if (!existingUser) {
      return  res.status(403).send("Bzzzzt- That email is not registered.");

      } else {
          
          const {hash} = existingUser,
          isAuthenticated = bcrypt.compareSync(password, hash);

        if (!isAuthenticated) {
          res.status(403).send("bad pw");

        } else {

          delete existingUser.hash;
          existingUser.isLoggedIn = true;
          req.session.user = existingUser;
       return   res.status(200).send(req.session.user);
        }
      }
    } catch (err) {
     return res.status(500).send("Bzzzzt- something went wrong.");
    }
  },
  register: async (req, res) => {
    const db = req.app.get('db');
    const { first_name, last_name, email, password } = req.body;
    try {
        const [existingUser] = await db.get_user_by_email(email)
        if (existingUser) {
res.status(409).send('User already exists')
        } else{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt)
    const [newUser]= await db.register_user(first_name,last_name, email, hash);
   
res.status(200).send(newUser)
        }}
catch(err) {
    console.log(err);
    res.sendStatus(500);
} 
},
  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send(req.session);
  },

  getUser: async (req, res) => {
    const { user } = req.session;

    if (user) {
        return res.status(200).send(user);

    } else {

        return res.status(401).send("No session present");
    }
  },

  getProfile: async (req, res) => {
    const db = req.app.get("db"),
    { email } = req.params;
    try {
      let profile = await db.get_profile_by_email(email);
      return res.status(200).send(profile);
    } catch (err) {
      return res.status(500).send("no profile associated with that email");
    }
  }
};
