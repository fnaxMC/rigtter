const express = require("express");
let router = express.Router();

module.exports.posts = [];

router.post("/createpost", (req, res) => {
  var post = {
    postName: req.body.postName,
    postContent: req.body.postContent,
    creationDate: new Date(),
  };

  if (
    !isEmptyOrWhitespace(post.postName) &&
    !isEmptyOrWhitespace(post.postContent)
  ) {
    module.exports.posts.push(post);
    console.log(module.exports.posts);
  }
  res.redirect("/");
});

router.get("/getpost:postid", (req, res, next) => {
  res.send(module.exports.posts[req.params.postid]);
});

module.exports.router = router;

const isEmptyOrWhitespace = (text) => {
  if (!text) return true;

  for (var i in text) {
    var c = text[i];
    if (c != " " && c != "\n" && c != "\r" && c != "	") return false; // to jedno co wyglada jak spacja to tab
  }

  return true;
};
