 
if (screen.width <= 1023) {
  document.getElementById('trn').innerHTML = `<form autocomplete="off">  <div id="itrn" class="bg-light p-3 rounded text-center bold">     <div class="d-flex"> <h3 class="header-sub-title" id="lab-l"></h3> <h3 class="header-sub-title blink">|</h3></div><div class="flex-wrap bold">   <div class="d-grid m-2"> <label for="from-s" class="">From</label> <div class="autocomplete rounded"><input type="search" placeholder="Station name" aria-placeholder="from" id="from-s" class="rounded mx-auto bg-light border"></div> </div><a href="#" class=""><img id="x-c" src="arrows.png" alt=""></a><div class="d-grid m-2"><label for="to-s">Destination</label><div class="autocomplete rounded"><input type="search" placeholder="Station name" id="to-s" class="rounded text-center mx-auto bg-light border"></div></div><div class="d-grid m-2"><label for="to-s">Departure</label><input type="date" id="dep-dt" class="rounded mx-auto bg-light border text-center"></div> </div> </div><div class="text-center"><button class="btn btn-success btn-lg al d-inline-block mt-4" id="sbs" type="submit">Search</button></div></form>`;
  document.getElementById('intrsm').classList.remove('p-5');
  document.getElementById('intrsm').classList.add('p-3');
  document.getElementById('ftr').classList.add('text-center');
  document.getElementById('carousel-t').classList.remove('p-5');
  document.getElementById('carousel-t').classList.add('p-3');
  document.getElementById('lg-if').classList.remove('d-inline-block');

 document.getElementById('ftr').innerHTML =`<div class=" pb-5">
  <img src="pngfind.com-facebook-icon-white-png-1744532.png" class="logos-f me-5 pb-3" alt="">
  <img src="pngfind.com-instagram-png-white-2773517 (1).png" class="logos-i pb-3" alt="">
 </div>
    <div class="d-inline-block bold f-l"> © 2023 TrainTrippers All rights reserved <br> <div class="d-inline-block text-light fw-light f-s bold float-end"> Designed and built with all the love in the world.
    </div></div>`


}
var stations = [
  "Mumbai Central  BCT",
  "Chhatrapati Shivaji Terminus  CSTM",
  "Lokmanya Tilak Terminus  LTT",
  "Dadar  DR",
  "New Delhi  NDLS",
  "Delhi  DLI",
  "Delhi Sarai Rohilla  DEE ",
  "Hazrat Nizamuddin  NZM",
  "Howrah  HWH",
  "Kolkata  KOAA",
  "Chennai Central  MAS",
  "Chennai Egmore  MS",
  "Hyderabad  HYB",
  "Bengaluru  SBC",
  "Bengaluru Cantonment  BNC",
  "Ahmedabad  ADI",
  "Pune Junction  PUNE",
  "Jaipur  JP",
  "Lucknow  LKO",
  "Surat  ST",
  "Kanpur Central  CNB",
  "Nagpur  NGP",
  "Visakhapatnam  VSKP",
  "Bhopal  BPL",
  "Patna  PNBE",
  "Ludhiana  LDH",
  "Agra Cantt  AGC"

];
function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("dep-dt").value = formatDate(new Date());
  document.getElementById("loading").classList.add('d-none');
});
autocomplete(document.getElementById("from-s"), stations);
autocomplete(document.getElementById("to-s"), stations);
function autocomplete(inp, arr) {

  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "border rounded autocomplete-items");

    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
const words = ["Welcome to TrainTrippers", "Check Trains", "Check Popular Tourist Sites"];
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById('lab-l').innerHTML += word.shift();
    } else {
      deletingEffect();
      return false;
    };
    timer = setTimeout(loopTyping, 300);
  };
  loopTyping();
};

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById('lab-l').innerHTML = word.join("");
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      };
      typingEffect();
      return false;
    };
    timer = setTimeout(loopDeleting, 200);
  };
  loopDeleting();
};

typingEffect();
f = document.getElementById('x-c');
f.addEventListener('click', () => {
  a = document.getElementById('from-s').value;
  document.getElementById('from-s').value = document.getElementById('to-s').value;
  document.getElementById('to-s').value = a;
});
sbs.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('f',document.getElementById('from-s').value);
  localStorage.setItem('t',document.getElementById('to-s').value);
  localStorage.setItem('d',document.getElementById('dep-dt').value);
  localStorage.setItem('c',1);
  
  location.replace('result.html');
});

