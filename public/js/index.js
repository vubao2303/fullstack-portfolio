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


// function allProjects(input) {
//   for (var i = 0; i < input.length; i++) {
//     var html = `<li class="list-group-item">${input[i].title}
//   <button
//     class="li-btn"
//     type="button"
//     data-toggle="collapse"
//     data-target="#all-${input[i].id}"
//     aria-expanded="false"
//     aria-controls="inputInfo-allParties"
//     >View Party</button>
//   </li>

//   <div class="collapse" id="all-${input[i].id}">
//     <div class="card card-body dropdown">

//       <!-- <p class="host-name">Host:{$input[i].name}</p> -->


//       <p>Theme: ${input[i].theme}</p>
//       <p>Location: ${input[i].location}</p>
//       <p>Date: ${moment(input[i].date).format("dddd, MMMM Do YYYY")}</p>
//       <p>Time: ${input[i].time}</p>
//       <hr />
//       <button id=${input[i].id} class="attend-btn li-btn" data-id=${
//       input[i].id
//     }>See live site</button>
//     </div>
//   </div>`;

//     $(".allEvents-list").append(html);
//   }
// }