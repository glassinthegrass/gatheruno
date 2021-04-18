module.exports = {
    getGroups: (req, res) => {
        const db = req.app.get('db');
        db.get_all_groups()
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))
    },

    addGroup: (req, res) => {
        const db = req.app.get('db');
        const {person_id,group_name} = req.body;

        db.add_group(person_id,group_name)
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))
    },
    getPeopleInGroup: (req,res) => {
        const db = req.app.get('db');
const {group_name} = req.body
        db.get_people_by_group(group_name)
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