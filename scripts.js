class JsGet {

    constructor(data) {
      this.data = data
    }
  
    async getPizzaList() {
      let url = "http://localhost:8080/getPizzaList";
  
      let response = await fetch(url);
      this.data = await response.json()
      this.updateMyUI()
    }
  
    updateMyUI() {
      const pizzatable = document.getElementById("pizzaDiv");
      const pizzacolumn= document.createElement("table");
      pizzacolumn.innerHTML = this.data[0].id +' <br> '+this.data[0].name
      + ' <br> '+this.data[0].regPrice + ' <br> '+this.data[0].bigPrice;
      pizzacolumn.classList.add("indholdTable"); 
      pizzatable.append(pizzacolumn);
      // lave et loop der udskriver dem i rækkefølge efter id så nr 1 altid er først.
    }
}
var jsGet = new JsGet()