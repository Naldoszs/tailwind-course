const yrElement = document.getElementById("year");

//updt with current yr
const date = new Date();
const currentYr = date.getFullYear();

yrElement.innerHTML = currentYr;
