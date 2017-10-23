<template>
    <div>
        <main class="main">
            <div class="main-comment">
                <p>{{message}}</p>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, numquam."
            }
        }
    }
</script>

<style lang="sass">

.main
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  background: url('../assets/images/book3.jpg') no-repeat
  background-size: cover
  .main-comment 
    position: absolute
    font-size: 20px
    color: rgb(28.8%, 49.8%, 64.8%)

</style>