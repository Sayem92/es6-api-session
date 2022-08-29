const data = [
    {
      _id: "60795d4e0489a32f948c4167",
      name: "Honda Sedan",
      price: "132",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
      imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
      _id: "60795e440489a32f948c4168",
      name: "MitoSedan",
      price: "221",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
      _id: "60795fc20489a32f948c4169",
      name: "Isuzu Tacoma",
      price: "105",
      description:
        "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
      _id: "6079615d0489a32f948c416a",
      name: "Chevrolet Crossover",
      price: "434",
      description:
        "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
      
    },
  ];


//   Not Found image
//   https://i.ibb.co/g9CSkZQ/image.png

// console.log("connect")
{/* <div class="col">
<div class="card">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
</div>
</div>
</div> */}

data.forEach(car =>{
  
  // destructure
  const {name, price, imageURL, description} = car;
  // Capture the container
  const cardContainer = document.getElementById("card-container");
  // Create the div
  const singleCard = document.createElement("div");
  singleCard.classList.add("col");
  // Set innerHtml
  singleCard.innerHTML=`
      <div class="card">
        <img src="${imageURL ? imageURL:"https://i.ibb.co/g9CSkZQ/image.png"}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Car Name: ${name}</h5>
          <p class="card-text">Car Detail: ${description}</p>
          <button class="btn btn-primary">Car Price: ${price}</button>
        </div>
    </div>
  `
  // Append the div inside the container
  cardContainer.appendChild(singleCard)

})