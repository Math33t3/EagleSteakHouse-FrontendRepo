class JsGet {

    constructor(data) {
        this.data = data
    }

    async getPizzaList() {
        let url = "http://localhost:8080/getPizzaList";

        let response = await fetch(url);
        this.data = await response.json();
        this.updateMyPizzaUI();
    }

    updateMyPizzaUI() {
        const pizzatable = document.getElementById("pizzaDiv2");
        const pizzacolumn = document.createElement("pizzaTable2");
        pizzacolumn.innerHTML = this.data[0].id + ' <br> ' + this.data[0].name + ' <br> ' + this.data[0].description
            + ' <br> ' + this.data[0].regPrice + ' <br> ' + this.data[0].bigPrice;
        pizzacolumn.classList.add("menupunkter");
        pizzacolumn.classList.add("table-div");
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
        const burgertable = document.getElementById("burgerDiv2");
        const burgercolumn = document.createElement("burgerTable2");

        burgercolumn.innerHTML = this.data[0].id + ' <br> ' + this.data[0].name
            + ' <br> ' + this.data[0].regPrice + ' <br> ' + this.data[0].price + ' <br> ';
        burgercolumn.classList.add("menupunkter");
        burgercolumn.classList.add("table-div");
        burgertable.append(burgercolumn);

        const burgercolumn2 = document.createElement("burgerTable");

        burgercolumn2.innerHTML = this.data[1].id + ' <br> ' + this.data[1].name
            + ' <br> ' + this.data[1].description + ' <br> ' + this.data[1].price;
        burgercolumn2.classList.add("menupunkter");
        burgercolumn.classList.add("table-div");
        burgertable.append(burgercolumn2);

        // lave et loop der udskriver dem i rækkefølge efter id så nr 1 altid er først.
    }

    tableCreate() {


        const body = document.body;

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");


        for (let i = 0; i < 3; i++) {
            const tr = tbl.insertRow();
            for (let j = 0; j < 3; j++) {
                if (i === 2 && j === 1) {
                    break;
                } else {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
                }
            }
        }
        body.appendChild(tbl);
    }

    // herfra skal getList og tableCreate metoder skrives om til at tage imod de andre typer af objekter. :)
    async getBurgerList2() {
        //kan også laves på samme måde som vores dropdown hvis det er pænere
        let url = "http://localhost:8080/getBurgerList";

        let response = await fetch(url);
        this.data = await response.json()
        this.burgertableCreate()
    }
 
    burgertableCreate() {
        const body = document.getElementById('burgerDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");
        
        //laver et nested for loop. i bestmmer hvor mange rows tablen er
        //j bestemmer hvor mange kolonner der er i hver linje a tablen
        
        for (let i = 0; i < this.data.length+1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {        
                if (j == 1 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].id));
                } if (j == 2 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].name));
                } if (j == 3 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].description));
                } if (j == 4 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].price));
                }
            }
        }

        body.innerHTML= '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
        
    }


       async getChipsList() {
        let url = "http://localhost:8080/getChipsList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("chipsTableBtn").style.display="none";
        this.chipstableCreate()
    }
 
    chipstableCreate() {
        const body = document.getElementById('chipsDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");
        
        //laver et nested for loop. i bestmmer hvor mange rows tablen er
        //j bestemmer hvor mange kolonner der er i hver linje a tablen
        
        for (let i = 0; i < this.data.length+1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {
                // starter med at lave første linje som beskriver indholdet 
                if(j==0 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==1 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Pommes Frites'));
                    td.style.fontWeight="bold"
                    td.style.fontSize="26px"
                } if(j==2 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==3 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } 

                if (j == 1 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].id));
                } if (j == 2 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].name));
                } if (j == 3 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].description));
                } if (j == 4 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].price));
                }
            }
        }
        body.innerHTML= '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
    }

    async getDishList() {
        let url = "http://localhost:8080/getDishList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("dishTableBtn").style.display="none";
        this.dishtableCreate()
    }
 
    dishtableCreate() {
        const body = document.getElementById('dishDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");
        
        //laver et nested for loop. i bestmmer hvor mange rows tablen er
        //j bestemmer hvor mange kolonner der er i hver linje a tablen
        
        for (let i = 0; i < this.data.length+1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {
                // starter med at lave første linje som beskriver indholdet 
                if(j==0 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==1 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Andre Retter'));
                    td.style.fontWeight="bold"
                    td.style.fontSize="26px"
                } if(j==2 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==3 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } 

                if (j == 1 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].id));
                } if (j == 2 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].name));
                } if (j == 3 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].description));
                } if (j == 4 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].price));
                }
            }
        }
        body.innerHTML= '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
    }

    async getDrinkList() {
        let url = "http://localhost:8080/getDrinkList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("drinkTableBtn").style.display="none";
        this.drinktableCreate()
    }
 
    drinktableCreate() {
        const body = document.getElementById('drinkDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");
        
        //laver et nested for loop. i bestmmer hvor mange rows tablen er
        //j bestemmer hvor mange kolonner der er i hver linje a tablen
        
        for (let i = 0; i < this.data.length+1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {
                // starter med at lave første linje som beskriver indholdet 
                if(j==0 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==1 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Drikkevare'));
                    td.style.fontWeight="bold"
                    td.style.fontSize="26px"
                } if(j==2 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==3 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } 

                if (j == 1 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].id));
                } if (j == 2 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].name));
                } if (j == 3 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].description));
                } if (j == 4 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].price));
                }
            }
        }
        body.innerHTML= '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
    }

    async getDurumList() {
        let url = "http://localhost:8080/getDurumList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("durumTableBtn").style.display="none";
        this.durumtableCreate()
    }
 
    durumtableCreate() {
        const body = document.getElementById('durumDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");
        
        //laver et nested for loop. i bestmmer hvor mange rows tablen er
        //j bestemmer hvor mange kolonner der er i hver linje a tablen
        
        for (let i = 0; i < this.data.length+1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {
                // starter med at lave første linje som beskriver indholdet 
                if(j==0 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==1 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Durum'));
                    td.style.fontWeight="bold"
                    td.style.fontSize="26px"
                } if(j==2 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==3 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } 

                if (j == 1 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].id));
                } if (j == 2 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].name));
                } if (j == 3 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].description));
                } if (j == 4 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].price));
                }
            }
        }
        body.innerHTML= '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
    }
    async getPizzaList() {
        let url = "http://localhost:8080/getPizzaList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("pizzaTableBtn").style.display="none";
        this.pizzatableCreate()
    }
 
    pizzatableCreate() {
        const body = document.getElementById('pizzaDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");
        
        //laver et nested for loop. i bestmmer hvor mange rows tablen er
        //j bestemmer hvor mange kolonner der er i hver linje a tablen
        
        for (let i = 0; i < this.data.length+1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {
                // starter med at lave første linje som beskriver indholdet 
                if(j==0 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==1 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Pizza'));
                    td.style.fontWeight="bold"
                    td.style.fontSize="26px"
                } if(j==2 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==3 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==4 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } 

                if (j == 1 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].id));
                } if (j == 2 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].name));
                } if (j == 3 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].description));
                } if (j == 4 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].regPrice+'-'));
                } if (j == 4 && i>0) {
                    const td = tr.insertCell();
                    if(this.data[i-1].bigPrice > 0){
                    td.appendChild(document.createTextNode(this.data[i-1].bigPrice+'-'));
                    } else{
                        td.appendChild(document.createTextNode(' '))
                    }
                }
            }
        }
        body.innerHTML= '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
    }
    async getLunchOfferList() {
        //kan også laves på samme måde som vores dropdown hvis det er pænere
        let url = "http://localhost:8080/getLunchOfferMenuList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("lunchofferTableBtn").style.display="none";
        this.lunchoffertableCreate()
    }
 
    lunchoffertableCreate() {
        const body = document.getElementById('lunchofferDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");
        let burgerSet = this.data[0].burgerSet;
        let chipsSet = this.data[0].chipsSet;
        let dishSet = this.data[0].dishSet;
        let drinkSet = this.data[0].drinkSet;
        let durumSet = this.data[0].durumSet;
        let menuSet = this.data[0].menuSet;
        let pitaSet = this.data[0].pitaSet;
        let pizzaSet = this.data[0].pizzaSet;
        let pizzaSandwichSet = this.data[0].pizzaSandwichSet;
        
        //laver et nested for loop. 
        //i bestemmer hvor mange rows tabellen har
        //j bestemmer hvor mange kolonner der er i hver linje af tabellen
        
        for (let i = 0; i <burgerSet.length+chipsSet.length+dishSet.length+
            drinkSet.length+durumSet.length+menuSet.length+pitaSet.length+
            pizzaSet.length+pizzaSandwichSet.length+3; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {     
                
                if(j==0 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==1 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Frokost Menu'));
                    td.style.fontWeight="bold"
                    td.style.fontSize="26px"
                } if(j==2 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==3 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } 
                if(j==0 && i==1){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==1 && i==1){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Pizza'));
                    td.style.fontWeight="bold"
            
                } if(j==2 && i==1){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==3 && i==1){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } 
                if (j == 1 && i>1 && i<8) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(pizzaSet[i-2].id));
                } if (j == 2 && i>1 && i<8) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(pizzaSet[i-2].name));
                } if (j == 3 && i>1 && i<8) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(pizzaSet[i-2].description));
                } if (j == 4 && i>1 && i<8) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('54-'));
                } 
                if(j==0 && i==8){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==1 && i==8){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Pizza Sandwich'));
                    td.style.fontWeight="bold"
                } if(j==2 && i==8){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(''));
                } if(j==3 && i==8){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } 

                 if (j == 1 && i>8 && i<14) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(pizzaSandwichSet[i-9].id));
                } if (j == 2 && i>8 && i<14) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(pizzaSandwichSet[i-9].name));
                } if (j == 3 && i>8 && i<14) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(pizzaSandwichSet[i-9].description));
                } if (j == 4 && i>8 && i<14) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('50-'));
                }   
            }
        }
        
        body.innerHTML= '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);

    }

    async getBurgerList3() {
        //kan også laves på samme måde som vores dropdown hvis det er pænere
        let url = "http://localhost:8080/getBurgerList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("burgerTableBtn").style.display="none";
        this.burgertableCreate2()
    }
 
    burgertableCreate2() {
        const body = document.getElementById('burgerDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");
        
        //laver et nested for loop. 
        //i bestemmer hvor mange rows tabellen har
        //j bestemmer hvor mange kolonner der er i hver linje af tabellen
        
        for (let i = 0; i < this.data.length+1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {     
                
                if(j==0 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==1 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Burgere'));
                    td.style.fontWeight="bold"
                    td.style.fontSize="26px"
                } if(j==2 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if(j==3 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } 
                if (j == 1 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].id));
                } if (j == 2 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].name));
                } if (j == 3 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].description));
                } if (j == 4 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i-1].price));
                }
            }
        }
        
        body.innerHTML= '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
        //Tilføjer et billede i bunden af vores div
        const pict = document.createElement('div');
        const image = document.createElement('img');
        image.src="burger.jpg";
        image.style="width:175px; height:175px;"
        pict.appendChild(image)
        body.appendChild(pict)
    }   

}

var jsGet = new JsGet()