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
    const div = document.createElement("div");
    div.innerHTML =`

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