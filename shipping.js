








//============================order id===============================
function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}
var OrderId = document.querySelector('.order_id')
function generateID(length) {
    let text = "Order ID" + " :- " + "#"
    const possible = "0123456789"
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

OrderId.innerText = generateID(7)
//============================order id===============================







//==================================total price================================

var totalPrice = localStorage.getItem('totalPrice');

document.getElementById('total_price').innerHTML = `&#8377;${totalPrice}`;

var tax = totalPrice * 12 / 100;
document.getElementById('tax').innerHTML = "12\%";

var Shipping = 50;
document.getElementById('Shipping').innerHTML = '&#8377;' + Shipping;
localStorage.setItem("Shippping", Shipping )

var TotalPayable = Math.round( Number(totalPrice) + Number(Shipping) + Number(tax));
document.getElementById('TotalPayable').innerHTML = '&#8377;' +  TotalPayable;

localStorage.setItem("Total Payable", TotalPayable)
//=================total price================================






//=========================================discount code======================================================================================
var discountCode = document.getElementById('discount_code1');
localStorage.setItem("code", "NO CODE USE")

const discount_code = () => {
    // let totalamtcurr = parseInt(TotalPayable);
    var error_trw = document.getElementById('error_trw');
    //----------------first-code------------------------------
    if (discountCode.value === 'TRANDYCLOTHES50') {
        var totalPayable = Number(totalPrice) + Number(Shipping) + Number(tax) - 50;

        document.getElementById('TotalPayable').innerHTML = totalPayable;
        error_trw.innerHTML = "<i style='color: #77CF50;'><small> Hurray!  code is valid , 50rs off in your deal</small></i> ";
    localStorage.setItem("code", discountCode.value)
    localStorage.setItem("Total Payable", totalPayable)
    localStorage.setItem("Shippping", Shipping )

    }
    //---------------second-code------------------------------
    else if (discountCode.value === 'TRANDYCLOTHES100') {
        var totalPayable = Number(totalPrice) + Number(Shipping) + Number(tax) - 100;

        document.getElementById('TotalPayable').innerHTML = totalPayable;
        error_trw.innerHTML = "<i style='color: #77CF50;'> <small> Hurray!  code is valid , 100rs off in your deal</small></i> ";
    localStorage.setItem("code", discountCode.value)
    localStorage.setItem("Total Payable", totalPayable)
    localStorage.setItem("Shippping", Shipping )


    }
    //-----------------Third-code-----------------------------

    else if (discountCode.value === 'TCFREESHIPPING') {
        var totalPayable = Number(totalPrice) + Number(Shipping) + Number(tax) - 50;

        document.getElementById('TotalPayable').innerHTML = totalPayable;
        error_trw.innerHTML = "<i style='color: #77CF50;'><small> Hurray!  code is valid , Enjoy Free Shipping</small></i> ";
        document.getElementById('Shipping').innerHTML = '&#8377;' + 0;
    localStorage.setItem("code", discountCode.value)
localStorage.setItem("Total Payable", totalPayable)
localStorage.setItem("Shippping", "0")


    }

    //---------------enter-new-code-----------------------------
    else {
        error_trw.innerHTML = "<i style='color: #ff7a7a;'><small>Try Again! Enter Valid Code</small></i> ";
    localStorage.setItem("code", "NO CODE USE")
    localStorage.setItem("Total Payable", TotalPayable)
    localStorage.setItem("Shippping", Shipping )

    }
}
//============================================discount code===========================================================================
console.log(error_trw.innerText)







//===================date and time================================
var date = new Date();
var M = date.getMonth() + 1;
var D = date.getDate();
var Y = date.getFullYear();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var session = "AM";
if (h == 0) {
    h + 12;
}

if (h > 12) {
    h = h - 12;
    session = "PM";
}
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;
D = (D < 10) ? "0" + D : D;
M = (M < 10) ? "0" + M : M;

document.getElementById("time").innerHTML = h + ":" + m + ":" + s + ":" + session;
document.getElementById("date").innerHTML = `${D}-${M}-${Y}`;
console.log(h + ":" + m + ":" + s + ":" + session)
//===================date and time================================







//===================================cart========================
var pagal = localStorage.getItem('amit');
document.getElementById('produtName').innerHTML = pagal;

//===============================cart=================================


//=============================CAPTCHA=====================================
// (function(){
//   const fonts = ["cursive","sans-serif","serif","monospace"];
//   let captchaValue = "";
//   function generateCaptcha(){
//     let value = btoa(Math.random()*1000000000);
//     value = value.substr(0,5+Math.random()*5);
//     captchaValue = value;
//   }
//   function setCaptcha(){
//     let html = captchaValue.split("").map((char)=>{
//       const rotate = -20 + Math.trunc(Math.random()*30);
//       const font = Math.trunc(Math.random()*fonts.length);
//       return `<span 
//         style="
//           transform:rotate(${rotate}deg);
//           font-family:${fonts[font]}
//         "
//       >${char}</span>`;
//     }).join("");
//     document.querySelector(".login-form .captcha .preview").innerHTML = html;
//   }
//   function initCaptcha(){
//     document.querySelector(".login-form .captcha .captcha-refresh").addEventListener("click",function(){
//       generateCaptcha();
//       setCaptcha();
//     });
//     generateCaptcha();
//     setCaptcha();
//   }
//   initCaptcha();

// document.querySelector("#login-btn").addEventListener("click",function(){
//   let inputCaptchaValue = document.querySelector(".login-form .captcha input").value;
//   if(inputCaptchaValue === "amit"){
//     swal("", "Logging In!", "success");
//   } else {
//     swal("Invalid captcha");
//   }
// });
// })();
  
// })();


//=============================CAPTCHA=====================================
// document.querySelector("#login-btn").addEventListener("click",function(){

// })



//==========================================progress bar ( in display none)=============================================



// const prevBtns = document.querySelectorAll(".btn-prev");
// const nextBtns = document.querySelectorAll(".btn-next");
// const progress = document.getElementById("progress");
// const formSteps = document.querySelectorAll(".form-step");
// const progressSteps = document.querySelectorAll(".progress-step");

// let formStepsNum = 0;

// nextBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     formStepsNum++;
//     updateFormSteps();
//     updateProgressbar();
//   });
// });

// prevBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     formStepsNum--;
//     updateFormSteps();
//     updateProgressbar();
//   });
// });

// function updateFormSteps() {
//   formSteps.forEach((formStep) => {
//     formStep.classList.contains("form-step-active") &&
//       formStep.classList.remove("form-step-active");
//   });

//   formSteps[formStepsNum].classList.add("form-step-active");
// }

// function updateProgressbar() {
//   progressSteps.forEach((progressStep, idx) => {
//     if (idx < formStepsNum + 1) {
//       progressStep.classList.add("progress-step-active");
//     } else {
//       progressStep.classList.remove("progress-step-active");
//     }
//   });

//   const progressActive = document.querySelectorAll(".progress-step-active");

//   progress.style.width =
//     ((progressActive.length - 1) / (progressSteps.length - 1)) * 60 + "%";
// }




//====================================progress bar=======================================

// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {
//       if (!form.checkValidity()) {
//         event.preventDefault()
//         event.stopPropagation()
        
                                                                // let formStepsNum = 0;

                                                                // nextBtns.forEach((btn) => {
                                                                //   btn.addEventListener("click", () => {
                                                                //     formStepsNum++;
                                                                //     updateFormSteps();
                                                                //     updateProgressbar();
                                                                //   });
                                                                // });

                                                                // prevBtns.forEach((btn) => {
                                                                //   btn.addEventListener("click", () => {
                                                                //     formStepsNum--;
                                                                //     updateFormSteps();
                                                                //     updateProgressbar();
                                                                //   });
                                                                // });

                                                                // function updateFormSteps() {
                                                                //   formSteps.forEach((formStep) => {
                                                                //     formStep.classList.contains("form-step-active") &&
                                                                //       formStep.classList.remove("form-step-active");
                                                                //   });

                                                                //   formSteps[formStepsNum].classList.add("form-step-active");
                                                                // }

                                                                // function updateProgressbar() {
                                                                //   progressSteps.forEach((progressStep, idx) => {
                                                                //     if (idx < formStepsNum + 1) {
                                                                //       progressStep.classList.add("progress-step-active");
                                                                //     } else {
                                                                //       progressStep.classList.remove("progress-step-active");
                                                                //     }
                                                                //   });

                                                                //   const progressActive = document.querySelectorAll(".progress-step-active");

                                                                //   progress.style.width =
                                                                //     ((progressActive.length - 1) / (progressSteps.length - 1)) * 60 + "%";
                                                                // }

//       }

//       form.classList.add('was-validated')
//     }, false)
//   })
// })()


// let loginForm = document.getElementById("loginForm")
// let Name = document.getElementById("name")
// let email = document.getElementById("email")
// let phone = document.getElementById("phone")
// let pincode = document.getElementById("pincode")
// let Locality = document.getElementById("Locality")
// let LandmarkOptional = document.getElementById("Landmark(Optional)")
// let CityDistrictTown = document.getElementById("City/District/Town")
// let State = document.getElementById("State")
// let loginBtn = document.getElementById("login-btn")


// document.querySelector('#login-btn').addEventListener('click' , () => {
//   if (Name.value.langth > 0 &&
//     email.value.length > 0 &&
//     phone.value.length > 0 &&
//     pincode.value.length > 0 &&
//     Locality.value.length > 0 &&
//     LandmarkOptional.value.length > 0 && 
//     CityDistrictTown.value.length > 0 &&
//     State.value.length > 0
//       ){
//         swal({
//           closeOnClickOutside: false,
//           closeOnEsc: false,
//           title: "ORDER CONFIRMED",
//           text: "Your Order has been successfully placed",
//           icon: "success",
//           button: "Back To The Shopping"
//         }
//            )
      
        
//       } else {swal({
//         title: "ERROR",
//         text: "Fill All Required Fields!",
//         icon: "warning",
//         buttons: "OK",
        
//       })  
       
//       }
// });




function message(){
  
let Name = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let pincode = document.getElementById("pincode")
let Locality = document.getElementById("Locality")
let LandmarkOptional = document.getElementById("Landmark(Optional)")
let CityDistrictTown = document.getElementById("City/District/Town")
let State = document.getElementById("State")

  if(Name.value === '' || email.value === '' ||phone.value === '' || pincode.value === '' ||Locality.value === '' || CityDistrictTown.value === '' || State.value === '' ){
    swal({
      title: "ERROR",
      text: "Fill All Required Fields!",
      icon: "warning",
      buttons: "OK",
      
    })  
  }
  else{
      setTimeout(() => {
          Name.value = '';
          email.value = '';
          phone.value = '';
          pincode.value = '';
          Locality.value = '';
          LandmarkOptional.value = '';
          CityDistrictTown.value = '';
          State.value = '';
      }, 2000);

    
       
      swal({
        closeOnClickOutside: false,
        closeOnEsc: false,
        title: "ORDER CONFIRMED",
        text: "Your Order has been successfully placed",
        icon: "success",
        button: "Back To The Shopping"
      }
         ).then(
          function () {
                  window.location = 'index.html';
          }
    );
  }


}








