var signup_btn = document.querySelector('.btn-create-account')
    // console.log(signup_btn);

function clickedSignupButton(){

    signup_btn.onclick = function() {
        var vm = new Vue ({
            el: '#sign-up',
            components: {
                "sign-up-modal": {
                    template: `
                        <div v-if="is_visible" class="modal is-active">
                            <div class="modal-background" @click="closeModal"></div>
                            <div class="modal-content">
                                <div class="box">
                                    <input type="email" class="box__input-id" required placeholder="이메일을 입력하세요">
                                    <input type="text" class="box__input-pw" required placeholder="비밀번호를 입력하세요">
                                    <input type="text" class="box__input-nickname" required placeholder="닉네임을 입력하세요">
                                    <button type="submit" class="sign-up-btn">회원가입</button>
                                    <button class="modal-close" @click="closeModal">X</button>
                                </div>
                            </div>
                        </div>
                        `,
            data: function(){
                return {
                    is_visible: true
                }
            },
            destroyed: function(){
                console.log('aaa');
            },
            methods: {
                closeModal: function(){
                    this.is_visible = false
                },
            }
        }
    }
})
    }
}

