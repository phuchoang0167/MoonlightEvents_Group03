// visitor
var count = localStorage.getItem("visitCount") || 0;
count++;
localStorage.setItem("visitCount", count);
document.getElementById("counter").innerText = count;