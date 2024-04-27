var initDot = document.getElementById("loading");
var loading = setInterval(function() {
    if(initDot.innerHTML.length == 5) {
        initDot.innerHTML = "";
    } else {
        initDot.innerHTML += ".";
    }
}, 350); // Dot Speed

var $loadingMessage = $('#loadingH1');
 
setTimeout(function() {
      clearInterval(loading);
      $loadingMessage.hide();
   }, 1500);




var initProgram = setTimeout(function(){
    var greeting = "WELCOME TO MY PORTFOLIO";
    var message = "INITIATING CV REVIEW PROTOCOL FOR HENRIK ABGARYAN";
    var $identityDiv = $("#identity-results");
    var $name = "NAME: Henrik Abgaryan";
    var $alias = "OCCUPATION: PHD Student at LAMSADE, Université Paris-Dauphine PSL"
    var $occupation  = "THESIS TOPIC: Graph Transformers, Deep Reinforcement Learning and Combinatorial Optimization";
    var $supervisor = "SUPERVISOR: Tristan Cazenave, Ararat Harutyunyan at LAMSADE, Université Paris-Dauphine PSL";

    var $frontEnd  = "EDUCATION:";
      var $JSFrameworks = "2017 - 2021: BACHELOR OF COMPUTER SCIENCE AMERICAN UNIVERSITY OF ARMENIA";
      var $JSLibs = " Capstone: Graph Diameter Shrinking Approaches for Pseudo-Random Graphs";
      var $CSSFrameworks = "2022 - 2023: MASTERS OF COMPUTER SCIENCE M2 IASD, Université Paris-Dauphine PSL";
      var $CSSPre = "Internship: Optimization and Fine Tuning of Large Text to Image models";
      var $frontEndAnimation = "";
    var $cmsDevelopment = "WORK EXPERIANCE";
      var $wordpress = "PICSART: MACHINE LEARNING SCIENTIST AT ARTIFICIAL INTELLIGENCE DEPARTMENT";
    var $design = "2024 PUBLICATIONS: Randomized Greedy Sampling for JSSP";
      var $webDesign = "ABSTRACT: The job shop scheduling problem (JSSP) is a fundamental challenge in the field of operations research and manufacturing, representing the task of optimally assigning a set of jobs to a limited number of machines to optimize one or more objectives, such as minimizing the total processing time or reducing the delay of jobs. In recent years, AI-driven methods have introduced new approaches to solving the JSSP. Continuous exploration in deep reinforcement learning (DRL) is currently concentrated on refining strategies to address the JSSP. Established DRL techniques mostly focus on better modeling and training of the Policy networks for solving JSSP problems. This paper explores the utilization of Policy networks in search algorithms. We propose two novel algorithms, Random Second Greedy Choice (RSGC) and Greedy Sampling (GS). RSGC and GS employ a randomized approach to consider alternative paths, deviating from the primary heuristic, while adjusting the probability of selecting these paths dynamically during the search process. Through experimentation, we show the effectiveness of the proposed algorithms in comparison to the usual greedy first choice inference technique and the usual sampling method.";
      var $branding = "☕☕☕";
      var $designAnimation = "THATS IT FOR NOW...";
   
   function playTypingSound() {
         var sound = document.getElementById('typingSound');
         sound.play();
      }

   
   // playTypingSound()

   function scrollToBottom() {
      window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
      });
  }

   function initIdentityResults(i){
       $("#message").addClass("sign cursor").text(message.substring(0, i));
         if(i < message.length){
             setTimeout(function(){
                 initIdentityResults(i + 1);
             }, 20);   
         }else{
            $('#message').removeClass("cursor");
            var loadingResume = function(){
                  $("#loadingMessage2").show()
                  var dotAlpha = document.getElementById("alpha-loading");
                  var loadingAlpha = setInterval(function() {
                   if(dotAlpha.innerHTML.length == 6) {
                       dotAlpha.innerHTML = "";
                   } else {
                       dotAlpha.innerHTML += ".";
                       setTimeout(function() {
                           clearInterval(loadingAlpha);
                           $("#loadingMessage2").hide();
                        }, 2000);
                   }
               }, 350);  // Dot Speed
            }
            loadingResume();
            function initName(i){
               $("#name").addClass("sign cursor").text($name.substring(0, i));
                  if(i < $name.length){
                     setTimeout(function(){
                        initName(i + 1);   
                     }, 20);
                  }else{
                     $("#name").removeClass("cursor");
                     setTimeout(function() {
                        initAlias(0);
                     }, 1500);      
                  }
            }
            setTimeout(function() {
               initName(0);
            }, 2500);
         }
         function initAlias(i){
               $("#alias").addClass("sign cursor").text($alias.substring(0, i));
                  if(i < $alias.length){
                     setTimeout(function(){
                        initAlias(i + 1);   
                     }, 20);
                  }else{
                     $("#alias").removeClass("cursor");
                     setTimeout(function() {
                        initOccupation(0);
                     }, 1500);
                  }
         }
         function initOccupation(i){
            $("#occupation").addClass("sign cursor").text($occupation.substring(0, i));
                  if(i < $occupation.length){
                     setTimeout(function(){
                        initOccupation(i + 1);   
                     }, 20);
                  }else{
                     $("#occupation").removeClass("cursor");
                     setTimeout(function() {
                        initFrontEnd(0);
                     }, 1500);
                  }
         }


         function initSupervisor(i){
            $('#supervisor').addClass("sign cursor").text($supervisor.substring(0, i));
            if(i < $supervisor.length){
                setTimeout(function(){
                    initSupervisor(i + 1);  
                }, 20);
            } else {
                $('#supervisor').removeClass("cursor");
                setTimeout(function() {
                    initFrontEnd(0);  // Change to the next function you want to execute
                }, 1500);
            }
        }
        function initOccupation(i){
         $("#occupation").addClass("sign cursor").text($occupation.substring(0, i));
         if(i < $occupation.length){
             setTimeout(function(){
                 initOccupation(i + 1);   
             }, 20);
         } else {
             $("#occupation").removeClass("cursor");
             setTimeout(function() {
                 initSupervisor(0);  // Update to call initSupervisor next
             }, 1500);
         }
         }
     

         function initFrontEnd(i){
            $('#front-end-span').addClass('fa fa-graduation-cap');
            $('#front-end').addClass("cursor").text($frontEnd.substring(0, i));
               if(i < $frontEnd.length){
                  setTimeout(function(){
                     initFrontEnd(i + 1);  
                  }, 20);
               }else{
                  $('#front-end').removeClass("cursor");
                     setTimeout(function() {
                        initJSFrameworks(0);
                     }, 1500);
               }
         }
         function initJSFrameworks(i){
            $('#js-frameworks').addClass("sign cursor").text($JSFrameworks.substring(0, i));
               if(i < $JSFrameworks.length){
                  setTimeout(function(){
                      initJSFrameworks(i + 1);  
                  }, 20);
               }else{
                  $('#js-frameworks').removeClass("cursor");
                     setTimeout(function() {
                        initJSLibs(0);
                     }, 1500);
               }
         }
         function initJSLibs(i){
            $('#js-libs').addClass("sign cursor").text($JSLibs.substring(0, i));
               if(i < $JSLibs.length){
                  setTimeout(function(){
                      initJSLibs(i + 1);  
                  }, 20);
               }else{
                  $('#js-libs').removeClass("cursor");
                     setTimeout(function() {
                        initCSSFrameworks(0);
                     }, 1500);
               }
         }
         function initCSSFrameworks(i){
            $('#css-frameworks').addClass("sign cursor").text($CSSFrameworks.substring(0, i));
               if(i < $CSSFrameworks.length){
                  setTimeout(function(){
                      initCSSFrameworks(i + 1);  
                  }, 20);
               }else{
                  $('#css-frameworks').removeClass("cursor");
                  setTimeout(function() {
                        initCSSPre(0);
                     }, 1500);
               }
         }
          function initCSSPre(i){
            $('#css-pre').addClass("sign cursor").text($CSSPre.substring(0, i));
               if(i < $CSSPre.length){
                  setTimeout(function(){
                      initCSSPre(i + 1);  
                  }, 20);
               }else{
                  $('#css-pre').removeClass("cursor");
                  setTimeout(function() {
                        initFrontEndAnimation(0);
                     }, 1500);
               }
         }
         function initFrontEndAnimation(i){
            $('#front-end-animation').addClass("sign cursor").text($frontEndAnimation.substring(0, i));
               if(i < $frontEndAnimation.length){
                  setTimeout(function(){
                      initFrontEndAnimation(i + 1);  
                  }, 20);
               }else{
                  $('#front-end-animation').removeClass("cursor");
                  setTimeout(function() {
                        initCMSDevelopment(0);
                     }, 1500);
               }
         }
         function initCMSDevelopment(i){
            $('#cms-span').addClass("fa fa-briefcase")
            $('#CMS-development').addClass("cursor").text($cmsDevelopment.substring(0, i));
               if(i < $cmsDevelopment.length){
                  setTimeout(function(){
                      initCMSDevelopment(i + 1);  
                  }, 20);
               }else{
                  $('#CMS-development').removeClass("cursor");
                  setTimeout(function() {
                        initWordpress(0);
                     }, 1500);
               }
         }
         function initWordpress(i){
            $('#wordpress').addClass("sign cursor").text($wordpress.substring(0, i));
               if(i < $wordpress.length){
                  setTimeout(function(){
                      initWordpress(i + 1);  
                  }, 20);
               }else{
                  $('#wordpress').removeClass("cursor");
                  setTimeout(function() {
                        initDesign(0);
                     }, 1500);
               }
         }
          function initDesign(i){
            $('#design-span').addClass('fa fa-newspaper');
            $('#design').addClass("cursor").text($design.substring(0, i));
               if(i < $design.length){
                  setTimeout(function(){
                      initDesign(i + 1);  
                  }, 20);
               }else{
                  $('#design').removeClass("cursor");
                  setTimeout(function() {
                        initWebDesign(0);
                     }, 1500);
               }
         }
         function initWebDesign(i){
            $('#web-design').addClass("sign cursor").text($webDesign.substring(0, i));
               if(i < $webDesign.length){
                  setTimeout(function(){
                      initWebDesign(i + 1);  
                  }, 20);
               }else{
                  $('#web-design').removeClass("cursor");
                  setTimeout(function() {
                        initBranding(0);
                     }, 1500);
               }
         }
         function initBranding(i){
            $('#branding').addClass("sign cursor").text($branding.substring(0, i));
               if(i < $branding.length){
                  setTimeout(function(){
                      initBranding(i + 1);  
                  }, 20);
               }else{
                  $('#branding').removeClass("cursor");
                  setTimeout(function() {
                        initDesignAnimation(0);
                     }, 1500);
               }
         }
         function initDesignAnimation(i){
            $('#design-animation').addClass("sign cursor").text($designAnimation.substring(0, i));
               if(i < $designAnimation.length){
                  setTimeout(function(){
                      initDesignAnimation(i + 1);  
                  }, 20);
               }else{
                  //$('#design-animation').removeClass("cursor");
               }
         }
      }
   
   // function scrollToBottom() {
   //       window.scrollTo({
   //           top: document.body.scrollHeight,
   //           behavior: 'smooth' // Enables smooth scrolling
   //       });
   //   }
     
   //   // Call this function at strategic points in your script, like after adding content
   //   scrollToBottom();
   
   
  
   function initProgramAlpha(i){
       $("#greeting").addClass("cursor").text(greeting.substring(0, i));
         if(i < greeting.length){
             setTimeout(function(){
                 initProgramAlpha(i + 1);
             }, 20);   
         }else{
            $("#greeting").removeClass("cursor");
            initIdentityResults(0);
         }
      }
      initProgramAlpha(0)
   



   // Your existing JavaScript code here...

// Define a variable to track whether the user is scrolling
var isUserScrolling = false;

// Function to handle scroll events
function handleScroll() {
    isUserScrolling = true;
    // Stop observing mutations temporarily
    observer.disconnect();
    
    // Set a timeout to resume observing after a short delay
    setTimeout(function() {
        isUserScrolling = false;
        observer.observe(document.body, config);
    }, 500); // Adjust the delay as needed
}

// Add event listener for scroll events
window.addEventListener('scroll', handleScroll);

// Define the observer
var observer = new MutationObserver(function(mutations) {
    if (!isUserScrolling) {
        mutations.forEach(function(mutation) {
            scrollToBottom();
        });
    }
});

// Configuration for the observer
var config = { attributes: true, childList: true, characterData: true, subtree: true };

// Start observing the document body for mutations
observer.observe(document.body, config);


   

}, 1500);




initProgram()


