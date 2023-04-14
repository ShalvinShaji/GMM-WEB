function send() {
    checkEmptyMessage()
  }
  
  function checkEmptyMessage() {
    var message = document.getElementById("message").value;
    
    if (message.trim() == "") {
      // alert("Please enter a message before sending.");
      return false;
    }
    else{
      addMsg(message);
  
    }
    
    // Code to send message
  }
  
  
  function addMsg(msg) {
    createElement(msg);
  
    setTimeout(() => {
      addResponseMsg(msg);
    }, 1000)
    
  }
  
  function createElement(msg) {
  
  
    if (!msg.trim()) {
      return;
    }
  
  
    var div = document.createElement("div");
    div.innerHTML =
      "<span style='flex-grow:1'></span><div class='chat-message-sent'>" +
      msg +
      "</div>";
    div.className = "chat-message-div";
    document.getElementById("message-box").appendChild(div);
    //SEND MESSAGE TO API
    document.getElementById("message").value = "";
    document.getElementById("message-box").scrollTop =
      document.getElementById("message-box").scrollHeight;
  }
  
  function createBotResponseElement(msg) {
    if (!msg.trim()) {
      return;
    }
  
    var div = document.createElement("div");
    div.innerHTML = "<div class='chat-message-received'>" + msg + "</div>";
    div.className = "chat-message-div";
    document.getElementById("message-box").appendChild(div);
    document.getElementById("message-box").scrollTop =
      document.getElementById("message-box").scrollHeight;
  }


  function searchWord(str, word) {
    return str.indexOf(word) !== -1;
  }
  

  
  
  
  function addResponseMsg(msg) {
    
    let input = cleanInput(msg);

 
     
  
    if (searchWord(input, "hi")|| searchWord(input,"hello")) {
      return getHello();
    } else if (searchWord(input, "bye") || searchWord(input,"see you")) {
      return getGoodbye(input);
    // } else if ( searchWord(input, "op") || searchWord(input, "time")|| input == "visiting hours" ){   
    //   return getOpTime(input);
    } else if (searchWord(input, "appointment")) {
      return getAppointment(input);
    } else if (searchWord(input, "departments")||searchWord(input, "specialities")) {
      return getDepartments(input);
    } else if (searchWord(input, "thank")||searchWord(input, "ok")) {
      return getThankyou(input);
    } else if (searchWord(input, "sorry")||searchWord(input, "don't know")) {
      return getReplySorry(input);
    } else if (searchWord(input, "wrong")) {
      return getReplyWrong(input);
  
    } else {
      return getNoAnswer(input);
    }
  }
  
  
  
   const getHello=()=>{
      let answer ="Hi"
      createBotResponseElement(answer)
   }

   const getReplyWrong =()=>{
    let answer= "I'am sorry.";
    createBotResponseElement(answer);
   }

   const getOpTime =()=>{
    let answer= "Op timing is 9AM t0 6";
    createBotResponseElement(answer);
   }
   
  function getGoodbye() {
    let answer= "Nice talking to you!";
    
    createBotResponseElement(answer);
  }
  function getReplySorry() {
    let answer= "That's ok";
    
    createBotResponseElement(answer);
  }
  
  function getAppointment(){
    let answer = "Please book your appointment by calling this number 0469-2782262"
    createBotResponseElement( answer);
  
  }
  
  function getNoAnswer(){
    let answer = "Sorry, please try again."
    createBotResponseElement(answer)
    
  }
  function getDepartments(){
    let answer ="Our departments are: General medice, Cardilogy, Pediatrics, Orthopedics, Nephrology, ENT, Emergency medicine and Home care and palliative care."
      createBotResponseElement(answer);
  }
  
  function getThankyou(){
    let answer="you're welcome"
    createBotResponseElement(answer)
  }
  
  
  
  function cleanInput(msg) {
    // - Change all characters in lowercase
    // - Remove '?'
    // - Replace multiple spaces with one space
    // - Remove trailing space
    return msg.toLowerCase().replace("?", "").replace(/  +/g, ' ').trim();
  }
  
  // Set a flag variable to keep track of whether the welcome message has been displayed
  let welcomeMessageDisplayed = false;
  
  // Function to display the welcome message
  function displayWelcomeMessage() {
    let answer ="Hi I'am Dr. Bobo. How can i help you?."
    createBotResponseElement(answer)
    
    // Set the flag variable to true
    welcomeMessageDisplayed = true;
  }
  
  // Check if the welcome message has already been displayed
  if (!welcomeMessageDisplayed) {
    displayWelcomeMessage();
  }
  
  
  
  $("#message").keypress(function (e) {
    if (e.which == 13) {
      send();
    }
  });
  document.getElementById("chatbot_toggle").onclick = function () {
    if (document.getElementById("chatbot").classList.contains("collapsed")) {
      document.getElementById("chatbot").classList.remove("collapsed");
      document.getElementById("chatbot_toggle").children[0].style.display =
        "none";
      document.getElementById("chatbot_toggle").children[1].style.display = "";
      // setTimeout(addResponseMsg, 1000, "Hi");
    } else {
      document.getElementById("chatbot").classList.add("collapsed");
      document.getElementById("chatbot_toggle").children[0].style.display = "";
      document.getElementById("chatbot_toggle").children[1].style.display =
        "none";
    }
  };
  