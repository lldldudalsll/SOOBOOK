<template>
    <div class="header-wrap">
        <header class="header">
          <h1 class="logo">
            <router-link to="/" active-class="current-page" exact>
                <img src="../../assets/images/mainlogo.png" alt="SOO BOOK" width="200px" height="40px">
            </router-link>
          </h1>

          <div class="logged">
            <span class="nickname-area">{{msg}}</span>
            <router-link to="/" class="log-out">로그아웃</router-link>
          </div>
        </header>
    </div>

</template>

<script>
export default {
    data() {
        return {
            msg: "nickname"
        }
    }
}
</script>

<style lang="sass">
@import "../../sass/header"

</style>