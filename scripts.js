class JsGet {

    constructor(data) {
      this.data = data
    }
  
    async getPizzaList() {
      let url = "http://localhost:8080/getPizzaList";
  
      let response = await fetch(url);
      this.data = await response.json()
      this.updateMyPizzaUI()
    }
  
    updateMyPizzaUI() {
      const pizzatable = document.getElementById("pizzaDiv");
      const pizzacolumn= document.createElement("pizzaTable");
      pizzacolumn.innerHTML = this.data[0].id +' <br> '+this.data[0].name+ ' <br> '+ this.data[0].description
      + ' <br> '+this.data[0].regPrice + ' <br> '+this.data[0].bigPrice;
      pizzacolumn.classList.add("indholdTable"); 
      pizzatable.append(pizzacolumn);
      // lave et loop der udskriver dem i rækkefølge efter id så nr 1 altid er først.
    }

    async getBurgerList() {
      let url = "http://localhost:8080/getBurgerList";
  
      let response = await fetch(url);
      this.data = await response.json()
      this.updateMyBurgerUI()
    }
  
    updateMyBurgerUI() {
      const burgertable = document.getElementById("burgerDiv");
      const burgercolumn= document.createElement("burgerTable");

      burgercolumn.innerHTML = this.data[0].id +' <br> '+this.data[0].name
      + ' <br> '+this.data[0].regPrice + ' <br> '+this.data[0].price + ' <br> ';
      burgercolumn.classList.add("indholdTable"); 
      burgertable.append(burgercolumn);

      const burgercolumn2= document.createElement("burgerTable");

      burgercolumn2.innerHTML = this.data[1].id +' <br> '+this.data[1].name
      + ' <br> '+this.data[1].description + ' <br> '+this.data[1].price;
      burgercolumn2.classList.add("indholdTable"); 
      burgertable.append(burgercolumn2);

      // lave et loop der udskriver dem i rækkefølge efter id så nr 1 altid er først.
    }
}
var jsGet = new JsGet()