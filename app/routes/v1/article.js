const express = require('express');
const router = express.Router();
const ArticleModel = require('../../models/articleModel.js');

// GET
router.get('/', (req, res) => {
  ArticleModel
  .find()
  .then((articles) => {
    res.json(articles);
  });
});

router.get('/:id', (req, res) => {
  const ArticleId = req.params.id; 
  ArtilceModel.findById(ArticleId, (err, article) => {
    req.json(article);
  });
});

// POST
router.post('/', (req, res) => {
  // model
  const Article = new ArticleModel();

  Article.title = req.body.title;
  Article.text = req.body.text;
  Article.setDate();

  // save
  Article.save((err) => {
    if(err) {
      res.send(err);
    } else {
      res.json({
        message: 'Success article post'
      });
    }
  });
});

// DELETE
router.delete('/:id', (req, res) => {
  const ArticleId = req.params.id;
  ArticleModel.remove({
    _id: ArticleId
  })
  .then(() => {
    res.json({
      message: 'delete successful'
    })
  });
});

module.exports = router;
