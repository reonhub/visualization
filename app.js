const express = require("express");
const path = require('path');
const app = express();
const fs = require("fs")
const os = require('os');
const bodyParser = require('body-parser');
const visualize = require("./modules/visualize.js")

const PORT = 3000;
const DOMAIN = os.hostname() === "EC2AMAZ-MQVCQCB" ? "18.179.45.112" : "localhost"

app.set("view engine", "ejs");
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const axiosBase = require("axios")
const axios = axiosBase.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
});

app.get("/", (req, res) => {
  const fileList = fs.readdirSync(path.join(__dirname, 'public', 'data'));
  logFiles = fileList.filter((file) => file.includes("稼"));
  modelFiles = fileList.filter((file) => file.includes("3D形状モデル"));
  res.render('pages/index.ejs', {modelList: modelFiles, logList: logFiles})
})

app.get("/about", (req, res) => {
  res.render('pages/about.ejs');
})

app.get("/contact", (req, res) => {
  res.render('pages/contact.ejs');
})
app.post("/execute", async (req, res) => {
  const data = req.body;
  const headers = {Accept: "application/json"};
  url = data.visualizeMode == "mode1" ?  "/visualize/error" : "/visualize/parameter";
  let result = await axios.post(url, data, { headers }).then((response) => {
    return response.data;
  }).catch((err) => {
    console.log(err);
  });
  res.render("pages/result.ejs", {result: result, data: data})
});

app.post("/visualize/error", (req, res) => {
  imageUrl = visualize.fetchErrorImageUrl(DOMAIN, req.body);
  res.send({output: imageUrl})
});

app.post("/visualize/parameter", (req, res) => {
  imageUrl = visualize.fetchParameterImageUrl(DOMAIN, req.body);
  res.send({output: imageUrl})
});

app.listen(PORT, ()=> {
  console.log("サーバー起動中");
});