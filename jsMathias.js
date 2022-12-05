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
        
        for (let i = 0; i < this.data.length; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {
                // starter med at lave første linje som beskriver indholdet 
                if(j==0 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Burger'));
                } if(j==1 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Navn'));
                } if(j==2 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Indhold'));
                } if(j==3 && i==0){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Pris'));
                } 

                if (j == 1 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i].id));
                } if (j == 2 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i].name));
                } if (j == 3 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i].description));
                } if (j == 4 && i>0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i].price));
                }
            }
        }
        body.innerHTML= '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
    }
}
//Hertil :)

var jsGet = new JsGet()

function tableCreate(row, col){
    let body = document.body;
    let tbl  = document.createElement('table');
    

    for(let i = 0; i < row; i++){
        let tr = tbl.insertRow();
        for(let j = 0; j < col; j++){
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(`${i},${j}` ));
                td.style.border = '1px solid black';
            }     
    }
    body.appendChild(tbl);
}

tableCreate(4,4);