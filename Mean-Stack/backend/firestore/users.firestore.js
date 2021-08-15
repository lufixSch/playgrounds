const firebase_admin = require('../firebase-admin');
const firebase = require('../firebase');
const users_admin = firebase_admin.auth();
const users = firebase.auth();
const encrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserFirestore {
  constructor() {}

  signUp(res, user) {
    users_admin
      .createUser({ email: user.email, password: user.password })
      .then(() => {
        res.status(201).json({
          message: 'User added successfully',
        });
      })
      .catch(err => {
        console.log('Error adding user: ', err);
      });
  }

  login(req, res) {
    users
      .signInWithEmailAndPassword(req.body.email, req.body.password)
      .then(() => {
        users_admin.getUserByEmail(req.body.email).then(user => {
          const token = jwt.sign(
            { email: req.body.email, UId: user.uid },
            'secret_this_should_be_longer',
            { expiresIn: '1h' }
          );
          console.log({ user: user, token: token });
          res.status(201).json({
            message: 'Usser verified successfully',
            token: token,
            expiresIn: '3600',
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = UserFirestore;
