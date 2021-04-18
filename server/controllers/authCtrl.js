
const bcrypt = require('bcryptjs');

module.exports = {
    login: async (req, res) => {
        const db = req.app.get("db")
        const {email, password} =req.body
       try{
           const [existingUser] = await db.get_user_by_email(email)
            if(!existingUser.first_name){
            
                res.status(403).send('yo you not registered')
            } else{
            const isAuthenticated = bcrypt.compareSync(password, existingUser.hash)

            if(!isAuthenticated){
              res.status(403).send('bad pw')
            } else{
            
            existingUser.isLoggedIn = true
            delete existingUser.hash
            delete existingUser.email
            delete existingUser.phone_number
            req.session.user = existingUser
            res.status(200).send(req.session.user)
            }}
            
       } catch(err) {
           console.log(err)
          return res.sendStatus(500)
       }
  },
    logout: async (req, res) => {
    req.session.destroy()
    await res.status(200).send(req.session)
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