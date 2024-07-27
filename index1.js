 
if(screen.width<455){
  document.getElementById('signupModalLabel').classList.remove('mx-5');
  document.getElementById('signupModalLabel2').classList.remove('mx-5');
  document.getElementById('signupModalLabel3').classList.remove('mx-5');
  document.getElementById('loginModalLabel').classList.remove('mx-5');
  document.getElementById('loginModalLabel2').classList.remove('mx-5');
  document.getElementById('loginModalLabel3').classList.remove('mx-5');
}
if (screen.width <= 1023) {
   document.getElementById('carousel-t').classList.remove('p-5');
  document.getElementById('carousel-t').classList.add('p-3');
  document.getElementById('ft-txt').classList.remove('align-right');

    document.getElementById('trn').innerHTML=`  <form autocomplete="off">  <div id="itrn" class="bg-light p-3 rounded text-center">     <div class="d-flex"> <h3 class="header-sub-title" id="lab-l"></h3> <h3 class="header-sub-title blink">|</h3></div><div class="flex-wrap">   <div class="d-grid m-2"> <label for="from-s" class="">From</label> <div class="autocomplete rounded"><input type="search" placeholder="Station name" aria-placeholder="from" id="from-s" class="rounded mx-auto border bg-light"></div> </div><a href="#" class=""><img id="btnc" src="arrows.png" alt=""></a><div class="d-grid m-2"><label for="to-s">Destination</label><div class="autocomplete rounded"><input type="search" placeholder="Station name/code" id="to-s" class="rounded text-center mx-auto border bg-light"></div></div><div class="d-grid m-2"><label for="to-s">Departure</label><input type="date" id="dep-dt" class="rounded mx-auto border bg-light text-center"></div> </div> </div><div class="text-center"><button class="btn btn-success btn-lg al d-inline-block mt-4" id="sbmt"type="submit" onclick="document.getElementById('alrt').classList.remove('d-none')">Search</button></div></form>`
    document.getElementById('intrsm').classList.remove('p-5');
    document.getElementById('intrsm').classList.add('p-3');

}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("dep-dt").value = formatDate(new Date());
  document.getElementById('alrt').classList.remove('d-none');
 setTimeout( ()=>{document.getElementById('alrt').classList.add('d-none')},5000);
});

sbmt.addEventListener('click',(e)=>{
e.preventDefault();
  document.getElementById('loginbtn').click();

})
 function unclick1() {
    document.getElementById('signupModalLabel').click();
    document.getElementById('loginbtn').click();
}
function unclick2() {
    document.getElementById('loginModalLabel').click();
    document.getElementById('signupbtn').click();
}
function unclick3() {
    document.getElementById('signupModalLabel2').click();
    document.getElementById('loginbtn').click();
}
function unclick4() {
    document.getElementById('loginModalLabel2').click();
    document.getElementById('signupbtn').click();
}
//  alerting user when Account created
 function closemodal() {
    document.getElementById('closemodal').click();

}
function closemodal2() {
    document.getElementById('closemodal2').click();

}
function closemodal3() {
    document.getElementById('closemodal3').click();

}
// show Password hide Password
function showp() {
    if(document.getElementById("showpassword").checked==true){

    str = document.getElementById('exampleInputPassword1').value;
    //  console.log(str);
    document.getElementById('passwordv').innerHTML = '<input type="text" class="form-control" id="exampleInputPassword1" required>';
    document.getElementById('exampleInputPassword1').value = str;}
    else{
        str = document.getElementById('exampleInputPassword1').value;

        document.getElementById('passwordv').innerHTML = '<input type="password" class="form-control" id="exampleInputPassword1" required>'
          document.getElementById('exampleInputPassword1').value = str;
    
    }

}
 
function showp1() {
    if(document.getElementById("showpassword2").checked==true){
    str = document.getElementById('exampleInputPassword2').value;
    document.getElementById('passwordu').innerHTML = '<input type="text" class="form-control" minlength="6" id="exampleInputPassword2" oninput="passmf1()" onchange="passmf1()" onclick="passmf1()" required>';
    document.getElementById('exampleInputPassword2').value = str;}
    else{
        str = document.getElementById('exampleInputPassword2').value;
        document.getElementById('passwordu').innerHTML = '<input type="password" class="form-control" minlength="6" id="exampleInputPassword2" oninput="passmf1()" onchange="passmf1()" onclick="passmf1()" required>';
        document.getElementById('exampleInputPassword2').value = str;}
          
    }




function showp3() {
    if(document.getElementById("showpassword3").checked==true){
    str = document.getElementById('exampleInputPassword3').value;
    document.getElementById('passwordt').innerHTML = ' <input type="text" class="form-control" onclick="passmf()" ondragover="passmf()" oninput="passmf()" onchange="passmf()" id="exampleInputPassword3" required>';
    document.getElementById('exampleInputPassword3').value = str;}
    else{
        str = document.getElementById('exampleInputPassword3').value;

        document.getElementById('passwordt').innerHTML = ' <input type="password" class="form-control" onclick="passmf()" oninput="passmf()" ondragover="passmf()" onchange="passmf()" id="exampleInputPassword3" required>'
        strdot = str;
        document.getElementById('exampleInputPassword3').value = strdot;
    
    }

}

 //  writing js for wanring to user if not fill complete detail
 function vhide() {
     if (document.getElementById("exampleCheck1").checked==true){
        document.getElementById('warn3').classList.add('d-none');
    }
    else {
        document.getElementById('warn3').classList.remove('d-none');
    }

}
function emailmf() {
    if (document.getElementById('exampleInputEmail1').value != "") {
        document.getElementById('warn1').classList.add('d-none');
    }
    else {
        document.getElementById('warn1').classList.remove('d-none');
    }

}
function passmf() {
    if((document.getElementById('exampleInputPassword3').value != "")&&(document.getElementById('exampleInputPassword3').value.length >=6)){
        document.getElementById('warn2').classList.add('d-none');
    }

    else {
        document.getElementById('warn2').classList.remove('d-none');
    }

}
function mobilenomf() {
    if (document.getElementById('exampleInputMobileno.').value != "") {
        document.getElementById('warn4').classList.add('d-none');
    }
    else {
        document.getElementById('warn4').classList.remove('d-none');
    }

}
function passmf1() {
    if((document.getElementById('exampleInputPassword2').value != "")&&(document.getElementById('exampleInputPassword2').value.length >=6)){
        document.getElementById('warn5').classList.add('d-none');
    }

    else {
        document.getElementById('warn5').classList.remove('d-none');
    }

}
function vhide1() {
    if (document.getElementById("exampleCheck2").checked==true){
       document.getElementById('warn6').classList.add('d-none');
    }
   else {
       document.getElementById('warn6').classList.remove('d-none');
    }

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
  f = document.getElementById('btnc');
  f.addEventListener('click', () => {
    a = document.getElementById('from-s').value;
    document.getElementById('from-s').value = document.getElementById('to-s').value;
    document.getElementById('to-s').value = a;
  });
   


