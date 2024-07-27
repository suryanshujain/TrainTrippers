 if (screen.width <= 1023) {
  document.getElementById('head').innerHTML=` 
  <div class="d-flex-column w-100"> <div class="d-flex w-100"><div class="d-flex mx-auto o-h"><div class="inline-block p-1 rounded m-1 mx-2" id="fromdiv">
     <span class="text-primary">From</span>
     <br>
     <div class="autocomplete rounded text-center bg-light">  <input type="search" class="rounded w-100 text-center h-s bg-light" id="from-v"></div></div>
  
  <a href="#" class="my-auto mx-2" id="x-c">⇌</a>

  <div class="inline-block p-1 rounded m-1 mx-2" id="todiv">
     <span class="text-primary">To</span>
     <br>
     <div class="autocomplete rounded text-center bg-light"><input type="search" class="rounded w-100 text-center h-s bg-light" id="to-v"></div></div></div></div>
<div class="d-flex-column text-center">  <div class="d-inline-block p-1 rounded m-1 mx-3" id="depdiv">
     <span class="text-primary">Departure</span>
     <br>
     <div class="autocomplete rounded text-center bg-light" id="zing"><input type="date" class="input rounded w-100 text-center h-s bg-light" id="date-v"></div></div> 

 <div class="text-center my-2 mx-3">
     <button type="submit" class="btn btn-outline-light btn-md al d-inline-block" id="s-t" onclick="gettrains(0)">Search</button></div>
   </div></div>
   
     
     
 `;
 document.getElementById('ftr').innerHTML=` <div class="text-center pb-3" id="lg-h">
  <img src="pngfind.com-facebook-icon-white-png-1744532.png" class="logos-f me-5"  alt="">
  <img src="pngfind.com-instagram-png-white-2773517 (1).png" class="logos-i" alt="">
  </div>
    <div class="d-inline-block bold"> &copy; 2023 TrainTrippers All rights reserved
      <br> <div class="d-inline-block text-light fw-light f-s bold float-end"> Designed and built with all the love in the world.
      </div>
    </div>`;
 document.getElementById('bckbtn').classList.add('me-5');
 document.getElementById('main-c').classList.remove('px-5');
 document.getElementById('main-c').classList.remove('py-3');
 document.getElementById('dates').classList.add('d-none');
 document.getElementById('t-a').classList.remove('px-5');
 document.getElementById('t-a').classList.remove('pt-5');
 document.getElementById('t-a').classList.add('pt-2');

}
if(document.getElementById('fromdiv').offsetWidth>'200'){
  document.getElementById('fromdiv').style.width = '200px';

 }
 if(document.getElementById('todiv').offsetWidth>'200'){
  document.getElementById('todiv').style.width = '200px';

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
 
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('uhide').classList.remove('d-none');
           document.getElementById('main-c').classList.remove('d-none');
           var c = localStorage.getItem('c');
          if(c==1){
document.getElementById('from-v').value = localStorage.getItem('f');
document.getElementById('to-v').value = localStorage.getItem('t');
document.getElementById('date-v').value = localStorage.getItem('d');
localStorage.removeItem('c');
localStorage.setItem('c',0);
gettrains(0);
 }
if(c==0){
  document.getElementById('from-v').value = localStorage.getItem('f1');
document.getElementById('to-v').value = localStorage.getItem('t1');
document.getElementById('date-v').value = localStorage.getItem('d1');
gettrains(0);

 }

});



function setdates(datestring) {
  document.getElementById('dates').innerHTML = "";
  for (var i = -5; i < 6; i++) {
 
    var someDate = new Date(datestring);

    var date = someDate.setDate(someDate.getDate() + i);
    var s = new Date(date);
    var d = (s.toDateString()).substr(0, 10);
    if (i == 0) { document.getElementById('dates').innerHTML += '<li class="page-item active" id="'+i+'"><a class="page-link" href="#">' + d + '</a></li>' }
    else { document.getElementById('dates').innerHTML += '<li class="page-item" onclick="gettrains('+i+')" id="'+i+'"><a class="page-link" href="#">' + d + '</a></li>' }

}
};
function converttime(t)
{
  var hrs = t.substr(0,2);
  var mins  = t.substr(3,2);
  return hrs+"hrs "+mins+"min";
} 
 
 function day2(depDay, travelTime, depTime, destTime) {
  // Convert strings to Date objects
  var hrs = travelTime.substr(0,2);
  var mins  = travelTime.substr(3,2);
   var time = parseInt(hrs)*60+parseInt(mins);
  travelTime = time.toString();

  depTime = depTime.substr(0,2)+":"+depTime.substr(3,2);
  destTime= destTime.substr(0,2)+":"+destTime.substr(3,2);
  const depDate = new Date(depDay);
  const depDateTime = new Date(`${depDay}T${depTime}`);
  const destDateTime = new Date(`${depDay}T${destTime}`);

  // Calculate the arrival time
  const arrivalTime = new Date(depDateTime.getTime() + parseInt(travelTime) * 60 * 1000);

  // If the arrival time is past midnight, adjust the date
  if (arrivalTime > destDateTime) {
    destDateTime.setDate(destDateTime.getDate() + 1);
  }

  // Return the arrival weekday
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const arrivalWeekday = weekdays[destDateTime.getDay()];

  return arrivalWeekday;
}

function formatTime(time24) {
  var ts = time24;
  var H = +ts.substr(0, 2);
  var h = (H % 12) || 12;
  h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
  var ampm = H < 12 ? " AM" : " PM";
  ts = h + ts.substr(2, 3) + ampm;
  return ts;
};
function structuredata(arr, index,date,d) {
  var s = date.toDateString();
  var day = s.substr(0,3);
   
  var t = d.replace("-","");
  t = t.replace("-","");
  console.log(d);
  console.log(t);
  const run_days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const available_days = arr.run_days; // Assume this is the array from the API response
let srr = [];

for (let i = 0; i < run_days.length; i++) {
  if (available_days.includes(run_days[i])) {
    srr[i] = 'available';
  } else {
    srr[i] = 'not-available';
  }
}
  let a;
  if(screen.width>=1024){
          a = ' <div class="t d-flex-column my-3" id="t-' + index + '"><div class="d-flex w-100 bg-light rounded border p-3ō"> <div class="d-inline-block"> <div class="d-inline-block ms-4 mt-3 t-nam">' + arr.train_name + '</div><br><div class="d-inline-block ms-4 my-3 tr-n" >#' + arr.train_number + ' &nbsp; | &nbsp; Departs on </div><div class="d-inline-block ms-2 my-1 day-arr"><b class="'+srr[0]+'">S </b><b class="'+srr[1]+'">M </b><b class="'+srr[2]+'">T </b><b class="'+srr[3]+'">W </b><b class="'+srr[4]+'">T </b><b class="'+srr[5]+'">F </b><b class="'+srr[6]+'">S </b></div></div> <div class="d-flex jrn-t mx-auto"> <div class="d-flex-column arr m-2 mt-3"><div class="arr-time">' + formatTime(arr.from_sta)+', '+day + '</div><div class="arr-stn my-2">' + arr.from_station_name + ' ' + arr.from + '</div></div>  <div ><hr class="mx-2"></div><div class="dur">' + converttime(arr.duration) + '</div><div ><hr class="mx-2"></div>    <div class="d-flex-column dst m-2 mt-3"><div class="dst-time">' + formatTime((arr.to_sta)) + ', '+(day2(d,arr.duration,arr.from_sta,arr.to_sta).substr(0,3)) + '</div><div class="dst-stn my-2" >' + arr.to_station_name + ' ' + arr.to + '</div> </div></div><div class="me-5 my-auto bold"><a href="https://www.makemytrip.com/railways/listing?classCode=CC&className=AC%20Chair%20Car&date='+t+'&destStn='+arr.to+'&srcStn='+arr.from+'"><button class="bold btn-tt rounded btn">Book Tickets</button></a></div><div></div>'}
          else{
            a = ' <div class="t d-flex-column my-3 w-100" id="t-' + index + '"><div class=" w-100 bg-light rounded border p-3ō"> <div class="d-flex"> <div class="mt-1 ms-2 t-nam">' + arr.train_name + '</div><br><div class="d-flex ms-auto me-2"><div class="d-flex my-3 tr-n ms-2" >#' + arr.train_number + ' &nbsp; | &nbsp; </div><div class="d-flex-column"><div class= "mt-3 mb-1 tr-n">Departs on </div><div class="day-arr"><b class="'+srr[0]+'">S </b><b class="'+srr[1]+'">M </b><b class="'+srr[2]+'">T </b><b class="'+srr[3]+'">W </b><b class="'+srr[4]+'">T </b><b class="'+srr[5]+'">F </b><b class="'+srr[6]+'">S </b></div></div></div> </div><div class="d-flex jrn-t mx-auto"> <div class="d-flex-column arr me-1 mb-2 ms-1 mt-3"><div class="arr-time">' + formatTime(arr.from_sta)+', '+day + '</div><div class="arr-stn my-2">' + arr.from_station_name + ' ' + arr.from + '</div></div>  <div ><hr class="me-1"></div><div class="dur">' + converttime(arr.duration) + '</div><div ><hr class="ms-1"></div>    <div class="d-flex-column dst ms-1 mb-2 me-1 mt-3"><div class="dst-time">' + formatTime((arr.to)) + ', '+(day2(d,arr.travel_time,arr.from_sta,arr.to).substr(0,3)) + '</div><div class="dst-stn my-2" >' + arr.to_station_name + ' ' + arr.to_stn_code + '</div> </div></div><div class="p-2 my-auto bold text-end"><a href="https://www.makemytrip.com/railways/listing?classCode=CC&className=AC%20Chair%20Car&date='+t+'&destStn='+arr.to+'&srcStn='+arr.from+'"><button class="bold btn-tt rounded btn ms-auto">Book Tickets</button></a></div></div></div>'
          }
  return a;
}
function hide(){
  document.getElementById('scro').classList.add('d-none');
};
function updatedata(ele) {

  let main = document.getElementById('alltrains');
  main.innerHTML = "";
  if (localStorage.getItem('itemsJson') == null) {
    itemJsonArray = [];

    itemJsonArray.push(ele);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));

  }
  else {
    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.push(ele);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));


  }
  let str = "";
  itemJsonArray.forEach((element, index) => {
    main.innerHTML += element;




  });

  document.getElementById('loading').classList.add('d-none');

}
function loading(){
  document.getElementById('loading').classList.remove('d-none');
 }
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
function dmstodd(s){
var arr;
arr = s.split(" ");
var min= arr[1].substr(0,arr[1].length-1);
var sec = arr[2].substr(0,arr[2].length-2);
var deg = parseFloat(arr[0].substr(0,arr[0].length - 1))+(parseFloat(min))/60+ parseFloat(sec)/3600;
var st= deg.toString();
return st;
};

autocomplete(document.getElementById("from-v"), stations);
autocomplete(document.getElementById("to-v"), stations);
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
        b
          .addEventListener("click", function (e) {
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
f = document.getElementById('x-c');
f.addEventListener('click', () => {
  a = document.getElementById('from-v').value;
  document.getElementById('from-v').value = document.getElementById('to-v').value;
  document.getElementById('to-v').value = a;
});


function gettrains(i) {
  loading();
  document.getElementById('scro').classList.remove('d-none');
  
  var fr = document.getElementById('from-v').value;
  var t = document.getElementById('to-v').value;
  var date;
   date = document.getElementById('date-v').value;
   localStorage.removeItem('f1');
   localStorage.removeItem('t1');
  localStorage.removeItem('d1');
  localStorage.removeItem('itemsJson');
     var someDate = new Date(date);

  var nd = someDate.setDate(someDate.getDate() + i);
  var s = new Date(nd);
  console.log(s);
  var d = formatDate(s);
  localStorage.setItem('f1',fr);
  localStorage.setItem('t1',t);
  localStorage.setItem('d1',d);
  document.getElementById('uhide').classList.remove('d-none');
        document.getElementById('main-c').classList.remove('d-none');
        document.getElementById('eror').classList.add('d-none');

   
  if (screen.width >= 1024) setdates(d);
  console.log(d);
  document.getElementById('date-v').value =d;
  var a = fr.search("  ");
  var b = t.search("  ");
  var from = fr.substr(a + 2, fr.length - a - 2);
  
  var to = t.substr(b + 2, t.length - b - 2);
  var place = t.substr(0,b);
  console.log(place);


 if(a!=-1&&b!=-1){ let p = fetch(`https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${from}&toStationCode=${to}&dateOfJourney=${date}`, {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '6d9cc1171bmsh218628218599d9fp1983edjsn0448d4305f23',
    'x-rapidapi-host': 'irctc1.p.rapidapi.com'
  }
})
.then(response => response.json())
.then((trains) => {
       (trains.data).forEach((train, index) => {
        
        console.log(train);
        let c = structuredata(train, index,s,d);
         updatedata(c);
         

      })
    })
    .catch((error)=>{
      document.getElementById('dests').innerHTML= "";

      document.getElementById('uhide').classList.add('d-none');
      document.getElementById('main-c').classList.add('d-none');
      document.getElementById('eror').classList.remove('d-none');
      console.error(error);
      // document.getElementById('uhide').classList.add('d-none');
      // document.getElementById('main-c').classList.add('d-none');
      // document.getElementById('eror').classList.remove('d-none');


    });
    var lat;
    var lng;
    var check = 1;
    fetch('https://api.opencagedata.com/geocode/v1/json?q='+place+'&countrycode=in&limit=1&key=bc60f7dc5c7a46ffb1d0e53c18cd3aaa')
    .then(response => response.json())
    .then((data) =>{
      var arr=[];

      console.log(data);
         lat = data.results[0].geometry.lat;
         console.log(lat);

         lng = data.results[0].geometry.lng;
         console.log(lng);
         fetch('https://api.opentripmap.com/0.1/en/places/radius?radius=100000&lon='+lng+'&lat='+lat+'&kinds=interesting_places&&rate=3&limit=24&apikey=5ae2e3f221c38a28845f05b69c2169c9a9bfa0f1d67e7e97600d6f3d')
         .then(response=>response.json())
         .then((data)=>{
           console.log(data);
           
           document.getElementById('dests').innerHTML= "";

           (data.features).forEach((el)=>{
            var qid = el.properties.wikidata;
            if(arr.length!=0){
              for(var i=0; i<arr.length; i++){
                if(arr[i]==qid){
                  check =0;
                  break;
                }
                else{
                  check =1;
                }
              }

            }
            if(check==1){
             arr.push(qid);
            fetch('https://www.wikidata.org/wiki/Special:EntityData/'+qid+'.json ')
            .then(response=>response.json())
            .then((details)=>{
             console.log(details);
             var img = details.entities[qid].claims.P18[0].mainsnak.datavalue.value;
             console.log(img);
            var url =  'https://commons.wikimedia.org/wiki/Special:FilePath/'+img+'?';
            console.log(url);
            var name= details.entities[qid].labels.en.value;
            var description= details.entities[qid].descriptions.en.value;
            document.getElementById('dests').innerHTML+= '<div class="col rep-del"> <div class="card shadow-sm"><img class="bd-placeholder-img card-img-top" role="img" width="100%" height="225" src="'+url+'" alt="'+name+'" preserveAspectRatio="xMidYMid slice" focusable="false"><div class="card-body bg-light rounded"><p class="card-text"> <div class="bold">'+name+'</div><br><div class="f-s2">'+description+'</div></p></div></div></div>';

            

 
           });}

           
           });
          //  document.getElementById('loading').classList.add('d-none');

         })
        

    })

    .catch(error => console.error(error));}
    else{
      document.getElementById('dests').innerHTML= "";

      document.getElementById('uhide').classList.add('d-none');
      document.getElementById('main-c').classList.add('d-none');
      document.getElementById('eror').classList.remove('d-none');
    }
     
};
