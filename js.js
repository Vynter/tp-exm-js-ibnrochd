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
function TabMulti(min = 0, max = 12) {
  var body = document.querySelector("body");
  //var br = document.querySelector("br");
  var tab = document.createElement("table");
  var cl = document.createElement("caption");
  cl.innerText = "Table de multuplication dynamique";
  tab.appendChild(cl);
  body.append(tab);

  /*var max = 12;
  var min = 0;*/

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

  /* Création de la partie controle Tableau de multiplication*/
  let form = document.createElement("form");
  let l1 = document.createElement("label");
  l1.setAttribute("for", "min");
  l1.innerText = "Min";
  let inp1 = document.createElement("input");
  inp1.setAttribute("type", "text");
  inp1.setAttribute("id", "min");
  l1.appendChild(inp1);
  form.appendChild(l1);
  let l2 = document.createElement("label");
  l2.setAttribute("for", "max");
  l2.innerText = "Max";
  let inp2 = document.createElement("input");
  inp2.setAttribute("type", "text");
  inp2.setAttribute("id", "max");
  l2.appendChild(inp2);
  let bt = document.createElement("button");
  bt.setAttribute("type", "submit");
  bt.setAttribute("id", "resultat");
  bt.innerHTML = "MSJ Tableau de multiplication";
  form.appendChild(l1);
  form.appendChild(l2);
  form.appendChild(bt);
  body.appendChild(form);

  let btn = document.querySelector("#resultat");
  console.log(btn);

  btn.addEventListener("click", function (e) {
    //e.preventDefault();
    let minV = document.querySelector("#min").value;
    let maxV = document.querySelector("#max").value;
    //console.log(Number.isInteger(minV) + " " + Number.isInteger(maxV));
    if (minV !== "" && minV !== "") {
      console.log("ils sont pas vide");
      if (isNaN(minV) === false && isNaN(maxV) === false) {
        console.log("c'est des numérpo");
        if (parseInt(minV) < parseInt(maxV)) {
          console.log("arriver");
          let minA = parseInt(minV);
          let maxA = parseInt(maxV);
          tab.parentNode.removeChild(tab);
          form.parentNode.removeChild(form);
          TabMulti(minA, maxA);
        }
      }
    } else {
      alert("veuillez saisir la valeur de MIN ainsi que la valeur de Max");
    }
    console.log(min + " " + max);
    //console.log(isNaN(minV) + " " + isNaN(maxV));
  });
}
TabMulti();
