const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post } = require('../../models');

router.post('/post', withAuth, async (req, res) => {
  try {
    const postData = await Post.create(req.body);

    req.session.save(() => {
      req.session.user_id = postData.id;
      req.session.logged_in = true;

      res.status(200).json(postData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/update/:id', withAuth, async (req, res) => {
  try {
    const updatePost = await
      Post.update(
        {
          title: req.body.title,
          body: req.body.body,
        },
        {
          where:
          {
            id: req.params.id,
          }
          
        })
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
