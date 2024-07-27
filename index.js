//  creating changing modal
document.getElementById('signupf1').addEventListener('submit',(event)=>{
event.preventDefault();
});
document.getElementById('signupf2').addEventListener('submit',(event)=>{
event.preventDefault();
});
document.getElementById('signinf').addEventListener('submit',(event)=>{
event.preventDefault();
});
import app from "./firebase.js";
 import {getAuth,onAuthStateChanged,createUserWithEmailAndPassword,RecaptchaVerifier,signInWithPhoneNumber,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,FacebookAuthProvider,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
 import { getDatabase, ref,set,onValue ,get,child} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
 const provider1 = new GoogleAuthProvider();
 const provider2 = new FacebookAuthProvider();
const auth = getAuth(app);
onAuthStateChanged(auth,(user)=>{
  if(user){
       setTimeout(location.replace("welcome.html"),5000);}
      // console.log('no user logged in');
       
  else{

  }
})

function Setdata(id,name,email){
  const database = getDatabase(app);

  set(ref(database, 'users/' +id), {
    using:email,
    name:name
   })
   .then(() => {
   })
  .catch((error) => {
   });
  
}
Setdata2('32323233','fdsfd','vdfdv','vfdv2323');
function Setdata2(number,fname,lname,userid){
  const database = getDatabase(app);

  set(ref(database, 'users/' +number), {
    fname:fname,
    lname:lname,
    userid:userid
   })
   .then(() => {
   })
  .catch((error) => {
   });
  
};
function setname(number){
  // const starCountRef = ref(database, 'users/' + number + '/fname');
  // const starCountRef2 = ref(database, 'users/' + number + '/lname');
  const database = getDatabase(app);

  get(child(ref(database), `users/`+number))
  .then((snapshot) => {
    if (snapshot.exists()) {
      document.getElementById('fn2').value = snapshot.val().fname;
      document.getElementById('ln2').value = snapshot.val().lname;
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.log(error.message);
  });
  
}
cracc1.addEventListener('click',(event)=>{
    const email = document.getElementById('exampleInputEmail1').value;
const password = document.getElementById('exampleInputPassword3').value;
const fname = document.getElementById('fn1').value;
const lname = document.getElementById('ln1').value;
const name = fname + " " + lname;


// var fname = document.getElementById('fn1').value
// const lname = document.getElementById('ln1').value
if(document.getElementById("exampleCheck1").checked==true){
  
  
 createUserWithEmailAndPassword(auth, email, password)

   .then((userCredential) => {
     // Signed in 
     
    const user = userCredential.user;

    
    Setdata(user.uid,name,email);
     
 
      })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
   //   alert(errorMessage);
 
 if(errorMessage=="Firebase: Error (auth/email-already-in-use)."){
      document.getElementById('alerting1').innerHTML='<div class="alert alert-warning alert-dismissible fade show d-none" id="error1" role="alert">E-mail already in use.<button type="button" class="btn-close bg-transparent btn-outline-secondary p-2 m-1" data-bs-dismiss="alert" aria-label="Close"></button> </div>' 
   }
      // ..
   else{
      document.getElementById('alerting1').innerHTML =' <div class="alert alert-warning alert-dismissible fade show d-none" id="error1" role="alert"> Please fill in your appropriate e-mail id and password both and agree to terms and condition.<button type="button" class="btn-close bg-transparent btn-outline-secondary p-2 m-1" data-bs-dismiss="alert" aria-label="Close"></button></div>'
   }
     document.getElementById('error1').classList.remove('d-none');

   });
 

}
else{
   document.getElementById('alerting1').innerHTML ='<div class="alert alert-warning alert-dismissible fade show d-none" id="error1" role="alert"> Please agree to terms and condition.<button type="button" class="btn-close bg-transparent btn-outline-secondary p-2 m-1" data-bs-dismiss="alert" aria-label="Close"></button></div>';
   document.getElementById('error1').classList.remove('d-none');
}});
// js for sigup method second -->mobile no.
mobilenobtn1.addEventListener('click',()=>{
   window.recaptchaVerifier = new RecaptchaVerifier('otp', {
      'size':'invisible',
      'callback': (response) => {
         // reCAPTCHA solved, allow signInWithPhoneNumber.
         onSignInSubmit();
       }
   }, auth);
   window.recaptchaVerifier.render();
});
mobilenobtn2.addEventListener('click',()=>{
   window.recaptchaVerifier = new RecaptchaVerifier('otp', {
      'size':'invisible',
      'callback': (response) => {
         // reCAPTCHA solved, allow signInWithPhoneNumber.
         onSignInSubmit();
       }
   }, auth);
   window.recaptchaVerifier.render();
});

function onSignInSubmit(){

   var number= document.getElementById('exampleInputMobileno.').value;
   const appVerifier = window.recaptchaVerifier;
  
  
   var n='+91'+number;
   signInWithPhoneNumber(auth,n,appVerifier)
    .then((confirmationResult) => {
     setname(number);
      
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      document.getElementById('alerting2').innerHTML =' <div class="alert alert-success alert-dismissible fade show d-none" id="error2" role="alert"> OTP sent!<button type="button" class="btn-close bg-transparent btn-outline-secondary p-2 m-1" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      document.getElementById('error2').classList.remove('d-none');
   
      // ...
    })
    .catch((error) => {
      // Error; SMS not sent
      // alert(error.message);
      console.log(error.message);
      document.getElementById('alerting2').innerHTML ='<div class="alert alert-warning alert-dismissible fade show d-none" id="error2" role="alert">SMS not sent! Please enter appropriate details <button type="button" class="btn-close bg-transparent btn-outline-secondary p-2 m-1" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      document.getElementById('error2').classList.remove('d-none');
   
      // ...
    });
};
cracc2.addEventListener('click',()=>{
// const fnam = document.getElementById('fn2').value
// const lnam = document.getElementById('ln2').value

// const name = fnam + " " + lnam
var number= document.getElementById('exampleInputMobileno.').value;
const lname = document.getElementById('ln2').value;
const fname = document.getElementById('fn2').value;
// const database = getDatabase(app);

// const name = fname + " " + lname;

   if(document.getElementById('exampleCheck2').checked==true){
   var otp = document.getElementById('otp-g').value;

   confirmationResult.confirm(otp)
   .then((result) => {
      // User signed in successfully.
      const user = result.user;
// console.log(user.uid);

    Setdata2(number,fname,lname,user.uid);// ...

    })
    .catch((error) => {
      // User couldn't sign in (bad verification code?)
      document.getElementById('alerting2').innerHTML =' <div class="alert alert-warning alert-dismissible fade show d-none" id="error2" role="alert">Please enter correct OTP.<button type="button" class="btn-close bg-transparent btn-outline-secondary p-2 m-1" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      document.getElementById('error2').classList.remove('d-none');
      
      // ...
      
    });}
    else{
      document.getElementById('alerting2').innerHTML =' <div class="alert alert-warning alert-dismissible fade show d-none" id="error2" role="alert">Please agree to the terms and conditions.<button type="button" class="btn-close bg-transparent btn-outline-secondary p-2 m-1" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      document.getElementById('error2').classList.remove('d-none');
   
    }
    
});
// login js 
login.addEventListener('click',()=>{
  console.log('function running')
   const email = document.getElementById('exampleInputusername').value;
   const password= document.getElementById('exampleInputPassword1').value;
   signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     // Signed in 
     const user = userCredential.user;
      // ...kjkl,;;kum['o,m]
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
      if(errorMessage=="Firebase: Error (auth/user-not-found)."){
     document.getElementById('alerting3').innerHTML =' <div class="alert alert-warning alert-dismissible fade show d-none" id="error3" role="alert">User not found.<button type="button" class="btn-close bg-transparent btn-outline-secondary p-2 m-1" data-bs-dismiss="alert" aria-label="Close"></button></div>'
     document.getElementById('error3').classList.remove('d-none');}
  
     if(errorMessage=="Firebase: Error (auth/wrong-password)."){
     document.getElementById('alerting3').innerHTML =' <div class="alert alert-warning alert-dismissible fade show d-none" id="error3" role="alert">Wrong password.<button type="button" class="btn-close bg-transparent btn-outline-secondary p-2 m-1" data-bs-dismiss="alert" aria-label="Close"></button></div>'
     document.getElementById('error3').classList.remove('d-none');}
  
   });
});
googlesignin.addEventListener('click',()=>{
  signInWithPopup(auth, provider1)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
     const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})
facebooksignin.addEventListener('click',()=>{
  signInWithPopup(auth, provider2)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });

})
googlesignin1.addEventListener('click',()=>{
  signInWithPopup(auth, provider1)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
     const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})
facebooksignin1.addEventListener('click',()=>{
  signInWithPopup(auth, provider2)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });

})
googlesignin2.addEventListener('click',()=>{
  signInWithPopup(auth, provider1)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
     const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})
facebooksignin2.addEventListener('click',()=>{
  signInWithPopup(auth, provider2)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });

})
forgot.addEventListener('click',()=>{
  
  const email = document.getElementById('exampleInputusername').value;
 if(email==""){
  document.getElementById('alerting3').innerHTML=`<div class="alert alert-warning alert-dismissible fade show" id='error3' role="alert">
  Please fill in your appropriate e-mail id to forgot password.
  <button type="button" class="btn-close bg-transparent btn-outline-secondary p-2 m-1"
    data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;
 }
   sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
    document.getElementById('alerting3').innerHTML=`<div class="alert alert-success alert-dismissible fade show" id='error3' role="alert">
    Email sent! To genrate a new password click on the link sent in the email.
    <button type="button" class="btn-close bg-transparent btn-outline-secondary p-2 m-1"
      data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  `;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message);
    if(error.message=='Firebase: Error (auth/user-not-found).'){
      document.getElementById('alerting3').innerHTML=`<div class="alert alert-warning alert-dismissible fade show" id='error3' role="alert">
      User not found.
      <button type="button" class="btn-close bg-transparent btn-outline-secondary p-2 m-1"
        data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;
    }
    else{
      document.getElementById('alerting3').innerHTML=`<div class="alert alert-danger alert-dismissible fade show" id='error3' role="alert">
      Invalid E-mail.
      <button type="button" class="btn-close bg-transparent btn-outline-secondary p-2 m-1"
        data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;
    }
    // ..
  });
});