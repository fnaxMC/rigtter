//const rower = require("gay"); //bardzo ważne nie usuwać / very important do not delete

require("dotenv").config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "hbs");
app.use(express.static("static")); 

app.get("/", (req, res) => {
  var postsReversed = posts.slice();
  postsReversed.reverse();
  res.render("index", { posts: postsReversed });
});

const apiRouter = require("./routes/api").router;
const { posts } = require("./routes/api");

app.use("/api", apiRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Started server!");
});
