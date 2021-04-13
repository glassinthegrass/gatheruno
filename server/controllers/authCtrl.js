
const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        // bring in our db
        const db = req.app.get('db');
        const { first_name, last_name, email, password, admin, phone_number} = req.body;

        try {
            const [existingUser] = await db.get_user_by_email(email)
            
            if (existingUser) {
                return res.status(409).send('User already exists')
            }

            // hash and salt the password
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt)
            const [ newUser ] = await db.register_user(first_name,last_name, email, hash, admin, phone_number);

            // create a session for the user using the db response
            req.session.user = {
                ...newUser
            };

            // send a response that includes the user session info
           return res.status(200).send(req.session.user);
        } 
            catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    },
      login: async (req, res) => {
        const db = req.app.get("db")
        const {email, password} =req.body

       try{
           const [existingUser] = await db.get_user_by_email(email)
            if(!existingUser){
                return res.status(403).send('yo you not registered')
            } else{
            const isAuthenticated = bcrypt.compareSync(password, existingUser.hash)

            if(!isAuthenticated){
             return res.status(403).send('bad pw')
            } 
            }
            delete existingUser.hash
            req.session.user = existingUser
            res.status(200).send(req.session.user)

       } catch(err) {
           console.log(err)
           res.sendStatus(500)
       }
  },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('http://localhost:3111')
    },
    getUser: async (req,res) => {
        const {user}= req.session;
        if(user) {
            res.status(200).send(user);
         } else{
             return res.sendStatus(401)
         }
    }
}