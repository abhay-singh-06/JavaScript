document.getElementById("clock");
let date = new Date();
console.log(date);

setInterval(function () {
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
