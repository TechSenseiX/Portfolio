
var typed= new Typed(".text",{
    strings:["Frontend Developer","Graphics Designer", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
let number1 = document.getElementById("number1");
let counter= 0;
setInterval(()=>{
    if(counter == 85){
        clearInterval();
    }else{
        counter += 1;
    number1.innerHTML = counter + "%";}
},20);

let number2 = document.getElementById("number2");
let count= 0;
setInterval(()=>{
    if(count == 70){
        clearInterval();
    }else{
        count += 1;
    number2.innerHTML = count + "%";}
},20);

let number3 = document.getElementById("number3");
let cnt= 0;
setInterval(()=>{
    if(cnt == 75){
        clearInterval();
    }else{
        cnt += 1;
    number3.innerHTML = cnt + "%";}
},20);

let number34 = document.getElementById("number34");
let cntr= 0;
setInterval(()=>{
    if(cntr == 80){
        clearInterval();
    }else{
        cntr += 1;
    number4.innerHTML = cntr + "%";}
},20);