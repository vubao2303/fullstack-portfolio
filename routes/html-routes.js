//  Requiring path to so we can use relative routes to our HTML files
var path = require("path");
module.exports = function (app) {
  app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });
  app.get("/projects",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/projects.html"))
  });
  app.get("/aboutme", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/BTVu.html"))
  });
  app.get("*",(req,res) =>{
    res.sendFile(path.join(__dirname, "../public/index.html"))
  })
}

