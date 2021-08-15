const express = require('express');
// const jwt = require('jsonwebtoken');
// const encrypt = require('bcrypt');

const firestore = require('../firestore/users.firestore');
var db = new firestore();

const router = express.Router();

router.post('/signup', (req, res, next) => {
  db.signUp(res, req.body);
});

router.post('/login', (req, res, next) => {
  db.login(req, res);
});

module.exports = router;
