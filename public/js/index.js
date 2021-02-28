$(document).ready(function () {
  $("#projects-btn").on("click",()=>{
    // $.get("/projects").then(function(){
    window.location.replace("/projects")
  });
  $("#about-me").on("click",()=>{
    // $.get("/aboutme")
    window.location.replace("/aboutme")
  })
  $("#kb-link").on("click", ()=>{
    window.location.replace("https://github.com/vubao2303/big-burger")
  })
})
