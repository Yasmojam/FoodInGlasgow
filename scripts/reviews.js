var review_array = [{
    "id": 0,
    "name": "Artisan Roast Glasgow",
    "image": "<a href=\"#exampleModal\" role=\"button\" data-toggle=\"modal\" data-target=\"#exampleModal\"> <img src = \"images\\artisanroastglasgow.jpg\" alt= \"brgr\">",
    "cuisine": "Coffeeshop",
    "rating": 4,
    "vegan": true,
    "reviewtext": "They do coffee :)",
    "location": "https://www.google.com/maps/dir//Artisan+Roast,+15-17+Gibson+St+Glasgow+G12+8NU,+UK/@55.8722637,-4.2844373,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4888442d56b2b797:0xb84c3df194890074!2m2!1d-4.2822486!2d55.8722607?hl=en-US",
  },
  {
    "id": 1,
    "name": "BRGR",
    "image": "<a href=\"#exampleModal\" role=\"button\" data-toggle=\"modal\" data-target=\"#exampleModal\"> <img src = \"images\\brgr.jpg\" alt= \"brgr\">",
    "price": 2,
    "cuisine": "Pizza",
    "rating": 4,
    "vegan": true,
    "reviewtext": "They do burgers :)",
    "location": "https://www.google.com/maps/dir//Brgr+Glasgow+Great+Western+Road,+526+Great+Western+Rd,+Glasgow+G12+8EL/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x488844332ee3c021:0xf55abbad8c179ca5!3e0?ved=2ahUKEwjPtvDCw47hAhXnSxUIHfdPDUMQox0wAHoECAoQDw",
  }
];

window.onload = function() {
  addElement();
}

function addElement() {
  review_array.forEach(function(review) {
    //create a new div element
    var newDiv = document.createElement("div");
    newDiv.classList.add("review");
    newDiv.addEventListener("click", function() {
      addModalData(review.id)
    });
    newDiv.innerHTML = review.image;
    document.getElementById("review-grid").appendChild(newDiv);
  });
}

function addModalData(review_info) {
  console.log(review_array);
  console.log(review_info);
  console.log(review_array[review_info]);
  document.getElementById("mod-header").innerHTML = `<h5 class="modal-title" id="exampleModalLabel"> ${review_array[review_info].name} </h5>`;
  document.getElementById("mod-bod").innerHTML = review_array[review_info].reviewtext;
  document.getElementById("mod-footer").innerHTML += `<a id="get-dir" href= ${review_array[review_info].location} class="btn btn-secondary" role="button"> Get Directions </a>`
  //delete modal data on close;
}



//on click generate modal div
//on exit delete them


// <div class="modal-header">
//   <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//   </button>
// </div>
// <div class="modal-body">
//   ...
// </div>
