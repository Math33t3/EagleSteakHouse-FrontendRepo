class JsGet{

    constructor(data) {
        this.data = data
    }


// Menu script start
async getMenuList() {
    //kan også laves på samme måde som vores dropdown hvis det er pænere
    let url = "http://localhost:8080/getMenuList";

    let response = await fetch(url);
    this.data = await response.json()
    this.menutableCreate()
}

menutableCreate() {
    const body = document.getElementById('menuDiv');

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
                td.appendChild(document.createTextNode('Menu'));
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
// Menu script end



// Pita script start
async getPitaList() {
    //kan også laves på samme måde som vores dropdown hvis det er pænere
    let url = "http://localhost:8080/getPitaList";

    let response = await fetch(url);
    this.data = await response.json()
    this.pitatableCreate()
}

pitatableCreate() {
    const body = document.getElementById('pitaDiv');

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
                td.appendChild(document.createTextNode('Pita'));
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
// Pita script end


// Pizza Sandwich script start 
async getPizzaSandwichList() {
    //kan også laves på samme måde som vores dropdown hvis det er pænere
    let url = "http://localhost:8080/getPizzaSandwichList";

    let response = await fetch(url);
    this.data = await response.json()
    this.pizzaSandwichtableCreate()
}

pizzaSandwichtableCreate() {
    const body = document.getElementById('pizzaSandwichDiv');

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
                td.appendChild(document.createTextNode('Pizza Sandwich'));
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
// Pizza Sandwich script end


// Tyrkisk brød script start
async getTurkBreadList() {
    //kan også laves på samme måde som vores dropdown hvis det er pænere
    let url = "http://localhost:8080/getTurkBreadList";

    let response = await fetch(url);
    this.data = await response.json()
    this.turkBreadtableCreate()
}

turkBreadtableCreate() {
    const body = document.getElementById('turkBreadDiv');

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
                td.appendChild(document.createTextNode('Tyrkisk Brød'));
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
// Tyrkisk brød script end


}

var jsGet = new JsGet()
