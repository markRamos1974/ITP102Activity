const container = document.querySelector(".card-container")

const createCard = (destination, img_url, boardingTimeData, flightClassData, priceData) => {
    const cardContainer = document.createElement("div")
    const figureTag = document.createElement("figure")
    const img = document.createElement("img")

    const cardBody = document.createElement("div")
    const cardTitle = document.createElement("h2")
    
    const cardAction = document.createElement("div")
    const bookButton = document.createElement("button")

    const boardingTime = document.createElement("p")
    const price = document.createElement("p")
    const flightClass = document.createElement("p")

    cardContainer.classList.add("card")
    cardContainer.classList.add("w-96")
    cardContainer.classList.add("bg-base-100")
    cardContainer.classList.add("shadow-xl")


    cardBody.classList.add("card-body")
    cardTitle.classList.add("card-title")
    cardTitle.classList.add("text-white")

    boardingTime.classList.add("text-white")
    price.classList.add("text-white")
    flightClass.classList.add("text-white")

    cardAction.classList.add("card-actions")
    cardAction.classList.add("justify-end")
    
    bookButton.classList.add("btn")
    bookButton.classList.add("btn-primary")

    img.src = img_url
    
    cardTitle.innerHTML = destination
    bookButton.innerHTML = "Book Now"
    boardingTime.innerHTML = `Boarding Time: ${boardingTimeData}`
    flightClass.innerHTML = `Flight class: ${flightClassData}`
    price.innerHTML = `Price: P${priceData}`
    
    
    
    figureTag.appendChild(img)
   
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(boardingTime)
    cardBody.appendChild(price)
    cardBody.appendChild(flightClass)
    cardBody.appendChild(cardAction)

    cardAction.appendChild(bookButton)
    cardContainer.appendChild(figureTag)
    cardContainer.appendChild(cardBody)
    container.appendChild(cardContainer)


    bookButton.addEventListener("click", () => {
        window.location.href = "./transaction.html"
    })


}

const flightData = JSON.parse(localStorage.getItem("flights")).data

console.log(flightData)

flightData.forEach(flight => {
    createCard(flight.to, flight.img_url, flight.bordingTime, flight.class, flight.price)
});
 
