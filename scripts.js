/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//her starter vi med vores fetch klasse :)
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