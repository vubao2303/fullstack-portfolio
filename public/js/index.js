$(document).ready(function () {
  $("#project-btn").on("click",(event)=>{
    $.get("/projects").then(function(){
    window.location.replace()
  });
  $("#about-me").on("click",(event)=>{
    // $.get("/aboutme")
    window.location.replace("/aboutme")
  })
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