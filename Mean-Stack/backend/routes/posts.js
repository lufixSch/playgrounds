const express = require('express');
const multer = require('multer');

const checkAuth = require('../middleware/check-auth');
const firestore = require('../firestore/posts.firestore');
var db = new firestore();

const router = express.Router();

const mime_type_map = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = mime_type_map[file.mimetype];
    let error = new Error('Invalid mime type');
    if (isValid) {
      error = null;
    }
    cb(error, 'backend/img');
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(' ')
      .join('-');
    const ext = mime_type_map[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  },
});

router.post(
  '',
  checkAuth,
  multer({ storage: storage }).single('image'),
  (req, res, next) => {
    const url = req.protocol + '://' + req.get('host');
    const post = {
      title: req.body.title,
      content: req.body.content,
      imagePath: url + '/img/' + req.file.filename,
    };
    db.post(post, res);
  }
);

router.put(
  '/:id',
  checkAuth,
  multer({ storage: storage }).single('image'),
  (req, res, next) => {
    let imagePath = req.body.imagePath;
    if (req.file) {
      const url = req.protocol + '://' + req.get('host');
      imagePath = url + '/img/' + req.file.filename;
    }
    const post = {
      title: req.body.title,
      content: req.body.content,
      imagePath: imagePath,
    };
    db.update(req.params.id, post, res);
  }
);

router.get('', (req, res, next) => {
  db.get(req, res);
});

router.get('/:id', checkAuth, (req, res, next) => {
  db.getByID(req.params.id, res);
});

router.delete('/:id', checkAuth, (req, res, next) => {
  db.delete(req.params.id, res);
});

module.exports = router;
