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

/*-----------------------exo 2----------------------- */

var body = document.querySelector("body");
var tab = document.createElement("table");
var cl = document.createElement("caption");
cl.innerText = "Table de multuplication dynamique";
tab.appendChild(cl);
body.append(tab);

var max = 18;
var min = 12;

var tagHTr = document.createElement("tr");

for (let i = min; i <= max; i++) {
  let tagTd = document.createElement("td");
  resultat = i;
  tagTd.innerHTML = resultat;
  if (resultat % 10 === 0) {
    tagTd.style.backgroundColor = "pink";
  } else if (resultat % 5 === 0) {
    tagTd.style.backgroundColor = "yellow";
  } else if (resultat % 2 === 0) {
    tagTd.style.backgroundColor = "orange";
  }
  tagHTr.appendChild(tagTd);
  tab.appendChild(tagHTr);
}

for (let k = min + 1; k <= max; k++) {
  let tagTr = document.createElement("tr");
  let tagTd = document.createElement("td");
  resultat = k;
  tagTd.innerHTML = resultat;
  if (resultat % 10 === 0) {
    tagTd.style.backgroundColor = "pink";
  } else if (resultat % 5 === 0) {
    tagTd.style.backgroundColor = "yellow";
  } else if (resultat % 2 === 0) {
    tagTd.style.backgroundColor = "orange";
  }
  tagTr.appendChild(tagTd);

  for (let i = min + 1; i <= max; i++) {
    let tagTd = document.createElement("td");

    let resultat = k * i;
    tagTd.innerHTML = resultat;
    if (resultat % 10 === 0) {
      tagTd.style.backgroundColor = "pink";
    } else if (resultat % 5 === 0) {
      tagTd.style.backgroundColor = "yellow";
    } else if (resultat % 2 === 0) {
      tagTd.style.backgroundColor = "orange";
    }
    tagTr.appendChild(tagTd);
    tab.appendChild(tagTr);
  }
}

var a = 1; /*
  }
}
*/

/*var arr = new Array(10, 10);

for (var i = 1; i <= 10; i++) {
  for (var k = 1; k <= 10; k++) {
    arr[i][k] = k;
  }
}

console.log(arr);
*/
/*
for (var i = min; i <= max; i++) {
  //console.log(i);
  var tagTr = document.createElement("tr");
  for (var j = min; j <= max; j++) {
    let tagTd = document.createElement("td");

    let resultat = j * i;
    tagTd.innerHTML = resultat;
    if (resultat % 10 === 0) {
      tagTd.style.backgroundColor = "pink";
    } else if (resultat % 5 === 0) {
      tagTd.style.backgroundColor = "yellow";
    } else if (resultat % 2 === 0) {
      tagTd.style.backgroundColor = "orange";
    }
    tagTr.appendChild(tagTd);
    tab.appendChild(tagTr);
    /*arr[i][j].push(j);
    console.log(arr[i] + " " + arr[j]);*/
