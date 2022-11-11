const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
app.use(express.static(__dirname + "/public"));

app.use(expressLayouts);
app.set("view engine", "ejs");
app.use("/", express.static("public"));
app.use(express.urlencoded({ extended: false }));

//data
const members = require("./public/data/members.js");

//pages
app.get("/", (req, res) => res.render("dashboard"));
app.get("/about", (req, res) => res.render("about"));
app.get("/members", (req, res) => res.render("members", { members: members }));
app.get("/faculty", (req, res) => res.render("faculty"));
app.get("/magazine", (req, res) => res.render("magazine"));
app.get("/projects", (req, res) => res.render("projects"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server started at port ${PORT}`));