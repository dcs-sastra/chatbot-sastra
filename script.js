$(function() {
  var INDEX = 0; 
  $("#chat-submit").click(function(e) {
    e.preventDefault();
    var msg = $("#chat-input").val(); 
    if(msg.trim() == ''){
      return false;
    }
    generate_message(msg, 'self');
    var buttons = [
        {
          name: 'Existing User',
          value: 'existing'
        },
        {
          name: 'New User',
          value: 'new'
        }
      ];
    setTimeout(function() {      
      generate_message(msg, 'user');  
    }, 1000)
    
  })
  
  function generate_message(msg, type) {
    INDEX++;
    var str="";
    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
    str += "          <span class=\"msg-avatar\">";
    if(type == 'user'){
    str += "            <img src=\".\/Images\/saslogo.png\">";}
    if(type == 'self'){
    str += "            <img src=\".\/Images\/user.png\">";}
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    if(type == 'self'){
      str += msg;
    }
   
    if(type == 'user'){
      msg = msg.toLowerCase();
      var quesArr = msg.split(" ");
      if(msg == 'first' && INDEX == 1){
        str += "Hello, I'm Sastra's helping bot! How can I help you?";}
      else if(quesArr.includes("admission") || quesArr.includes("admissions") || quesArr.includes("admitted")){
        str += "Stream 1 – JEE-Main Score & Class XII Score : ,br.Admission to 50% of seats shall be based on normalised aggregate Class XII Scores and available JEE Main (2020/2021) scores taken together with 50% weightage each. Seats shall be filled based on the Ranks Secured by student.";
        str += "<br>Stream 2 – Class XII Score : <br>Remaining 50% of seats shall be based on the normalised aggregate Class XII score awarded by the respective boards. Rank list shall be prepared based on this aggregate score and admissions shall be made based on the rank secured.";}
      else if(quesArr.includes("academics") || quesArr.includes("academic")){
        str += "SASTRA follows choice-based credit system, where students are free to choose their courses and faculty. "; 
        str += "Our Curriculum gets revamped from time to time through feedbacks from students, industry and government. Teaching at SASTRA is not just filling the students with information through a transmittive process. The students are transformed into active learners through the mechanics of learning. ";
        str += "Students are encouraged to carry out mini-projects and participate in national level technical design competitions.";}
      else if(quesArr.includes("hostel") || quesArr.includes("hostels")){
        str += "There are nine hostels for boys and five for girls. First year B. Tech. students will be provided shared accommodation."; 
        str += "<br>The charges for food will be at actual based on dividing system and will approximately be around Rs 3,000 per month. You can assume that you will stay for 10 months in a calendar year. Single room, Two-in-one, Three-in-one and Four-in-one (with or w/o bath attached facilities) will be available from second year onwards. The annual rent will vary depending on the room type.";}
      else if(quesArr.includes("bus") || quesArr.includes("buses")){
        str += "There are bus facilities from Trichy and Tanjore.";}
      else if(quesArr.includes("fee") || quesArr.includes("fees")){
        str += "The fees structure has been provided in the website. <a href=\"https:\/\/sastra.edu\/admissions\/tuition-fees.html\">Click here</a> to visit";}
      else if(quesArr.includes("sastra")){
        str += "SASTRA is one of India’s premier institutions offering undergraduate, postgraduate & doctoral programmes in Engineering, Management, Law, Sciences, Humanities and Education. It was conferred Deemed-to-be-University status in 2001 by the University Grants Commission under Section 3 of the UGC Act 1956.";}
      else{
        str += "Sorry, I can't find what you are searching for. Try with some other keywords."}
    }
    
    str += "          <\/div>";
    str += "        <\/div>";

    if(msg == 'first' && INDEX == 1){      // To display the welcome message 
    $(".chat-logs").append(str);}
    else if(msg != 'first' && INDEX > 1){  // To avoid displaying the welcome message again
    $(".chat-logs").append(str);}
    
    $("#cm-msg-"+INDEX).hide().fadeIn(300);
    if(type == 'self'){
     $("#chat-input").val(''); 
    }    
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000); }
  
  
  
  
  
  
  $(document).delegate(".chat-btn", "click", function() {
    var value = $(this).attr("chat-value");
    var name = $(this).html();
    $("#chat-input").attr("disabled", false);
    generate_message(name, 'self');
  })
  
  $("#chat-circle").click(function() {    
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
    generate_message('first', 'user');
  })
  
  $(".chat-box-toggle").click(function() {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
})
