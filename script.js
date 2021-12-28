const public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRETGA3nuSemCGKwmQolidwvshX14SZsq7mDXvOd8tYzPEfCcpq7Swjitpp6VX2jdp2pNk46BjHE1q1/pub?output=csv';
function init() {
  Papa.parse(public_spreadsheet_url, {
    download: true,
    header: true,
    complete: showInfo
  })
}

window.addEventListener('DOMContentLoaded', init)
var theData = 0;
function showInfo(results) {
  const data = results.data;
  theData = data;
}

$(function () {
  var INDEX = 0;

  $("#chat-submit").click(function (e) {
    e.preventDefault();
    var msg = $("#chat-input").val();
    if (msg.trim() == '') {
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
    setTimeout(function () {
      generate_message(msg, 'user');
    }, 1000)

  })

  function generate_message(msg, type) {
    INDEX++;
    var str = "";
    str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
    str += "          <span class=\"msg-avatar\">";
    if (type == 'user') {
      str += "            <img src=\".\/Images\/saslogo.png\">";
    }
    if (type == 'self') {
      str += "            <img src=\".\/Images\/user.png\">";
    }
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    if (type == 'self') {
      str += msg;
    }

    if (INDEX == 1) {
      str += "Hello! I'm Krish, How can I help you?";
    }
    else if (type == 'user') {
      msg = msg.toLowerCase();
      var flag = 1;

      for (let i = 0; i < theData.length; i++) {
        if (msg.includes(theData[i]["Keywords"].toLowerCase())) {
          var hypLink = theData[i]["Response"].split(" ");
          for(let link = 0; link < hypLink.length; link++){
            if(hypLink[link].startsWith("http")){
              str += "<a href=\"" + hypLink[link] +"\">Click here.<\/a>"
            }
            else{
              str += hypLink[link] + " ";
            }
          }
          flag = 0;
          break;
        }
      }
      if (flag) {
        str += "Sorry! Can't find the result. Please try some other keyword."
      }
    }

    str += "          <\/div>";
    str += "        <\/div>";

    if (msg == 'first' && INDEX == 1) {      // To display the welcome message 
      $(".chat-logs").append(str);
    }
    else if (msg != 'first' && INDEX > 1) {  // To avoid displaying the welcome message again
      $(".chat-logs").append(str);
    }

    $("#cm-msg-" + INDEX).hide().fadeIn(300);
    if (type == 'self') {
      $("#chat-input").val('');
    }
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
  }


  $(document).delegate(".chat-btn", "click", function () {
    var value = $(this).attr("chat-value");
    var name = $(this).html();
    $("#chat-input").attr("disabled", false);
    generate_message(name, 'self');
  })

  $("#chat-circle").click(function () {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
    generate_message('first', 'user');
  })

  $(".chat-box-toggle").click(function () {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })

}
)