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
    } else if (searchWord(input, "cardiology")) {
      return getCardiologyDetails(input);
    } else if (searchWord(input, "general medicine")||searchWord(input, "generalmedicine")) {
      return getGeneralMedicineDetails(input);
    } else if (searchWord(input, "nephrology")) {
      return getNeprologyDetails(input);
    } else if (searchWord(input, "pediatrics")) {
      return getPediatricsDetails(input);
    } else if (searchWord(input, "orthopedics")) {
      return getOrthopedicsDetails(input);
    } else if (searchWord(input, "ent")) {
      return getEntDetails(input);
    } else if (searchWord(input, "emergency medicine")) {
      return getEmergencyMedicineDetails(input);
    } else if (searchWord(input, "palliative") ||searchWord(input, "home care")) {
      return getPalliativeCareDetails(input);
    } else if (searchWord(input, "wrong")) {
      return getReplyWrong(input);
  
    } else {
      return getNoAnswer(input);
    }
  }
  
  
  



   const getCardiologyDetails=()=>{
      let answer ="The department of cardiology diagonizes and provides treatment for disorders related to heart and cardiovascular system. We provide OPD based care for our patients."
      let docDetails="Our cardiologist is Dr Philipose John (MBBS, MD, DM)"
      let opTime =" OP Timing is Saturday 12.00PM – 1.00PM"
      createBotResponseElement(answer)
      setTimeout(() => {
        createBotResponseElement(docDetails);
      }, 1000)
      setTimeout(() => {
        createBotResponseElement(opTime);
      }, 2000)


   }
   const getGeneralMedicineDetails=()=>{
      let answer ="The department of general medicine deals with the prevention, diagnosis, and treatment of adult diseases. With experienced doctors in the field the department provides the best possible primary care."
      let docDetails1="Our Chief Physician is Dr N Damodaran (MBBS, MD) "
      let opTime1 =" OP Timing is Monday- Saturday 6.00 PM- 9.00 PM"
      let docDetails2="Our Physician is Dr K. A Chacko (MBBS, FCAMS)"
      let opTime2 =" OP Timing is Monday, Wednesday, Friday 9AM- 12.30PM"
      let docDetails3="Our Physician is Dr Binoy G Russel (MBBS, FCAMS) "
      let opTime3 =" OP Timing is Tuesday, Thursday 10AM- 1.00PM"

      createBotResponseElement(answer)
      setTimeout(() => {
        createBotResponseElement(docDetails1);
      }, 1000)
      setTimeout(() => {
        createBotResponseElement(opTime1);
      }, 2000)
      setTimeout(() => {
        createBotResponseElement(docDetails2);
      }, 3000)
      setTimeout(() => {
        createBotResponseElement(opTime2);
      }, 4000)
      setTimeout(() => {
        createBotResponseElement(docDetails3);
      }, 5000)
      setTimeout(() => {
        createBotResponseElement(opTime3);
      }, 6000)


   }
   const getNeprologyDetails=()=>{
    let answer =" The department provides OPD based medical to diseases related to kidney."
    let docDetails="Our Consultant Nephrologist is Dr Sneha Anna Joy (MBBS, MD, DM)"
    let opTime =" OP Timing is  1st & 3rd Saturday 11.00 AM- 12.00PM"
    createBotResponseElement(answer)
    setTimeout(() => {
      createBotResponseElement(docDetails);
    }, 1000)
    setTimeout(() => {
      createBotResponseElement(opTime);
    }, 2000)
   }

   const getPediatricsDetails=()=>{
    let answer ="The department provides medical care to the infants, children, adolescents, and young adults."
    let docDetails="Our Pediatrician is Dr Sunnychen Devasia (MBBS, DCH)"
    let opTime =" OP Timing is Monday- Saturday 11.30 AM- 1.00 PM"
    createBotResponseElement(answer)
    setTimeout(() => {
      createBotResponseElement(docDetails);
    }, 1000)
    setTimeout(() => {
      createBotResponseElement(opTime);
    }, 2000)
   }
   const getOrthopedicsDetails=()=>{
    let answer ="The department Provide medical care to issues related to musculoskeletal system and treating injuries to bones, joints, ligaments, or tendons."
    let docDetails="Our Orthopedic Surgeon is Dr Varkey S Kulangara (MBBS, MS, DNB, MRCS)"
    let opTime =" OP Timing is Monday, Tuesday, Thursday 5.30PM- 8.00PM"
    createBotResponseElement(answer)
    setTimeout(() => {
      createBotResponseElement(docDetails);
    }, 1000)
    setTimeout(() => {
      createBotResponseElement(opTime);
    }, 2000)
   }
   const getEntDetails=()=>{
    let answer ="The department provide treatment to diseases related to Ear, Nose, and Throat."
    let docDetails="Our ENT Surgeon is Dr Kiran Babu (MBBS, MS)"
    let opTime =" OP Timing is  Tuesday, Friday 4.00PM- 6.00PM"
    createBotResponseElement(answer)
    setTimeout(() => {
      createBotResponseElement(docDetails);
    }, 1000)
    setTimeout(() => {
      createBotResponseElement(opTime);
    }, 2000)
   }
   const getEmergencyMedicineDetails=()=>{
    let answer ="The department provide 24*7 emergency care to patients who need immediate care."
    let docDetails="Our Casualty Medical Officers are Dr Rohan Chacko Jacob (MBBS) and Dr Sara Jacob (MBBS)"
    createBotResponseElement(answer)
    setTimeout(() => {
      createBotResponseElement(docDetails);
    }, 1000)
   
   }
   const getPalliativeCareDetails=()=>{
    let answer ="The department provide treatment for  bedridden patients and others who cannot normally go to a hospital, and give medical care and support, with the help of a mobile clinic. Serious patients are referred to hospitals for further investigation and treatment.    "
    createBotResponseElement(answer)
   
   
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
    let answer2 = "For more queries please contact GMM Hospital. phone:0469-2782262"
    createBotResponseElement(answer)
    setTimeout(() => {
      createBotResponseElement(answer2);
    }, 1000)
    
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
  
