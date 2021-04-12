module.exports={
    getBirthday: (req, res) => {
        const today = new Date()
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const mmdd = `${mm}-${dd}`
        const db = req.app.get('db');
       db.get_birthday()
            .then(dbRes => {
                const people = dbRes
                for(let i = 0; i<people.length;i++){
                    
                }
                    res.status(200).send(birthdays)
                
            })
            .catch(err => console.log(err))
        }
    }