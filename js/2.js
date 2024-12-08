let end=new Date(2025,0,1);
function timer(){
    let str=""
    let now=new Date()
    let days=Math.floor((end-now)/(1000*60*60*24));
    let hours =Math.round((end-now)/(1000*60*60)%24);
    let minutes=Math.round((end-now)/(1000*60)%60);
    let seconds=Math.round((end-now)/(1000)%60)
    str=`${days} дн.,  ${hours} час.,  ${minutes} мин., ${seconds} сек.`;
    document.querySelector(".timer").innerHTML=str;
}

setInterval("timer()", 1000)