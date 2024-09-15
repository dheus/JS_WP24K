class Auto {
    constructor(regNumber, manufacturer, model, owner, price, color) {
      this.regNumber = regNumber;
      this.manufacturer = manufacturer;
      this.model = model;
      this.owner = owner;
      this.price = price;
      this.color = color;
    }
  }
  
  const carForm = document.getElementById("carForm");
  const carTable = document.createElement("table");
  const tableHead = document.createElement("thead"); 
  const tableBody = document.createElement("tbody");
  const headerRow = document.createElement("tr");
  
  const headers = ["Reg Number", "Manufacturer", "Model", "Owner", "Price", "Color"];
  
  headers.forEach((headerText) => {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });
  
  tableHead.appendChild(headerRow);
  
  carTable.appendChild(tableHead);
  carTable.appendChild(tableBody);
  
  document.body.appendChild(carTable);
  
  const cars = [];
  
  carForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const regNumber = carForm.elements["regNumber"].value;
    const manufacturer = carForm.elements["manufacturer"].value;
    const model = carForm.elements["model"].value;
    const owner = carForm.elements["owner"].value;
    const price = carForm.elements["price"].value;
    const color = carForm.elements["color"].value;
  
    const newCar = new Auto(regNumber, manufacturer, model, owner, price, color);
    cars.push(newCar);
  
    carForm.reset();
  
    displayCars();
  });
  
  function displayCars() {
    tableBody.innerHTML = ""; 
  
    cars.forEach(function (car) {
      const row = tableBody.insertRow();
      row.innerHTML = `
        <td>${car.regNumber}</td>
        <td>${car.manufacturer}</td>
        <td>${car.model}</td>
        <td>${car.owner}</td>
        <td>${car.price}</td>
        <td>${car.color}</td>
      `;
    });
  }
  
  function searchCarByRegNumber(regNumber) {
    const foundCar = cars.find((car) => car.regNumber === regNumber);
    return foundCar;
  }
  
  carForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchRegNumber = document.getElementById("searchRegNumber").value;
    const searchResultsContainer = document.getElementById("searchResults");
  
    try {
      const foundCar = searchCarByRegNumber(searchRegNumber);
      if (foundCar) {
        searchResultsContainer.textContent = `
          Manufacturer: ${foundCar.manufacturer}, 
          Model: ${foundCar.model}, 
          Owner: ${foundCar.owner}
        `;
      } else {
        searchResultsContainer.textContent = "Car not found.";
      }
    } catch (error) {
      searchResultsContainer.textContent = "Error occurred while searching: " + error.message;
    }
  });