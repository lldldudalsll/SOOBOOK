<template>
    <div>
        <form class="sign-up">
            <label for="">아이디</label>
            <input type="text" class="userinfo user-id">
            <label for="">비밀번호</label>
            <input type="text" class="userinfo user-pw">
            <label for="">닉네임</label>
            <input type="text" class="userinfo user-nickname">
            <button type="button" class="sign-up-btn" @click="clickedSignUpButton">회원가입</button>
        </form>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
        
        }
    },
    methods: {
        // input value값을 user_data 객체로 저장
        clickedSignUpButton(){
            var new_id = document.querySelector('.user-id').value;
            var new_pw = document.querySelector('.user-pw').value;
            var new_nickname = document.querySelector('.user-nickname').value;
            var user_data = {
                username: new_id,
                password: new_pw,
                nickname: new_nickname,
            };
            // console.log(user_input);
            this.SignUp(user_data);
        },

        // 저장된 객체값 받아오기
        SignUp(user_data){
        	// jQuery ajax를 이용하여 SOOBOOK API 가져오기
        	$.ajax({
        	  url: 'https://soobook.devlim.net/api/user/signup/',
        	  type: 'POST',
        	  dataType: 'json',
        	  data: user_data
        	})
        	.done(function(response) {
        	  console.log(response);
        	})
        	.fail(function(response) {
        	  console.log(response);
        	});
        },
    }
}
</script>

<style lang="sass">
.sign-up
    margin-top: 100px
    display: flex
    flex-flow: column wrap
    justify-content: center
    align-items: center
    
.userinfo
    border: 1px solid #181818    
</style>