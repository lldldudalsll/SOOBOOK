<template>
    <div class="header-wrap">
        <header class="header">
          <h1 class="logo">
            <router-link to="/" active-class="current-page" exact>
                <img src="../../assets/images/mainlogo.png" alt="SOO BOOK" width="200px" height="40px">
            </router-link>
          </h1>

          <div class="login">
            <form>
                <div class="user-login">
                    <label for="user-id"></label>
                    <input type="email" id="user-id" required placeholder="ID: guest@gmail.com">
                
                    <label for="user-pw"></label>
                    <input type="password" id="user-pw" required placeholder="PW: 8자리 이상">
                    <button type="button" class="login-btn" @click="clickedLoginButton">로그인</button>
                </div>
            </form>
            <div class="create-account">
              <router-link to="/signup" class="sign-up-anchor">회원가입</router-link>
            </div>

          </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        clickedLoginButton(){
          var username = document.querySelector('#user-id').value;
          var password = document.querySelector('#user-pw').value;
          var user_data = {
              username: username,
              password: password,
          };
        // 버튼 클릭시 로그인 함수 실행
        this.Login(user_data);
        },
        Login(user_data){
            console.log(user_data);
            // debugger;
            // ajax를 이용하여 SOOBOOK API 가져오기  
            $.ajax({
                url: "https://soobook.devlim.net/api/user/login/",
                type: 'POST',
                dataType: "json",
                data: user_data
            })
            .done(function(response) {
                console.log('done', response);

                // tokenKey 저장
                var tokenKey = response.key;

                // nickname setting
                // var user_id = response.user.username;
                var user_nickname = response.user.nickname;
                console.log(user_nickname);
                
                // Cookie setting
                setCookie('SoobookToken', tokenKey, 90);
                
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
                
                localStorage.setItem("key", response.key);
                // location.href = "/mypage"
            })
            .fail(function(error) {
                console.log('fail', error.message);
            });
        },
        // setKey(response){
        //     localStorage.setItem(response)
        // }
    }
}
</script>

<style lang="sass">
@import "../../sass/header"
</style>