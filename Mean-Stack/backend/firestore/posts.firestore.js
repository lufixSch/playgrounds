const firebase_admin = require('../firebase-admin');
const database = firebase_admin.firestore();

class PostsFirestore {
  constructor() {
    this.queryData = {};
    this.getCount = database
      .collection('adminData')
      .doc('postData')
      .get()
      .then(doc => {
        this.queryData = doc.data();
      });
  }

  updateCount() {
    const count = database.collection('adminData').doc('postData');
    count
      .get()
      .then(doc => {
        this.queryData = doc.data();
        this.queryData.count = this.queryData.count + 1;
        count
          .update(this.queryData)
          .then(doc => {})
          .catch(error => {
            console.log('Error updating count: ', error);
          });
      })
      .catch(error => {
        console.log('Error getting count: ', error);
      });
  }

  post(post, res) {
    database
      .collection('posts')
      .add(post)
      .then(docRef => {
        this.updateCount();
        res.status(201).json({
          message: 'Post added successfully',
          post: {
            id: docRef.id,
            ...post,
          },
        });
      })
      .catch(error => {
        console.log('Error posting document: ', error);
      });
  }

  update(id, post, res) {
    database
      .collection('posts')
      .doc(id)
      .update(post)
      .then(() => {
        res.status(201).json({
          message: 'Posts updated succesfully!',
          imagePath: post.imagePath,
        });
      })
      .catch(error => {
        console.log('Error updating document: ', error);
      });
  }

  get(req, res) {
    const start = req.query.pagesize * (req.query.currentpage - 1) + 1;
    const limit = +req.query.pagesize;
    var postQuery = database.collection('posts');
    if (req.query.pagesize && req.query.currentpage) {
      postQuery = postQuery
        .orderBy('index')
        .startAt(start)
        .limit(limit);
    }
    postQuery
      .get()
      .then(fetchedposts => {
        var posts = [];
        fetchedposts.forEach(fetchedpost => {
          var post = {
            id: fetchedpost.id,
            title: fetchedpost.data().title,
            content: fetchedpost.data().content,
            imagePath: fetchedpost.data().imagePath,
          };
          posts.push(post);
        });
        if (!this.queryData.count) {
          this.getCount;
        }
        res.status(200).json({
          message: 'Posts fetched succesfully!',
          posts: posts,
          count: this.queryData.count,
        });
      })
      .catch(error => {
        console.log('Error getting document: ', error);
      });
  }

  getByID(id, res) {
    database
      .collection('posts')
      .doc(id)
      .get()
      .then(fetchedpost => {
        if (fetchedpost) {
          var post = fetchedpost.data();
          post.id = fetchedpost.id;
          res.status(200).json({
            message: 'Posts fetched succesfully',
            post: post,
          });
        } else {
          res.status(404).json({
            message: 'Post not found',
          });
        }
      });
  }

  delete(id, res) {
    database
      .collection('posts')
      .doc(id)
      .delete()
      .then(() => {
        res.status(201).json({
          message: 'Post deleted succesfully',
        });
      })
      .catch(error => {
        console.log('Error removing document: ', error);
      });
  }
}

module.exports = PostsFirestore;
