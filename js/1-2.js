import {tovarsObj} from "./1-1.js";
let cards=Array.from(document.querySelectorAll(".card"));
console.log(cards);
cards.forEach(function(elem,index){
    elem.querySelector("img").src=`${tovarsObj[index].imgSrc}`;
    elem.querySelector("h5").innerHTML=`<br>${tovarsObj[index].nameTovar}`
    let str=`<br>Корпус: ${tovarsObj[index].corpus}
    <br>Ремешок: ${tovarsObj[index].remen}
    <br>Размер дисплея: ${tovarsObj[index].displaySize}
    <br>Тип дисплея: ${tovarsObj[index].displayType}`
    if (tovarsObj[index].bluetooth) str+= "<br>Bluetooth: есть";
    else str+="<br>Bluetooth: нет";
    str+=`<br>Операционные системы: ${tovarsObj[index].OS.os1}, ${tovarsObj[index].OS.os2}`;
    str+=`<br>Цена: ${tovarsObj[index].price}`
    elem.querySelector(".card-text").innerHTML=str;
 });