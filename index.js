fetch("https://api.sampleapis.com/coffee/hot")
.then(response => {
    if(!response.ok){
        throw new Error("Failed to fetch data");
    }
    return response.json();
})

.then(data => {
    console.log(data);

    const section = document.getElementById("coffee")

    
  data.forEach(coffee => {
    const cardCoffee = document.createElement("div");

    cardCoffee.classList.add("coffee_card")

    cardCoffee.innerHTML = 
    `<h3>${coffee.title}</h3>
    <img src="${coffee.image}" alt="${coffee.title}" width="252.8">
    <p>${coffee.description || "No description available."}</p>`;
    


    section.appendChild(cardCoffee)
  });


})

.catch(error => console.error(error))