var carobject = {
    vehichle: "car",
    imageUrl: "images/car.jpg",
    fareperkilo: 5,
    capasity: 4,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aperiam."

};

var busobject = {
    vehichle: "bus",
    imageUrl: "images/bus.jpg",
    fareperkilo: 3,
    capasity: 40,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aperiam."

};


var bikeobject = {
    vehichle: "Bike",
    imageUrl: "images/bike.jpg",
    fareperkilo: 2,
    capasity: 2,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aperiam."

};

function displayServices(service) {
    const mainSection = document.getElementById('main-section');
   const stringfied = JSON.stringify(service);
    const div = document.createElement("div");
    div.innerHTML = `

    <div class="card mx-auto mt-5" style="max-width: 800px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${service.imageUrl} class="img-fluid rounded-start h-100" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Transport Mood ${service.vehichle}</h5>
          <p class="card-text">${service.description}</p>
          <p class="card-text"><small class="text-muted">Fare per Kilo: ${service.fareperkilo}</small>  <small class="text-muted">  Capacity: ${service.capasity}</small></p>

          <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick ='bookingHandle(${stringfied})' data-bs-target="#exampleModal">
            Book Now
            </button>
        </div>
      </div>
    </div>
  </div>

`
    mainSection.appendChild(div);
    console.log(service);
}

displayServices(carobject);
displayServices(busobject);
displayServices(bikeobject);


//handle booking info

function bookingHandle(modal){

const modalBody = document.getElementById('modal-body');
const stringifieModal = JSON.stringify(modal);
var vehichle ="car";
var id2 = vehichle+ "fare-input";

modalBody.innerHTML = `
<div class="card mx-auto" style="width: 340px;">
  <img src=${modal.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">description ${modal.description}</p>
    <div class="d-colum" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit"  onclick ='calculatecost(${stringifieModal})'>Submit</button>
            </div>
  </div>
</div>
`
}

function calculatecost(obj){
    console.log(obj)
}
