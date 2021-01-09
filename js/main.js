/* application area -- based on native javascript  */

//nav bar smooth showing when scrolled down to the half page of home
window.onscroll = function() {navBarShowing()};

//documentElement.addEventListener("scroll", navBarShowing());



//nav bar smooth scrolling to location
smoothNav("desktop--nav");

//arrow nav
//document.getElementById("down--arrow").onclick = function() {downArrowClicking()};
document.getElementById("down--arrow").addEventListener("click", downArrowClicking);

//mobile nav
document.getElementById("nav--mobile--icon").addEventListener("click", openMobileNavBar);
//smoothNav("mobile--nav");


//for test!
showingLogoInfo();

//animatingBlocks("edu--utas");
//animatingBlocks("edu--ys");
//animatingBlocks("edu--bh");






/* function methods area */
function navBarShowing () {

    if (document.documentElement.scrollTop > 400 ) {
        document.getElementById("nav--showing").classList.add("sticky--to--top");        
      } else {
        document.getElementById("nav--showing").classList.remove("sticky--to--top");
      }
}

function smoothNav(className){
  var navElement = document.getElementsByClassName(className);

  var headerOffset = 80;

  for(var i=0; i<navElement.length; i++){
  
    switch (i) {
      
      case 0:
        navElement[i].addEventListener("click", function(){  
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        });
        break;
  
      case 1:
        navElement[i].addEventListener("click", function(){
          scrollToPosition('about', headerOffset);
        });
        break;
      case 2:
        navElement[i].addEventListener("click", function(){
          scrollToPosition('resume', headerOffset);
        });
      break;
  
      case 3:
        navElement[i].addEventListener("click", function(){
          scrollToPosition('services', headerOffset);
        });
        break;
  
      case 4:
        navElement[i].addEventListener("click", function(){
          scrollToPosition('blog', headerOffset);
        });
        break;
  
      case 5:
        navElement[i].addEventListener("click", function(){
          scrollToPosition('contact', headerOffset);
        });
        break;
      default:
        break;
    }
  }
}

function downArrowClicking(){
  var headerOffset = 80;
  scrollToPosition('about', headerOffset);
}


function scrollToPosition(elmnt, offset){
  var element = document.getElementById(elmnt);
  var elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({
      top: elementPosition,
      behavior: "smooth"
  });
}


function openMobileNavBar(){
  document.getElementById("nav--bar--display").style.height = "220px";
  closeMobileNavBar(); //close mobile menu if clicked ono option
}

function closeMobileNavBar(){

  var mobileMenuLists = document.getElementsByClassName("mobile--nav");

  for(var i=0; i<mobileMenuLists.length; i++){

    mobileMenuLists[i].addEventListener("click", function(){
      document.getElementById("nav--bar--display").style.height = "0";
    });
  }
  smoothNav("mobile--nav");
}



//scroll to an element and showing with animation 

function animatingBlocks(elmnt){


  document.addEventListener("scroll", function(){

    var result = isInViewport(elmnt);
    if(result === true){
      //alert("scrolled!!!");
      //document.getElementById(elmnt).style.backgroundColor = "black";
      document.getElementById(elmnt).style.width = "49%";
    }
    else{
      document.getElementById(elmnt).style.width = "0";
    }

  });

}

function isInViewport(el) {
  
  var elmnt = document.getElementById(el);
  var rect = elmnt.getBoundingClientRect();
  return (
      rect.top >=0 && 
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}



function showingLogoInfo(){
  var logoElement = document.getElementsByClassName("company--logo");

  for(var i=0; i<logoElement.length; i++){
  
    switch (i) {
      
      case 0:
        logoElement[i].addEventListener("mouseenter", function(){  
          document.getElementById("workplace--info").style.width= "100%";
          document.getElementById("workplace--info").innerHTML= "University of Tasmania <br>Academic Tutor on C# Development";
          document.getElementById("workplace--info").style.overflow= "visible";
        });

        logoElement[i].addEventListener("mouseleave", function(){
          document.getElementById("workplace--info").innerHTML= "";
          document.getElementById("workplace--info").style.width= "0";
          document.getElementById("workplace--info").style.overflow= "hidden";
        });

        break;
  
      case 1:
        logoElement[i].addEventListener("mouseenter", function(){  
          document.getElementById("workplace--info").style.width= "100%";
          document.getElementById("workplace--info").innerHTML= "Chinese Academy of Sciences: <br>System Developing Engineer on multiple Projects ";
          document.getElementById("workplace--info").style.overflow= "visible";
        });

        logoElement[i].addEventListener("mouseleave", function(){
          document.getElementById("workplace--info").innerHTML= "";
          document.getElementById("workplace--info").style.width= "0";
          document.getElementById("workplace--info").style.overflow= "hidden";
        });
        break;
      case 2:
        logoElement[i].addEventListener("mouseenter", function(){  
          
          document.getElementById("workplace--info").style.width= "100%";
          document.getElementById("workplace--info").innerHTML= "Beihang University <br> Professor's Assistant on Vxworks Control Systems";
          document.getElementById("workplace--info").style.overflow= "visible";
        });
        logoElement[i].addEventListener("mouseleave", function(){
          document.getElementById("workplace--info").innerHTML= "";
          document.getElementById("workplace--info").style.width= "0";
          document.getElementById("workplace--info").style.overflow= "hidden";
        });
      break;
  
      case 3:
        logoElement[i].addEventListener("mouseenter", function(){  
          document.getElementById("workplace--info").style.width= "100%";
          document.getElementById("workplace--info").innerHTML= "Datang Telcom Group <br>Embedded Software Engineer on multiple Products";
          document.getElementById("workplace--info").style.overflow= "visible";
        });

        logoElement[i].addEventListener("mouseleave", function(){
          document.getElementById("workplace--info").innerHTML= "";
          document.getElementById("workplace--info").style.width= "0";
          document.getElementById("workplace--info").style.overflow= "hidden";
        });
        break;
  
      case 4:
        logoElement[i].addEventListener("mouseenter", function(){  
          document.getElementById("university--info").style.width= "100%";
          document.getElementById("university--info").innerHTML= "University of Tasmania <br>Information Technology and Systems";
          document.getElementById("university--info").style.overflow= "visible";
        });
        logoElement[i].addEventListener("mouseleave", function(){
          document.getElementById("university--info").innerHTML= "";
          document.getElementById("university--info").style.width= "0";
          document.getElementById("university--info").style.overflow= "hidden";
        });
        break;
  
      case 5:
        logoElement[i].addEventListener("mouseenter", function(){  
          document.getElementById("university--info").style.width= "100%";
          document.getElementById("university--info").innerHTML= "Beihang University <br>Computer Science and Engineering";
          document.getElementById("university--info").style.overflow= "visible";
        });
        logoElement[i].addEventListener("mouseleave", function(){
          document.getElementById("university--info").innerHTML= "";
          document.getElementById("university--info").style.width= "0";
          document.getElementById("university--info").style.overflow= "hidden";
        });
        break;
      case 6:
        logoElement[i].addEventListener("mouseenter", function(){  
          document.getElementById("university--info").style.width= "100%";
          document.getElementById("university--info").innerHTML= "Yanshan University <br>Communications Engineering";
          document.getElementById("university--info").style.overflow= "visible";
        });
        logoElement[i].addEventListener("mouseleave", function(){
          document.getElementById("university--info").innerHTML= "";
          document.getElementById("university--info").style.width= "0";
          document.getElementById("university--info").style.overflow= "hidden";
        });
        break;

      default:
        break;
    }
  }
}


  

  










