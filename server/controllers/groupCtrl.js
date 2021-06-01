module.exports = {
  getGroups: (req, res) => {
    const db = req.app.get("db");

    db.get_all_groups()
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log(err));
  },
  getGroupNames: (req, res) => {
    const db = req.app.get("db");
    db.get_all_groups()
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log(err));
  },

  addGroup: async (req, res) => {
    const db = req.app.get("db");
    const { group_name,person } = req.body;
try{
  const [existingGroup]= await db.get_group(group_name)
  if(existingGroup){
    return res.status(403).send('group already exists')
  }else{
  let newGroup = await db.add_group(group_name)
  res.status(200).send(newGroup);
  }
}
catch(err){console.log(err)}

  },
  getPeopleInGroup: (req, res) => {
    const db = req.app.get("db");
    const { group_name } = req.params;
    db.get_people_by_group(group_name)
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log(err));
  },
  deleteGroup: (req, res) => {
    const db = req.app.get("db");
    const { group_name } = req.params;
    db.delete_group(group_name)
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log(err));
  },
};
