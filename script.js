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
   var data = [
    {
      "Keywords": "BTech Courses",
      "Response": "Please Visit Below Link to understand B.Tech Programs Handled by SASTRA.https://sastra.edu/admissions/undergraduate.html"
    },
    {
      "Keywords": "BTech Programs",
      "Response": "Please Visit Below Link to understand B.Tech Programs Handled by SASTRA.https://sastra.edu/admissions/undergraduate.html"
    },
    {
      "Keywords": "BTech",
      "Response": "Please Visit Below Link to understand B.Tech Programs Handled by SASTRA.https://sastra.edu/admissions/undergraduate.html"
    },
    {
      "Keywords": "B Tech",
      "Response": "Please Visit Below Link to understand B.Tech Programs Handled by SASTRA.https://sastra.edu/admissions/undergraduate.html"
    },
    {
      "Keywords": "Engineering",
      "Response": "Please Visit Below Link to understand B.Tech Programs Handled by SASTRA.https://sastra.edu/admissions/undergraduate.html"
    },
    {
      "Keywords": "Optometry",
      "Response": "Please Visit Below Link to understand Optometry Course Handled by SASTRA.https://sastra.edu/admissions/undergraduate.html"
    },
    {
      "Keywords": "B.optom",
      "Response": "Please Visit Below Link to understand Optometry Course Handled by SASTRA.https://sastra.edu/admissions/undergraduate.html"
    },
    {
      "Keywords": "B.Com Programme",
      "Response": "Please Visit Below Link to understand B.Com Programs Handled by SASTRA.https://sastra.edu/admissions/undergraduate.html"
    },
    {
      "Keywords": "Bcom",
      "Response": "Please Visit Below Link to understand B.Com Programs Handled by SASTRA.https://sastra.edu/admissions/undergraduate.html"
    },
    {
      "Keywords": "Fine Arts",
      "Response": "Please Visit Below Link to understand Arts Programs Handled by SASTRA.https://sastra.edu/admissions/undergraduate.html"
    },
    {
      "Keywords": "Admission procedure",
      "Response": "Please Visit Below Link to understand the complete admission procedure at SASTRA  https://sastra.edu/admissions.html"
    },
    {
      "Keywords": "Student Web Interface",
      "Response": "Please visit https://webstream.sastra.edu/sastrapwi/"
    },
    {
      "Keywords": "SWI",
      "Response": "Please visit https://webstream.sastra.edu/sastrapwi/"
    },
    {
      "Keywords": "undergraduate",
      "Response": "Please visit this link to understand about the UG Programs https://sastra.edu/admissions/undergraduate.html"
    },
    {
      "Keywords": "UG",
      "Response": "Please visit this link to understand about the UG Programs https://sastra.edu/admissions/undergraduate.html"
    },
    {
      "Keywords": "postgraduate",
      "Response": "Please visit this link to understand about the PG Programs https://sastra.edu/admissions/postgraduate.html"
    },
    {
      "Keywords": "PG",
      "Response": "Please visit this link to understand about the PG Programs https://sastra.edu/admissions/postgraduate.html"
    },
    {
      "Keywords": "Quota",
      "Response": "Please reach out to our Admission Team 04362 264101-108"
    },
    {
      "Keywords": "NRI",
      "Response": "Please reach out to our Admission Team 04362 264101-108"
    },
    {
      "Keywords": "Kumbakonam campus",
      "Response": "Please visit https://src.sastra.edu/"
    },
    {
      "Keywords": "kumbakonam campus",
      "Response": "Please visit https://src.sastra.edu/"
    },
    {
      "Keywords": "tanjore",
      "Response": "Please Visit https://sastra.edu/"
    },
    {
      "Keywords": "fee",
      "Response": "Please visit below site to understand the Fee structure for various Courses https://sastra.edu/admissions/tuition-fees/fee-structure.html"
    },
    {
      "Keywords": "fees",
      "Response": "Please visit below site to understand the Fee structure for various Courses https://sastra.edu/admissions/tuition-fees/fee-structure.html"
    },
    {
      "Keywords": "btech fees",
      "Response": "https://sastra.edu/admissions/tuition-fees/b-tech-m-tech-5-yrs-integrated-programmes.html"
    },
    {
      "Keywords": "refund",
      "Response": "Please reach out to our Admission Team 04362 264101-108"
    },
    {
      "Keywords": "Hostel",
      "Response": "There are 9 boys' hostel and 6 girls' hostels providing accommodation to over 4000 boys and 2400 girls."
    },
    {
      "Keywords": "Hostel fee",
      "Response": "Please Visit https://sastra.edu/admissions/hostel-fees.html"
    },
    {
      "Keywords": "is phone allowed in sastra hostel",
      "Response": "Yes, you can use phone in Sastra university but you can't use phone inside your class rooms"
    },
    {
      "Keywords": "Does Sastra have uniform?",
      "Response": "There is no uniform at SASTRA UNIVERSITY"
    },
    {
      "Keywords": "Placement",
      "Response": "Sastra has been ranked among the top engineering colleges in India as it has good infrastructure, placements and faculty"
    }
  ]
   
   
   
  
   
   const map1 = new Map();
   for(let i=0;i<data.length;i++)
   {
     map1.set(data[i]["Keywords"],data[i]["Response"])
   }
   /*
map1.set('first', "Hello, I'm Sastra's helping bot! How can I help you");
map1.set('admission', "Stream 1 – JEE-Main Score & Class XII Score : ,br.Admission to 50% of seats shall be based on normalised aggregate Class XII Scores and available JEE Main (2020/2021) scores taken together with 50% weightage each. Seats shall be filled based on the Ranks Secured by student");
map1.set('bus',"There are bus facilities from Trichy and Tanjore.");
map1.set('hostel',"There are nine hostels for boys and five for girls. First year B. Tech. students will be provided shared accommodation.");
map1.set( 'academics', "SASTRA follows choice-based credit system, where students are free to choose their courses and faculty");
*/
if(INDEX == 1){
  str += "Hello I'm bot";
}
else if(type == 'user'){
  msg = msg.toLowerCase();
  var flag = 1;
  /*
  for (const [key, value] of map1) {
    if(msg.includes(key)){
      str += value;
      flag = 0;
      break;
    }
  }*/
  for(let i = 0; i < data.length; i++){
    if(msg.includes(data[i]["Keywords"].toLowerCase())){
      str += data[i]["Response"];
      flag = 0;
      break;
    }
  }
  if(flag){
    str += "Sorry! Can't find your query. Try with someother keyboard."
  }
}

 /*   if(type == 'user'){
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
    */
    
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
  /*
  fetch('Data.txt')
  .then(response => response.text())
  .then(text => console.log(text))
  */
  $.ajax({
    url: 'data.txt',
    dataType: 'text',
  }).done(successFunction);
  function successFunction(data) {
    var allRows = data.split(/\r?\n|\r/);
    console.log(allRows);
  }

}
)