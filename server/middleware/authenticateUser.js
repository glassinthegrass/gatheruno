const bcrypt = require('bcryptjs');

module.exports = {
 checkAdmin: (req, res, next) =>{
    if (!req.session.user.admin) {
        res.status(403).send('Cool your jets, Jimmy!')
    } else {
        next();
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
}