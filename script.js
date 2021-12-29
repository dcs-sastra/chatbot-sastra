const public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRETGA3nuSemCGKwmQolidwvshX14SZsq7mDXvOd8tYzPEfCcpq7Swjitpp6VX2jdp2pNk46BjHE1q1/pub?output=csv';
function init() {
  Papa.parse(public_spreadsheet_url, {
    download: true,
    header: true,
    complete: showInfo
  })
}

window.addEventListener('DOMContentLoaded', init)
let theData = 0;

function showInfo(results) {
  theData = results.data;
}

$(function () {
      let INDEX = 0;

      $("#chat-submit").click(function (e) {
    e.preventDefault();
        const msg = $("#chat-input").val();
        if (msg.trim() === '') {
      return false;
    }
    generate_message(msg, 'self');
        const buttons = [
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
    let str = "";
    str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
    str += "          <span class=\"msg-avatar\">";
    if (type === 'user') {
      str += "            <img src='Images/saslogo.png' alt='logo'>";
    }
    if (type === 'self') {
      str += "            <img src='Images/user.png' alt='user'>";
    }
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    if (type === 'self') {
      str += msg;
    }

    if (INDEX === 1) {
      str += "Hello! I'm Krish, How can I help you?";
    }
    else if (type === 'user') {
      msg = msg.toLowerCase();
      let results = [];
      let maxWordCount = 0;
      let maxWordKey;


      for (let i = 0; i < theData.length; i++) {
        if(theData[i]["Keywords"].toLowerCase().split(" ").every(r => msg.split(" ").includes(r))) {
          let tempStr = "";
          const hypLink = theData[i]["Response"].split(" ");
          for(let link = 0; link < hypLink.length; link++) {
            if(hypLink[link].startsWith("http")) {
              tempStr += "<a href=\"" + hypLink[link] +"\">Click here.<\/a>"
            }
            else{
              tempStr += hypLink[link] + " ";
            }
          }
          results.push({"keyword": theData[i]["Keywords"].toLowerCase(), "response": tempStr});
        }
      }
      if (results.length <= 0) {
        str += "Sorry! Can't find the result. Please try some other keyword."
      } else {
        results.forEach(result => {
          if(maxWordCount < result["keyword"].split(" ").length) {
            maxWordCount = Math.max(maxWordCount, result["keyword"].split(" ").length);
            maxWordKey = result["keyword"];
          }
        });
        results.forEach(result => {
          if(result["keyword"] === maxWordKey) {
            str += result["response"];
          }
        })
      }
    }

    str += "          <\/div>";
    str += "        <\/div>";

    if (msg === 'first' && INDEX === 1) {      // To display the welcome message
      $(".chat-logs").append(str);
    }
    else if (msg !== 'first' && INDEX > 1) {  // To avoid displaying the welcome message again
      $(".chat-logs").append(str);
    }

    $("#cm-msg-" + INDEX).hide().fadeIn(300);
    if (type === 'self') {
      $("#chat-input").val('');
    }
    let chatLogs = $(".chat-logs");
    chatLogs.stop().animate({ scrollTop: chatLogs[0].scrollHeight }, 1000);
  }


  $(document).delegate(".chat-btn", "click", function () {
    const value = $(this).attr("chat-value");
    const name = $(this).html();
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