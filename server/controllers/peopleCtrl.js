module.exports = {
    getPeople: (req, res) => {
        const db = req.app.get('db');

        db.get_all_people()
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))
    },

    addPerson: (req, res) => {
        const db = req.app.get('db');
        const { first_name,last_name,email,birthday,picture,zipcode, message} = req.body;

        db.add_person(first_name,last_name,email,birthday,picture,zipcode,message)
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))
    },
    updatePerson: (req,res) => {
        const db = req.app.get('db');
        const {id} =req.params
        const {first_name,last_name,email,birthday,picture,zipcode,message}= req.body;

        db.update_person(id,first_name,last_name,email,birthday,picture,zipcode,message)
        .then(dbRes => {
            res.status(200).send(dbRes)
        }).catch(err => console.log(err))
    },
    deletePerson: (req,res) => {
        const db = req.app.get('db');
        const {id} = req.params
        db.delete_person(id)
        .then(dbRes => {
            res.status(200).send(dbRes)
        }).catch(err => console.log(err))
    },

    
    getPerson: (req,res) => {
        const db = req.app.get('db');
        const {id} =req.params

        db.get_person(id)
        .then(dbRes => {
            res.status(200).send(dbRes)
        }).catch(err => console.log(err))
    }
}