const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: '/v1/index.js: Hello...'
  });
});

router.use('/article', require('./article.js'));
router.use('/user', require('./user.js'));

module.exports = router;
