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

        for (let i = 0; i < this.data.length + 1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {
                if (j == 1 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].id));
                    td.style.color = "red";
                } if (j == 2 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].name));
                    td.style.color = "green";
                } if (j == 3 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].description));
                } if (j == 4 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].price));
                }
            }
        }

        body.innerHTML = '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);

    }

    async getMenuList() {
        let url = "http://localhost:8080/getMenuList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("menuTableBtn").style.display = "none";
        this.menutableCreate()
    }

    menutableCreate() {
        const body = document.getElementById('menuDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");

        //laver et nested for loop. i bestmmer hvor mange rows tablen er
        //j bestemmer hvor mange kolonner der er i hver linje a tablen

        for (let i = 0; i < this.data.length + 1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {
                // starter med at lave første linje som beskriver indholdet 
                if (j == 0 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 1 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Menuer'));
                    td.style.fontWeight = "bold"
                    td.style.fontSize = "26px"
                    td.style.color = "red";
                } if (j == 2 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 3 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                }

                if (j == 1 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].id));
                    td.style.color = "red";
                } if (j == 2 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].name));
                    td.style.color = "green";
                } if (j == 3 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].description));
                } if (j == 4 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].price + '-'));
                }
            }
        }
        body.innerHTML = '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
    }

    async getPitaList() {
        let url = "http://localhost:8080/getPitaList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("pitaTableBtn").style.display = "none";
        this.pitatableCreate()
    }

    pitatableCreate() {
        const body = document.getElementById('pitaDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");

        //laver et nested for loop. i bestmmer hvor mange rows tablen er
        //j bestemmer hvor mange kolonner der er i hver linje a tablen

        for (let i = 0; i < this.data.length + 1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {
                // starter med at lave første linje som beskriver indholdet 
                if (j == 0 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 1 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Pita'));
                    td.style.fontWeight = "bold"
                    td.style.fontSize = "26px"
                    td.style.color = "red";
                } if (j == 2 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 3 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                }

                if (j == 1 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].id));
                    td.style.color = "red";
                } if (j == 2 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].name));
                    td.style.color = "green";
                } if (j == 3 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].description));
                } if (j == 4 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].price + '-'));
                }
            }
        }
        body.innerHTML = '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
    }

    async getPizzaSandwichList() {
        let url = "http://localhost:8080/getPizzaSandwichList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("pizzaSandwichTableBtn").style.display = "none";
        this.pizzaSandwichtableCreate()
    }

    pizzaSandwichtableCreate() {
        const body = document.getElementById('pizzaSandwichDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");

        //laver et nested for loop. i bestmmer hvor mange rows tablen er
        //j bestemmer hvor mange kolonner der er i hver linje a tablen

        for (let i = 0; i < this.data.length + 1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {
                // starter med at lave første linje som beskriver indholdet 
                if (j == 0 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 1 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Pizza Sandwich'));
                    td.style.fontWeight = "bold"
                    td.style.fontSize = "26px"
                    td.style.color = "red";
                } if (j == 2 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 3 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                }

                if (j == 1 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].id));
                    td.style.color = "red";
                } if (j == 2 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].name));
                    td.style.color = "green";
                } if (j == 3 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].description));
                } if (j == 4 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].price + '-'));
                }
            }
        }
        body.innerHTML = '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
    }


    async getTurkBreadList() {
        let url = "http://localhost:8080/getTurkBreadList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("turkBreadTableBtn").style.display = "none";
        this.turkBreadtableCreate()
    }

    turkBreadtableCreate() {
        const body = document.getElementById('turkBreadDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");

        //laver et nested for loop. i bestmmer hvor mange rows tablen er
        //j bestemmer hvor mange kolonner der er i hver linje a tablen

        for (let i = 0; i < this.data.length + 1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {
                // starter med at lave første linje som beskriver indholdet 
                if (j == 0 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 1 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Tyrkisk Brød'));
                    td.style.fontWeight = "bold"
                    td.style.fontSize = "26px"
                    td.style.color = "red";
                } if (j == 2 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 3 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                }

                if (j == 1 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].id));
                    td.style.color = "red";
                } if (j == 2 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].name));
                    td.style.color = "green";
                } if (j == 3 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].description));
                } if (j == 4 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].price + '-'));
                }
            }
        }
        body.innerHTML = '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
    }



    async getChipsList() {
        let url = "http://localhost:8080/getChipsList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("chipsTableBtn").style.display = "none";
        this.chipstableCreate()
    }

    chipstableCreate() {
        const body = document.getElementById('chipsDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");

        //laver et nested for loop. i bestmmer hvor mange rows tablen er
        //j bestemmer hvor mange kolonner der er i hver linje a tablen

        for (let i = 0; i < this.data.length + 1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {
                // starter med at lave første linje som beskriver indholdet 
                if (j == 0 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 1 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Pommes Frites'));
                    td.style.fontWeight = "bold"
                    td.style.fontSize = "26px"
                    td.style.color = "red";
                } if (j == 2 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 3 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                }

                if (j == 1 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].id));
                    td.style.color = "red";
                } if (j == 2 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].name));
                    td.style.color = "green";
                } if (j == 3 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].description));
                } if (j == 4 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].price));
                }
            }
        }
        body.innerHTML = '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
    }

    async getDishList() {
        let url = "http://localhost:8080/getDishList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("dishTableBtn").style.display = "none";
        this.dishtableCreate()
    }

    dishtableCreate() {
        const body = document.getElementById('dishDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");

        //laver et nested for loop. i bestmmer hvor mange rows tablen er
        //j bestemmer hvor mange kolonner der er i hver linje a tablen

        for (let i = 0; i < this.data.length + 1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {
                // starter med at lave første linje som beskriver indholdet 
                if (j == 0 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 1 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Andre Retter'));
                    td.style.fontWeight = "bold"
                    td.style.fontSize = "26px"
                    td.style.color = "red";
                } if (j == 2 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 3 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                }

                if (j == 1 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].id));
                    td.style.color = "red";
                } if (j == 2 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].name));
                    td.style.color = "green";
                } if (j == 3 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].description));
                } if (j == 4 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].price));
                }
            }
        }
        body.innerHTML = '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
    }

    async getDrinkList() {
        let url = "http://localhost:8080/getDrinkList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("drinkTableBtn").style.display = "none";
        this.drinktableCreate()
    }

    drinktableCreate() {
        const body = document.getElementById('drinkDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");

        //laver et nested for loop. i bestmmer hvor mange rows tablen er
        //j bestemmer hvor mange kolonner der er i hver linje a tablen

        for (let i = 0; i < this.data.length + 1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {
                // starter med at lave første linje som beskriver indholdet 
                if (j == 0 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 1 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Drikkevare'));
                    td.style.fontWeight = "bold"
                    td.style.fontSize = "26px"
                    td.style.color = "red";
                } if (j == 2 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 3 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                }

                if (j == 1 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].id));
                    td.style.color = "red";
                } if (j == 2 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].name));
                    td.style.color = "green";
                } if (j == 3 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].description));
                } if (j == 4 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].price));
                }
            }
        }
        body.innerHTML = '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
    }

    async getDurumList() {
        let url = "http://localhost:8080/getDurumList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("durumTableBtn").style.display = "none";
        this.durumtableCreate()
    }

    durumtableCreate() {
        const body = document.getElementById('durumDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");

        //laver et nested for loop. i bestmmer hvor mange rows tablen er
        //j bestemmer hvor mange kolonner der er i hver linje a tablen

        for (let i = 0; i < this.data.length + 1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {
                // starter med at lave første linje som beskriver indholdet 
                if (j == 0 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 1 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Durum'));
                    td.style.fontWeight = "bold"
                    td.style.fontSize = "26px"
                    td.style.color = "red";
                } if (j == 2 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 3 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                }

                if (j == 1 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].id));
                    td.style.color = "red";
                } if (j == 2 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].name));
                    td.style.color = "green";
                } if (j == 3 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].description));
                } if (j == 4 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].price));
                }
            }
        }
        body.innerHTML = '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
    }
    async getPizzaList() {
        let url = "http://localhost:8080/getPizzaList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("pizzaTableBtn").style.display = "none";
        this.pizzatableCreate()
    }

    pizzatableCreate() {
        const body = document.getElementById('pizzaDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");

        //laver et nested for loop. i bestmmer hvor mange rows tablen er
        //j bestemmer hvor mange kolonner der er i hver linje a tablen

        for (let i = 0; i < this.data.length + 1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {
                // starter med at lave første linje som beskriver indholdet 
                if (j == 0 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 1 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Pizza'));
                    td.style.fontWeight = "bold"
                    td.style.fontSize = "26px"
                    td.style.color = "red";
                } if (j == 2 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 3 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 4 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                }

                if (j == 1 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].id));
                    td.style.color = "red";
                } if (j == 2 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].name));
                    td.style.color = "green";
                } if (j == 3 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].description));
                } if (j == 4 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].regPrice + '-'));
                } if (j == 4 && i > 0) {
                    const td = tr.insertCell();
                    if (this.data[i - 1].bigPrice > 0) {
                        td.appendChild(document.createTextNode(this.data[i - 1].bigPrice + '-'));
                    } else {
                        td.appendChild(document.createTextNode(' '))
                    }
                }
            }
        }
        body.innerHTML = '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
    }
    async getLunchOfferList() {
        //kan også laves på samme måde som vores dropdown hvis det er pænere
        let url = "http://localhost:8080/getLunchOfferMenuList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("lunchofferTableBtn").style.display = "none";
        this.lunchoffertableCreate()
    }

    lunchoffertableCreate() {
        const body = document.getElementById('lunchofferDiv3');

        const tbl = document.createElement('table');
        tbl.classList.add("menupunkter");
        tbl.classList.add("table-div");
        let pizzaSet = this.data[0].pizzaSet;
        let pizzaSandwichSet = this.data[0].pizzaSandwichSet;

        //laver et nested for loop. 
        //i bestemmer hvor mange rows tabellen har
        //j bestemmer hvor mange kolonner der er i hver linje af tabellen

        for (let i = 0; i < pizzaSet.length + pizzaSandwichSet.length + 15; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {

                if (j == 0 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 1 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Frokost Menu'));
                    td.style.fontWeight = "bold";
                    td.style.fontSize = "26px";
                    td.style.color = "red";
                } if (j == 2 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Kl. 11:00 -'));
                } if (j == 3 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('15:00'));
                }
                //indlæse de pizzaer der er i frokostmenuen
                if (j == 0 && i == 1) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 1 && i == 1) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Pizza'));
                    td.style.fontWeight = "bold"
                    td.style.color = "red";
                } if (j == 2 && i == 1) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 3 && i == 1) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                }
                if (j == 1 && i > 1 && i < 8) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('F' + pizzaSet[i - 2].id));
                    td.style.color = "red";
                } if (j == 2 && i > 1 && i < 8) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(pizzaSet[i - 2].name));
                    td.style.color = "green";
                } if (j == 3 && i > 1 && i < 8) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(pizzaSet[i - 2].description));
                } if (j == 4 && i > 1 && i < 8) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('54-'));
                }
                if (j == 0 && i == 8) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 1 && i == 8) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Pizza Sandwich'));
                    td.style.fontWeight = "bold"
                    td.style.color = "red";
                } if (j == 2 && i == 8) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(''));
                } if (j == 3 && i == 8) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                }
                //indlæse de Pizzasandwich der er i frokostmenuen
                if (j == 1 && i > 8 && i < 14) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('F' + pizzaSandwichSet[i - 9].id));
                    td.style.color = "red";
                } if (j == 2 && i > 8 && i < 14) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(pizzaSandwichSet[i - 9].name));
                    td.style.color = "green";
                } if (j == 3 && i > 8 && i < 14) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(pizzaSandwichSet[i - 9].description));
                } if (j == 4 && i > 8 && i < 14) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('50-'));
                }
                //indlæse resten af frokostmenuen, som ikke stemmer overens med resten af menuen
                if (j == 1 && i == 14) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('F. Fisk'));
                    td.style.color = "red";
                } if (j == 2 && i == 14) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Fiskefilet'));
                    td.style.color = "green";
                } if (j == 3 && i == 14) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('2.stk med pommes frites og remoulade'));
                } if (j == 4 && i == 14) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('50-'));
                }

                if (j == 1 && i == 15) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('F. Pita'));
                    td.style.color = "red";
                } if (j == 2 && i == 15) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Hjemmelavet Pitabrød med en dåse sodavand'));
                    td.style.color = "green";
                } if (j == 3 && i == 15) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('frit valg mellem shawarma, kylling og falafel'));
                } if (j == 4 && i == 15) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('47-'));
                }
                if (j == 1 && i == 16) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('F. Durum'));
                    td.style.color = "red";
                } if (j == 2 && i == 16) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Hjemmelavet Durum med en dåse sodavand'));
                    td.style.color = "green";
                } if (j == 3 && i == 16) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('frit valg mellem shawarma, kylling og falafel'));
                } if (j == 4 && i == 16) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('57-'));
                }
                if (j == 1 && i == 17) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('F. Box'));
                    td.style.color = "red";
                } if (j == 2 && i == 17) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Box med en dåse sodavand'));
                    td.style.color = "green";
                } if (j == 3 && i == 17) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('frit valg mellem shawarma, kylling og falafel'));
                } if (j == 4 && i == 17) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('55-'));
                }
                if (j == 1 && i == 18) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('F. Kyllinge Burger'));
                    td.style.color = "red";
                } if (j == 2 && i == 18) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Burger med en dåse sodavand'));
                    td.style.color = "green";
                } if (j == 3 && i == 18) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(''));
                } if (j == 4 && i == 18) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('50-'));
                }
                if (j == 1 && i == 19) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('F. Steak House Burger'));
                    td.style.color = "red";
                } if (j == 2 && i == 19) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Hjemmelavet Burger med en dåse sodavand'));
                    td.style.color = "green";
                } if (j == 3 && i == 19) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(''));
                } if (j == 4 && i == 19) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('50-'));
                }
                if (j == 1 && i == 20) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('F. Hotdog'));
                    td.style.color = "red";
                } if (j == 2 && i == 20) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Hotdog med en dåse sodavand'));
                    td.style.color = "green";
                } if (j == 3 && i == 20) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(''));
                } if (j == 4 && i == 20) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('33-'));
                }
                if (j == 1 && i == 21) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('F. Sambuse'));
                    td.style.color = "red";
                } if (j == 2 && i == 21) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Sambuse med hummus eller tzatziki'));
                    td.style.color = "green";
                } if (j == 3 && i == 21) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(''));
                } if (j == 4 && i == 21) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('28-'));
                }
                if (j == 1 && i == 22) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('F. Kylling'));
                    td.style.color = "red";
                } if (j == 2 && i == 22) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('1/2 Grilkylling'));
                    td.style.color = "green";
                } if (j == 3 && i == 22) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(''));
                } if (j == 4 && i == 22) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('45-'));
                }
                if (j == 1 && i == 23) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Pommes Frites'));
                    td.style.color = "red";
                } if (j == 2 && i == 23) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Medium'));
                    td.style.color = "green";
                } if (j == 3 && i == 23) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(''));
                } if (j == 4 && i == 23) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('25-'));
                } if (j == 1 && i == 24) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Pommes Frites'));
                    td.style.color = "red";
                } if (j == 2 && i == 24) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Stor'));
                    td.style.color = "green";
                } if (j == 3 && i == 24) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(''));
                } if (j == 4 && i == 24) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('30-'));
                }
            }
        }

        body.innerHTML = '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);

    }

    async getBurgerList3() {
        //kan også laves på samme måde som vores dropdown hvis det er pænere
        let url = "http://localhost:8080/getBurgerList";

        let response = await fetch(url);
        this.data = await response.json()
        document.getElementById("burgerTableBtn").style.display = "none";
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

        for (let i = 0; i < this.data.length + 1; i++) {
            const tr = tbl.insertRow();

            for (let j = 0; j < 5; j++) {

                if (j == 0 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 1 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode('Burgere'));
                    td.style.fontWeight = "bold"
                    td.style.fontSize = "26px"
                    td.style.color = "red";
                } if (j == 2 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                } if (j == 3 && i == 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(' '));
                }
                if (j == 1 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].id));
                    td.style.color = "red";
                } if (j == 2 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].name));
                    td.style.color = "green";
                } if (j == 3 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].description));
                } if (j == 4 && i > 0) {
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(this.data[i - 1].price));
                }
            }
        }

        body.innerHTML = '' // her overwrite vi vores div, hvis der nu allerede er en table, så nulstiller vi
        body.appendChild(tbl);
        //Tilføjer et billede i bunden af vores div
        const pict = document.createElement('div');
        const image = document.createElement('img');
        image.src = "burger.jpg";
        image.style = "width:175px; height:175px;"
        pict.appendChild(image)
        body.appendChild(pict)
    }

}

var jsGet = new JsGet()