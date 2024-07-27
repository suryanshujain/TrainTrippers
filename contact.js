import app from "./firebase.js";
import {set,ref,getDatabase} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
 
const db = getDatabase(app);

cntct.addEventListener('click',(e)=>{
    e.preventDefault();
var name= document.getElementById('Name').value;
var email= document.getElementById('inputEmail4').value;
var topic= document.getElementById('inputtopic').value;
var description= document.getElementById('description').value;
var date = new Date();
const auth= getAuth(app);
const user = auth.currentUser;
if(document.getElementById('Name').value==''||
document.getElementById('inputEmail4').value==''||
document.getElementById('inputtopic').value==''||
document.getElementById('description').value== ''){
document.getElementById('alert5').classList.remove('d-none');
}
else{
set(ref(db, 'queries/'+user.uid), {
    email:email,
    name:name,
    topic: topic,
    description:description,
    date:date
   })
   .then(() => {
    document.getElementById('altr').classList.remove('d-none');
    setTimeout(()=>{
        document.getElementById('altr').classList.add('d-none');
    
    },4000)  ;  
        document.getElementById('Name').value='';
        document.getElementById('inputEmail4').value='';
        document.getElementById('inputtopic').value= '';
        document.getElementById('description').value= '';  })
  .catch((error) => {
    alert(' The write failed... ')
  });
}

})
 
 
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
            <a class="nav-link active" href="contact.html" aria-current="page">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="feedback.html" tabindex="-1" aria-current="page">Feedback</a>
          </li>
        </ul>
        <!-- <a class="nav-link text-light" tabindex="-1" aria-current="page" >Profile</a> -->

        <button class="btn text-light border-light" id="logout">Logout</button>
      </div>
    </div>
  </nav>
    <div class="cont-us d-flex justify-content-center">
     <div class="text-center bold text-light f-l">Contact Us</div>

   </div>
   <div class="alert alert-success d-none" role="alert" id="altr">
    Message sent!
  </div>
   <div class="f-l bold text-center mt-4 p-3">Let's start a conversation</div>
   <div class="d-flex-column">
   <div class="text-dark bold w-100 p-2"><div class="text-m2">
    Ask me how we can help you:</div><br>
    <div class="fw-light ">We're always here to help you with any queries or concerns you may have about TrainTrippers. Whether you're a traveler looking for assistance with our train search or a potential sponsor interested in partnering with us, we're eager to hear from you.
<br><br>
        Please feel free to reach out to us through our contact form. We'll get back to you as soon as possible and do our best to address your questions or concerns.
        <br><br>
        Thank you for your interest in TrainTrippers, and we look forward to hearing from you soon!   </div>
    <br>
</div>
<div class="w-100 ms-auto p-3 m-4">
    <form class="row boldlight g-3" id="f">
        <div class="col-12">
            <div class="my-2">Note: All fields are required.</div>

        
                <label for="Name" class="form-label">Name</label>
                <input type="text" class="border bg-light py-2 w-100 bold" id="Name" required="">
              </div>
              <div class="col-12 my-2">

          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="border bg-light bold w-100" id="inputEmail4" required="">
        </div>
        <div class="col-12">
          <label for="inputtopic" class="form-label">Topic</label>
          <input type="text" class="border bg-light bold" id="inputtopic" required="">
        </div>
        <div class="col-12">
          <label for="description" class="form-label">Description</label> <br>
          <textarea name="" class="bg-light w-100 p-2 boldlight rounded border" id="description" cols="30" rows="10" required=""></textarea>
         </div>
        
        
          <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" required="">
            <label class="form-check-label" for="gridCheck"> 
              &nbsp;  I'd like to receive more information from TrainTrippers; I understand and agree 
                to
                 the <a href="pp.html" class="text-decoration-none">&nbsp; privacypolicy</a>.            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" id="cntct" class="btn btn-primary w-100 text-center">Send message</button>
        </div>
</form>
</div></div>
<div class="bg-s">

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
<div class="bg-light boldlight p-3 rounded mt-3 border">
  <div class="">Frequently asked question and answers</div>
  <br>
  <div class="f-s fw-light text-m">
  <div class="text-dark boldlight">   Q: What is TrainTrippers?</div> 
A: TrainTrippers is a website that helps you search for trains between stations and tourist places based on your destination.
<br><br>
<div class="text-dark boldlight">Q: How do I use TrainTrippers?
</div> 

A: Simply enter your starting point, destination, and desired travel dates, and our website will show you a list of available trains and nearby tourist places.
<br><br>
<div class="text-dark boldlight">
Q: Is TrainTrippers free to use?
</div> 
A: Yes, TrainTrippers is completely free to use. You can search for trains and tourist places without any charges.
<br><br>
<div class="text-dark boldlight">
Q: How accurate is the information on TrainTrippers?
</div> 
A: We strive to provide our users with the most accurate and up-to-date information possible. However, train schedules and tourist information can change frequently, so we recommend that you double-check the information before making any travel plans.
<br><br>
<div class="text-dark boldlight">
Q: Can I book train tickets through TrainTrippers?
</div>
A: No, TrainTrippers is not a booking platform. However, we provide you with all the necessary information you need to book your tickets through the official website of Indian Railways or any other booking platform of your choice.
<br><br>
<div class="text-dark boldlight">
Q: Can I suggest a new feature for TrainTrippers?
</div>
A: Yes, we welcome all feedback and suggestions. You can send us your ideas through our website's contact form or email us directly at [insert email address here].
<br><br>
<div class="text-dark boldlight">
Q: How can I advertise on TrainTrippers?
</div>
A: We offer various advertising opportunities on our website. If you are interested in advertising with us, please contact us through our website's contact form or email us at [insert email address here].
<br><br>
We hope this answers your questions. If you have any other queries or concerns, please don't hesitate to <a href="contact.html">contact us</a>.






  </div>
</div>
</div>

<footer>
<div class="footer text-light bg-dark text-center h-auto p-5" id="ftr">
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
<script src="contact.js" type="module"></script>
<script src="contact1.js"></script>
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
<script src="contact.js"></script>


</body>`
}
