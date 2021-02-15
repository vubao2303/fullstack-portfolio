//  Requiring path to so we can use relative routes to our HTML files
// // var path = require("path");
// module.exports = function (app) {
//   app.get("/", (req,res)=>{
//     res.sendFile("./public/index.html")
//   });
//   app.get("/projects",(req,res)=>{
//     res.sendFile("../public/projects.html")
//   });
//   app.get("/aboutme", (req,res)=>{
//     res.sendFile("./public/BTVu.html")
//   });
//   app.get("*",(req,res) =>{
//     res.sendFile("./public/index.html")
//   })
// }


//  Requiring path to so we can use relative routes to our HTML files

module.exports = function (app,path) {
  var path = require("path");
  app.get("/", (req,res)=>{
    res.sendFile("/index.html",{ root: path.join(__dirname, "./public") })
  });
  app.get("/projects",(req,res)=>{
    res.sendFile("./projects.html",{root: path.join(__dirname, "../public")})
  });
  app.get("/aboutme", (req,res)=>{
    res.sendFile("./BTVu.html",{root: path.join(__dirname, "../public")})
  });
}
