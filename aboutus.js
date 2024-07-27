 
if(screen.width<1024){
    document.getElementsByTagName("body")[0].innerHTML=`<body>
    <!-- navigation bar html -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand mr-5 px-2" href="#" id="logo">TrainTrippers</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav m-auto me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="welcome.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="about.html">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="feedback.html">Feedback</a>
            </li>
          </ul>
          <!-- <a class="nav-link text-light" tabindex="-1" aria-current="page" >Profile</a> -->
        
        </div>
         </div>
    </nav>
    <div class="bg-c text-center">
      <div class="f-l boldlight d-flex-column text-center text-light p-5"><div class="d-inline-block text-center"> We are </div><div class="cl-v bold">&nbsp; TrainTrippers</div>
  <br> </div>
      </div>
      <div class="bg-c">
  
      <div class="d-flex-column">
          <div class="p-5"><img src="Group 4@2x.png" class="img-fluid img" alt=""></div>
  <div class="p-3 boldlight f-s">
  Welcome to TrainTrippers, the ultimate solution for train travel enthusiasts! Our website was created with the aim of providing a convenient and hassle-free experience for people who love to explore new places by train. <br>
  
      We understand the importance of efficient travel planning, especially when it comes to exploring tourist destinations via train. That's why we offer a comprehensive search engine that allows you to search for train routes and schedules between any two stations in the country, and even find tourist destinations along the way. <br>
      
      Our team of developers, designers, and travel experts have worked hard to create a user-friendly platform that caters to the needs of all travelers, from college students to seasoned adventurers. We believe that everyone deserves to have access to reliable and accurate information when planning their train journeys, which is why we strive to provide the most up-to-date information possible.
      <br>
      At TrainTrippers, we are passionate about train travel and we want to share our enthusiasm with you. Whether you're looking to explore new places or simply want to plan a comfortable and convenient journey, we are here to help you every step of the way. <br>
      
      Thank you for choosing TrainTrippers for all your train travel needs. We hope you have a fantastic journey! <br><br><br><br><br>
      
      
      
      
       
      
      
      
      
      
  </div></div></div>
  <div class="p-3 bg-c">
  
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
  <div class="footer text-light text-center bg-dark h-auto p-5" id="ftr">
  <div class="pb-3">
  <img src="pngfind.com-facebook-icon-white-png-1744532.png" class="logos-f me-5" alt="">
  <img src="pngfind.com-instagram-png-white-2773517 (1).png" class="logos-i" alt="">
  </div>
    <div class="d-inline-block bold"> © 2023 TrainTrippers All rights reserved <br> <div class="d-inline-block text-light fw-light f-s bold float-end"> Designed and built with all the love in the world.
    </div></div>
  </div>
  </footer>
  
  
  
  
  
  
    
    
    <!-- <script src="welcome.js"></script> -->
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
  <script src="aboutus.js"></script>
  
  </body>`
}
