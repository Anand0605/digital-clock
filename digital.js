const clock = document.getElementById('clock')
 


// console.log(date.toLocaleDateString());

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHtml = date.toLocaleTimeString();
},1000)