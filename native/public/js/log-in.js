// input value값을 user_input 객체로 저장
$('.btn-login').click(function(){
    var username = document.querySelector('#user-id').value;
    var password = document.querySelector('#user-pw').value;
    var user_input = {
        username: username,
        password: password,
    };
    // console.log(user_input);
    // 버튼 클릭시 로그인 함수 실행
    clickedLoginButton(user_input);
});

(function (global, $){
    'use strict';
    // 저장된 객체값 받아오기
    function clickedLoginButton(user_data) {
        console.log(user_data);
        // jQuery ajax를 이용하여 SOOBOOK API 가져오기  
        $.ajax({
            url: "https://soobook.devlim.net/api/user/login/",
            type: 'POST',
            dataType: "json",
            data: user_data
        })
        .done(function(response) {
            console.log(response);
            var tokenKey = response.key;
            setCookie('SoobookToken', tokenKey, 90);
            location.href = "../my-page.html";
        })
        .fail(function(response) {
            console.log(response);
        });
    }
    // IFEE 패턴이므로 전역에 공개
    global.clickedLoginButton = clickedLoginButton;

})(window, window.jQuery)

  
// Cookie setting
function setCookie(name, value, expireDays) {
  var exdate=new Date();
  exdate.setDate(exdate.getDate() + expireDays);
  var c_value=escape(value) + ((expireDays==null) ? "" : "; expires="+exdate.toUTCString());
  document.cookie=name + "=" + c_value;
}

function getCookie(c_name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++) {
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");

	  if (x==c_name) {
			return unescape(y);
		}
	}
}


// native code 를 이용한 GET 방식으로 내 DB에 저장된 data 불러오기

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function confirmState() {
// //   console.log(this.readyState, this.status);
//   if(this.readyState == 4){
//     var data = JSON.parse(this.response);
//         console.log(data);
//     window.data = data;
//   }
// };

// xhr.open("GET", "../DB/member.json")
// xhr.send();

// function clickedButton() {
//   var login_btn = document.querySelector('.btn-login');
//   login_btn.onclick = getInfo;
  
// }

// function getInfo() {
//   var user_id = document.getElementById("user-id").value;
//   var user_pw = document.getElementById("user-pw").value;
  
//   for(i = 0; i < data.memberlist.length; i++){
    
//     var user_id_list = data.memberlist[i].userid;
//     var user_pw_list = data.memberlist[i].userpassword;

//     if( user_id === user_id_list && user_pw === user_pw_list ){
//       console.log("Log-in Success");
      
//       return;
//     } else {
//       console.log('Log-in Fail');
//     }
//   };
// };

// clickedButton();
