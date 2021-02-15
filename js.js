var img = document.querySelector("img");
var title = document.querySelector("h2");
var imgTab = img.style.width.split("");
var imgWith = parseInt(imgTab.slice(0, imgTab.length - 2).join(""));
console.log(imgWith * 3);

img.addEventListener("mouseenter", function () {
  this.style.width = imgWith * 3 + "px";
  console.log(this.style.width);
});

img.addEventListener("mouseleave", function () {
  this.style.width = imgWith + "px";
});

img.addEventListener("dblclick", function () {
  var change = "";
  change = prompt("Veuillez saisir un truc");
  if (change !== null) {
    title.innerText = change;
  }
});
