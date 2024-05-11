  
  const loginPopup = document.querySelector(".login-popup");
  const close = document.querySelector(".close");


  close.addEventListener("click",function(event){
    // loginPopup.classList.remove("show");
    if(window.location.pathname === "/Log-In"){
      history.back();
    }
     
    }
  )
