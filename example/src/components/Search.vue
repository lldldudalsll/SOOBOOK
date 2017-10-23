<template>
    <div>
        <div class="visual">
            <h2 class="book-find-area">{{msg}}</h2>
            <router-link to="/mypage" class="nav-book">{{boxMsg}}</router-link> 
        </div>
        <main class="added__book">
            <h1>Book Finder</h1>
            <input v-model="search" type="text" class="added__book--input" placeholder="Title or Author">
            <button type="submit" class="added__book--btn" @click="bookSearch">Search</button>
            <div class="results">
                <div v-for="post in posts" class="result-list">
                    <img :src="post.cover_thumbnail" :alt="post.title">
                    <div class="results-info">
                      <h3 class="title">{{post.title | cropTitle}}</h3>
                      <p class="author">{{post.author}}</p>
                    </div>  
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search:'',
            posts: [],
            msg: "책을 저장 합니다.",
            boxMsg: "저장"
        }
    },
    filters: {
        cropTitle(value) {
            if (value.length < 7) {
                return value;
            } else {
                return value.substr(0, 7) + '...';
            }
        }
    },
    methods: {
        bookSearch(){
            var _this = this;
            var search = this.search;
            // var search = document.querySelector('.added__book--input').value
            // var results= document.querySelector('.results');
            // document.querySelector('.results').innerHTML = "";
            // console.log(search);
            
            $.ajax({
                url: "https://soobook.devlim.net/api/book/search/?keyword=" + search,
                dataType: "json",
            
                success: function(data) {
                    console.log(data);
                    _this.search = '';
                    _this.posts = data.results;
                },
            });
        }
    }
}
</script>

<style lang="sass">
@import "../sass/visual"

.added__book
    margin-top: 30px
    display: flex
    justify-content: component
    align-items: center
    flex-flow: column wrap
    .added__book--input
        width: 200px
        height: 30px
        text-align: center
        border: 1px solid #181818
    .added__book--btn
        margin-top: 10px
        width: 50px
        height: 30px

.results
    display: flex
    flex-flow: row wrap


</style>