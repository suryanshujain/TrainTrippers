import app from "./firebase.js";
import {set,ref,getDatabase} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
 
const db = getDatabase(app);

 
var fs = document.getElementById('fb-sbmt');
fs.addEventListener('click',(e)=>{
    e.preventDefault();
var name= document.getElementById('nam').value;
var email= document.getElementById('inputEmail4').value;
var type= document.getElementById('type').value;
var description= document.getElementById('fb-txt').value;
var date = new Date();
const auth= getAuth(app);
const user = auth.currentUser;
set(ref(db, 'feedback/'+type+'/'+user.uid), {
    email:email,
    name:name,
    type: type,
    comment:description,
    date:date
   })
   .then(() => {
    document.getElementById('altr').classList.remove('d-none');
setTimeout(()=>{
    document.getElementById('altr').classList.add('d-none');

},4000)  ;  
    document.getElementById('nam').value='';
    document.getElementById('inputEmail4').value='';
    document.getElementById('type').value= '';
    document.getElementById('fb-txt').value= '';
  })
  .catch((error) => {
    alert(' The write failed... ')
  });
 

});

 
  if(screen.width<1024){
    document.getElementsByTagName("body")[0].innerHTML=`<body>
    <!-- navigation bar html -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" id="vbb">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand mr-5 px-2" href="#" id="logo">TrainTrippers</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav m-auto me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" tabindex="-1" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" tabindex="-1" href="about.html">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html" aria-current="page">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="feedback.html" tabindex="-1" aria-current="page">Feedback</a>
            </li>
          </ul>
          <!-- <a class="nav-link text-light" tabindex="-1" aria-current="page" >Profile</a> -->
  
          <button class="btn text-light border-light" id="logout">Logout</button>
        </div>
      </div>
    </nav>
    <div class="alert alert-success d-none" role="alert" id="altr">
      Feedback sent!
    </div>
    <div class=" bg-s">
    <div class="contain d-flex-column bg-w rounded border p-2">
      <div class="w-100 my-3 px-2"> <div class="f-l bold text-center mb-5">Feedback</div>
        Thank you for visiting TrainTrippers, a website that helps you search for trains between stations and tourist places based on your destination. As the creator of this website, I am thrilled to know that you find it useful for your queries and potential sponsorships.
  <br><br>
        We strive to provide our users with the most accurate and up-to-date information about train schedules and tourist destinations, so they can plan their trips with ease. Our website is user-friendly and accessible to people of all ages and backgrounds, and we are constantly working to improve it based on user feedback.
        <br><br>
        We appreciate your support and feedback, as it helps us to make TrainTrippers even better. If you have any suggestions or feedback, please feel free to contact us through our website.
        <br><br>
        Thank you for choosing TrainTrippers, and we hope to see you again soon.</div>
    <div class="fb d-flex my-4 bg-w bold w-100 mt-5 pt-3">
      <form class="row g-3">
        <div class="bold">Note: All fields are required</div>
  
        <div class="col-md-12">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control w-100 bg-w boldlight" id="inputEmail4" required="">
        </div>
        <br><br>
        <div class="col-md-12">
          <label for="nam" class="form-label">Name</label>
          <input type="text" class="form-control w-100 boldlight bg-w bg-light" id="nam" required="">
        </div>
          <div class="col-md-12">
          <label for="inputState" class="form-label">Type of feedback</label>
          <select id="type" class="form-select boldlight bg-w" required="">
             <option selected=""></option>
            <option>Give suggestions</option>
            <option>Bug report</option>
            <option>Performance</option>
            <option>Other</option>
            <option></option>
          </select>
        </div>
        <div class="col-md-12">
          <label for="fb-txt" class="form-label">Comments</label>
          <textarea id="fb-txt" class="form-control w-100 boldlight bg-w" cols="30" rows="10" required=""></textarea>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck">
            <label class="form-check-label my-1" for="gridCheck"> &nbsp;
              I have read and agree to TrainTrippers <a href="pp.html" class="text-deecoration-none">privacypolicy</a>
             </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" id="fb-sbmt" class="btn btn-primary w-100">Send feedback</button>
        </div>
      </form>
    </div>
  </div>
  </div>
     <div class="p-1 bg-s">
  
  <div class="bg-light boldlight p-3 rounded mt-3 border">
    <div class="text-dark">Why TrainTrippers?</div>
    <br>
    <div class="f-s text-m">
      Our website, TrainTrippers is estabilished in 2023, is a section of your larger website project that is focused on providing a convenient and user-friendly way for travelers to search for trains between stations and tourist destinations. As a college student, I have identified a gap in the market for a website that specifically caters to train travel and tourism, and have created a platform that addresses this need. <br> <br>
  
  TrainTrippers offers a unique service that combines train travel and tourism, providing users with the ability to search for trains that connect them to popular tourist destinations. This feature is particularly useful for travelers who are looking to plan their itinerary and want to include train travel as part of their journey.  <br> <br>
  
  By using TrainTrippers, travelers can search for trains between stations and tourist destinations, making it easier for them to plan their trip and find the most convenient and cost-effective way to travel. The website's search functionality is designed to be easy to use, with clear and concise information provided to help users make informed decisions about their travel plans. <br>  <br>
  
  Overall, TrainTrippers is an innovative and practical addition to your larger website project, offering a valuable service to travelers who are looking for a convenient way to plan their train travel and tourism itinerary.
  
  
  
  
  
  
    </div>
  </div>
  </div>
  
  <footer>
  <div class="footer text-light bg-dark h-auto p-5 text-center" id="ftr">
  <div class="d-inline-block pb-3">
  <img src="pngfind.com-facebook-icon-white-png-1744532.png" class="logos-f me-5" alt="">
  <img src="pngfind.com-instagram-png-white-2773517 (1).png" class="logos-i" alt="">
  </div>
    <div class="d-inline-block bold align-right"> © 2023 TrainTrippers All rights reserved
    <br> <div class="d-inline-block text-light fw-light f-s bold float-end"> Designed and built with all the love in the world.
      </div></div>
  </div>
  </footer>
  
  
  
  
  
  
    
    
    <!-- <script src="welcome.js"></script> -->
  <script src="welcome.js" type="module"></script>
  <script src="firebase.js" type="module"></script>
  <script src="feedback.js" type="module"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  
  <!-- Code injected by live-server -->
  <script>
      // <![CDATA[  <-- For SVG support
      if ('WebSocket' in window) {
          (function () {
              function refreshCSS() {
                  var sheets = [].slice.call(document.getElementsByTagName("link"));
                  var head = document.getElementsByTagName("head")[0];
                  for (var i = 0; i < sheets.length; ++i) {
                      var elem = sheets[i];
                      var parent = elem.parentElement || head;
                      parent.removeChild(elem);
                      var rel = elem.rel;
                      if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                          var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                          elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                      }
                      parent.appendChild(elem);
                  }
              }
              var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
              var address = protocol + window.location.host + window.location.pathname + '/ws';
              var socket = new WebSocket(address);
              socket.onmessage = function (msg) {
                  if (msg.data == 'reload') window.location.reload();
                  else if (msg.data == 'refreshcss') refreshCSS();
              };
              if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
                  console.log('Live reload enabled.');
                  sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
              }
          })();
      }
      else {
          console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
      }
      // ]]>
  </script>
  
  
  </body>`
  }
  
