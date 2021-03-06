module.exports = {
  getPosts: (req, res) => {
    const db = req.app.get("db");

    db.get_all_posts()
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log(err));
  },

  addPost: (req, res) => {
    const db = req.app.get("db");
    const { post_content, post_url, user_id, person_id } = req.body;

    db.add_post(post_content, post_url, user_id, person_id)
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log(err));
  },

  editPost: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { post_content, post_url } = req.body;

    db.update_post(id, post_content, post_url)
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log(err));
  },

  deletePost: (req, res) => {
    const db = req.app.get("db");
    const { post_id } = req.params;
    db.delete_post(post_id)
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log(err));
  },

  getPostProfile: (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.params;

    db.get_post_profile(user_id)
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log(err));
  },

  getPost: (req, res) => {
    const db = req.app.get("db");
    const { person_id } = req.params;

    db.get_post(person_id)
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log(err));
  },
};
