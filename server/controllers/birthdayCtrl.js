module.exports={
    getBirthday: (req, res) => {
        const db = req.app.get('db');

        db.get_birthday()
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))
    }
}