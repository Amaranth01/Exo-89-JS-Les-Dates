
/*
Exo1
 */
let result = document.getElementById('timestamp');
let maDate = new Date();
result.innerHTML = maDate;

/*
Exo2
 */

let result1 = document.getElementById('localDate');
let aujourdhui = new Date();
result1.innerHTML = aujourdhui.toLocaleDateString();

/*
Exo3
 */

let result2 = document.getElementById('localTime');
let hour = new Date();
result2.innerHTML = hour.toLocaleTimeString();

/*
Exo4
 */

let q4 = document.getElementById('q4');
let today = new Date();
let tomorrow = new Date();

tomorrow.setDate(today.getDate()+2);
tomorrow.setHours(today.getDate()-6);
interval = tomorrow.getTime() - today.getTime();

let day = Math.floor(interval / 60 / 60 / 24 / 1000);
let hours = Math.floor( (interval- (day  * 60 * 60 * 24 *1000)) / 60 / 60 / 1000);

if (today < tomorrow) {
    q4.innerHTML = "Aujourd'hui est plus petit qu'après demain de... ";
}

if (today > tomorrow) {
    q4.innerHTML = "Aujourd'hui est plus grand qu'après demain";
}

q4.innerHTML += day + "jours et ";
q4.innerHTML += hours + "heures";
