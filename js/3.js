let price = {
    bwPrint: 20,
    bwCopy: 15,
    colorPrint: 50,
    colorCopy: 40,
    photo3040: 60,
    photo5060: 100,
};

let elemsQ = document.querySelectorAll("input[type='number']");
let priceValues = Object.values(price);
let table = document.querySelector("table");

priceValues.forEach(function (elem, index) {
    table.rows[index + 1].cells[1].innerHTML = elem;
});

elemsQ.forEach((elem, i) => {
    elem.oninput = function () {
        document.getElementById(`sum${i}`).innerHTML = priceValues[i] * elemsQ[i].value;
        itogo();
    }
});

function itogo() {
    let sums = Array.from(document.querySelectorAll("[id*='sum']")).map(elem => +elem.innerHTML || 0);;
    let summ = sums.reduce((sum, elem) => sum + +elem, 0);
    document.querySelector("#itogo").innerHTML=summ;    
}

