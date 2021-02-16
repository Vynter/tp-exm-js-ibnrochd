var img = document.querySelector("img");
var title = document.querySelector("h2");
var imgTab = img.style.width.split("");
var imgWith = parseInt(imgTab.slice(0, imgTab.length - 2).join(""));
var w = img.width;
var h = img.height;
var body = document.querySelector("body");

img.addEventListener("mouseenter", function () {
  this.width = w * 3;
  this.height = h * 3;
});

img.addEventListener("mouseleave", function () {
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

/*-----------------------parte 2----------------------- */
function TabMulti(min = 1, max = 12) {
  var tab = document.createElement("table");
  var cl = document.createElement("caption");
  cl.innerText = "Table de multuplication dynamique";
  tab.appendChild(cl);
  body.append(tab);
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

  let form = document.createElement("form");
  let br = document.createElement("br");
  form.appendChild(br);
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

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let minV = document.querySelector("#min").value;
    let maxV = document.querySelector("#max").value;
    if (
      minV !== "" &&
      minV !== "" &&
      isNaN(minV) === false &&
      isNaN(maxV) === false &&
      minV > 0 &&
      maxV > 0 &&
      parseInt(minV) < parseInt(maxV)
    ) {
      let minA = parseInt(minV);
      let maxA = parseInt(maxV);
      tab.parentNode.removeChild(tab);
      form.parentNode.removeChild(form);
      body.removeChild(document.querySelector("#form2"));
      TabMulti(minA, maxA);
      pgcdCreate();
    } else {
      alert("veuillez saisir la valeur de MIN ainsi que la valeur de Max");
    }
  });
}
TabMulti();

/*-----------------------parte 3----------------------- */
function pgcdCreate() {
  let form = document.createElement("form");
  let br = document.createElement("br");
  form.appendChild(br);
  form.setAttribute("id", "form2");
  let l1 = document.createElement("label");
  l1.setAttribute("for", "a");
  l1.innerText = "A=";
  let inp1 = document.createElement("input");
  inp1.setAttribute("type", "text");
  inp1.setAttribute("id", "a");
  l1.appendChild(inp1);
  form.appendChild(l1);
  let l2 = document.createElement("label");
  l2.setAttribute("for", "b");
  l2.innerText = "B=";
  let inp2 = document.createElement("input");
  inp2.setAttribute("type", "text");
  inp2.setAttribute("id", "b");
  l2.appendChild(inp2);
  let bt = document.createElement("button");
  bt.setAttribute("type", "submit");
  bt.setAttribute("id", "calc");
  bt.innerHTML = "Calcule PGCD";
  let l3 = document.createElement("label");
  l3.setAttribute("for", "res");
  l3.innerText = "Resultat=";
  let inp3 = document.createElement("input");
  inp3.setAttribute("type", "text");
  inp3.setAttribute("id", "res");
  l3.appendChild(inp3);
  form.appendChild(l1);
  form.appendChild(l2);
  form.appendChild(l3);
  form.appendChild(bt);
  body.appendChild(form);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let val1 = document.querySelector("#a").value;
    let val2 = document.querySelector("#b").value;
    if (
      val1 !== "" &&
      val2 !== "" &&
      isNaN(val1) === false &&
      isNaN(val2) === false &&
      val1 > 0 &&
      val2 > 0
    ) {
      let res = document.querySelector("#res");
      let resultat = gcd(parseInt(val1), parseInt(val2));
      res.value = resultat;
    } else {
      alert("veuillez saisir la valeur de MIN ainsi que la valeur de Max");
    }
  });
}

function gcd(a, b) {
  if (a > b) {
    return gcd(b, a);
  } else {
    if (b % a == 0) {
      return a;
    } else {
      return gcd(a, b - a);
    }
  }
}
pgcdCreate();
