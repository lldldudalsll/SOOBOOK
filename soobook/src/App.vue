<template>
  <div id="app">
    <div class="wrapper">
      <!-- Header -->
      <router-view name="header"></router-view>

      <!-- Router -->
      <router-view></router-view>

      <!-- Footer -->
      <footer>
        <p class="footer-comment">©copyright soobook fastcampus</p>
      </footer>
    </div>
  </div>
</template>

<script>
// import Header from './components/header/Header.vue';
export default {
  name: 'app',
  components:{
    // 'app-header': Header
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="sass">
@import "./sass/footer"
*
  margin: 0
  padding: 0
  box-sizing: border-box

.wrapper
  width: 100%
  margin: 0 auto

</style>
