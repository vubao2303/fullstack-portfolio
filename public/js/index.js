$(document).ready(function () {
  $("#project-btn").on("click",()=>{
    $.get("/projects")
  })
})