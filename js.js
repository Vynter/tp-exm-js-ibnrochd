var img = document.querySelector("img");
var title = document.querySelector("h2");
var imgTab = img.style.width.split("");
var imgWith = parseInt(imgTab.slice(0, imgTab.length - 2).join(""));
//console.log(imgWith * 3);
var w = img.width;
var h = img.height;
console.log(w * 3);

img.addEventListener("mouseenter", function () {
  /*this.style.width = imgWith * 3 + "px";
  console.log(this.style.width);*/
  this.width = w * 3;
  this.height = h * 3;
  console.log(this.width);
});

img.addEventListener("mouseleave", function () {
  //this.style.width = imgWith + "px";
  this.width = w;
  this.height = h;
});

img.addEventListener("dblclick", function () {
  var change = "";
  change = prompt("Veuillez saisir un truc");
  if (change !== null) {
    title.innerText = change;
  }
});
