<template>
    <div>
        <div class="visual">
            <h2 class="book-find-area">{{msg}}</h2>
            <router-link to="/search" class="nav-book">{{boxMsg}}</router-link> 
        </div>

        <div class="view-option-control">
            <div class="view-option">
                <select name="view-select" id="view-select">
                    <option selected>정렬</option>
                    <option value="등록순 보기">등록순 보기</option>
                    <option value="별점순 보기">별점순 보기</option>
                </select>    
                <button class="view-option-btn" @click="clicklistview"><i class="fa fa-th fa-2x" aria-hidden="true"></i></button>
                <button class="view-option-btn" @click="clickdetailview"><i class="fa fa-th-list fa-2x" aria-hidden="true"></i></button>
            </div>
            <div class="search-mybook">
                <label for="search-my-bookshelf" class="search-book">책장 내 검색</label>
                <input type="text" id="search-my-bookshelf" placeholder="도서명을 입력해 주세요">
            </div>
        </div>

        <nav class="menu-colorlist" aria-label="select color list">
          <ul>
            <li><a href="#" class="menu-colorlist__item--purple color-option" role="button" title="purple" aria-label="purple background"></a></li>
            <li><a href="#" class="menu-colorlist__item--pink-sky color-option" role="button" title="pink-sky" aria-label="pink-sky backgound"></a></li>
            <li><a href="#" class="menu-colorlist__item--pink-green color-option" role="button" title="pink-green" aria-label="pink-green background"></a></li>
            <li><a href="#" class="menu-colorlist__item--grey color-option" role="button" title="grey" aria-label="grey background"></a></li>
            <li><a href="#" class="menu-colorlist__item--blue color-option" role="button" title="blue" aria-label="blue background"></a></li>
          </ul>
        </nav>

    
        <main class="my-bookshelf" v-if="is_visible">
            <ul class="book-list" v-for="book in books">
                <li>
                    <div class="img-box">
                        <img :src="book.src" alt="" width="152px" height="190px" class="book-list-img">
                    </div>
                    <div class="book-info">
                        <h3 class="title">{{book.title}}</h3>
                        <p class="author">{{book.author}}</p>
                        <div class="line"></div>
                    </div>
                    <div class="ratingControl">
                        <input type="radio" name="rating" value="5">
                        <label class="ratingControl-stars ratingControl-stars--5" for="rating-5">5</label>
                        <input type="radio" name="rating" value="4.5">
                        <label class="ratingControl-stars ratingControl-stars--45 ratingControl-stars--half" for="rating-45">45</label>
                        <input type="radio" name="rating" value="4">
                        <label class="ratingControl-stars ratingControl-stars--4" for="rating-4">4</label>
                        <input type="radio" name="rating" value="3.5">
                        <label class="ratingControl-stars ratingControl-stars--35 ratingControl-stars--half" for="rating-35">35</label>
                        <input type="radio" name="rating" value="3">
                        <label class="ratingControl-stars ratingControl-stars--3" for="rating-3">3</label>
                        <input type="radio" name="rating" value="2.5">
                        <label class="ratingControl-stars ratingControl-stars--25 ratingControl-stars--half" for="rating-25">25</label>
                        <input type="radio" name="rating" value="2">
                        <label class="ratingControl-stars ratingControl-stars--2" for="rating-2">2</label>
                        <input type="radio" name="rating" value="1.5">
                        <label class="ratingControl-stars ratingControl-stars--15 ratingControl-stars--half" for="rating-15">15</label>
                        <input type="radio" name="rating" value="1">
                        <label class="ratingControl-stars ratingControl-stars--1" for="rating-1">1</label>
                        <input type="radio" name="rating" value="0.5">
                        <label class="ratingControl-stars ratingControl-stars--05 ratingControl-stars--half" for="rating-05">05</label>
                    </div>
                    <div class="delete-field">
                        
                    </div>
                </li>
            </ul>
        </main>

        <main class="my-bookshelf" v-if="!is_visible">
            <ul class="book-detail" v-for="book in books">
                <li class="detail">
                    <img :src="book.src" alt="" width="130px" height="190px" class="book-list-img detail-img">
                    <div class="detail-comment">
                        <h3 class="title">{{book.title}}</h3>
                        <p class="author">{{book.author}}</p>
                        <div class="ratingControl">
                            <input type="radio" id="rating-5" name="rating" value="5">
                            <label class="ratingControl-stars ratingControl-stars--5" for="rating-5">5</label>
                            <input type="radio" id="rating-45" name="rating" value="4.5">
                            <label class="ratingControl-stars ratingControl-stars--45 ratingControl-stars--half" for="rating-45">45</label>
                            <input type="radio" id="rating-4" name="rating" value="4">
                            <label class="ratingControl-stars ratingControl-stars--4" for="rating-4">4</label>
                            <input type="radio" id="rating-35" name="rating" value="3.5">
                            <label class="ratingControl-stars ratingControl-stars--35 ratingControl-stars--half" for="rating-35">35</label>
                            <input type="radio" id="rating-3" name="rating" value="3">
                            <label class="ratingControl-stars ratingControl-stars--3" for="rating-3">3</label>
                            <input type="radio" id="rating-25" name="rating" value="2.5">
                            <label class="ratingControl-stars ratingControl-stars--25 ratingControl-stars--half" for="rating-25">25</label>
                            <input type="radio" id="rating-2" name="rating" value="2">
                            <label class="ratingControl-stars ratingControl-stars--2" for="rating-2">2</label>
                            <input type="radio" id="rating-15" name="rating" value="1.5">
                            <label class="ratingControl-stars ratingControl-stars--15 ratingControl-stars--half" for="rating-15">15</label>
                            <input type="radio" id="rating-1" name="rating" value="1">
                            <label class="ratingControl-stars ratingControl-stars--1" for="rating-1">1</label>
                            <input type="radio" id="rating-05" name="rating" value="0.5">
                            <label class="ratingControl-stars ratingControl-stars--05 ratingControl-stars--half" for="rating-05">05</label>
                        </div>    
                        <p class="review">{{book.review}}</p>
                    </div>
                </li>
            </ul> 
        </main>
    </div>
</template>

<script>
    export default {
        data(my_bookshelf) {
            return {
                is_visible: true,
                books: my_bookshelf,
                msg: "책을 검색 합니다.",
                boxMsg: "검색"
            }
        },
        methods: {
                clicklistview: function(){
                    this.is_visible = true;
                },
                clickdetailview: function(){
                    this.is_visible = false
                }
            }
    }
</script>

<style>
@import url(http://fonts.googleapis.com/css?family=Francois+One);
@import url(http://fonts.googleapis.com/css?family=PT+Sans);

.visual {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 160px;
  background-image: url(../assets/images/cta-header.jpg);
}

.book-find-area {
  font-size: 26px;
  font-weight: 200;
  margin-bottom: 20px;
  color: #fff;
}
.nav-book {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 3px;
  background: linear-gradient(#0096ff, #005dff);
  width: 138px;
  height: 38px;
  text-align: center;
  text-decoration: none;
}
.nav-book:hover {
  background: linear-gradient(#008aea, #024dcf);
}

/* --- view option --- */

.view-option-control {
  margin: 50px 0 0 90px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
select{
  width: 100px;
  height: 30px;
  border: 1px solid #d7d0d0;
}
.view-option-btn{
  vertical-align: middle;
  cursor: pointer;
  border: none;
  background: none;
  /*padding-left: 15px;*/
  /*width: 30px;*/
  /*height: 30px;*/
}
.search-mybook {
  padding-right: 95px;
}
label {
  font-size: 15px;
  padding-right: 5px;
}

input {
  border-style: none;
  border-radius: 3px;
  border: 1px solid #d7d0d0;
  height: 20px;
}



/* ----- nav color -----*/


ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-colorlist {
  cursor: pointer;
  border-radius: 0 6px 6px 0;
  box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.25);
  background: #fff;
  position: absolute;
  display: inline-flex;
  padding: 0.3em 1.5em 0.3em 0.3em;
  transform: translateX(-90%);
  transition: all 0.3s ease-out;
}

.menu-colorlist:hover {
  transform: translateX(0);
}

.menu-colorlist::after {
  position: absolute;
  top: 50%;
  right: 4px;
  content: '▶';
  color: #e7e7e7;
  transform: translateY(-50%);
}

.menu-colorlist ul {
  display: flex;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}

.menu-colorlist li {
  margin-left: 7px;
  margin-right: 7px;
}

.menu-colorlist a {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.menu-colorlist__item--purple {
  background: linear-gradient(to top, #aaa4ec 0%, #aaa4ec 10%, #fff 100%);
}

.menu-colorlist__item--pink-sky {
  background: linear-gradient(120deg, #e3bfce 0%, #8fd3f4 100%);
}

.menu-colorlist__item--pink-green {
  background: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
}

.menu-colorlist__item--grey {
  background: linear-gradient(to top, #ebebeb 0%, #dcdddf 52%, #c4c5c7 100%);
}

.menu-colorlist__item--blue {
  background: linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%);
}



/* -----   main list   ----- */


.my-bookshelf {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  /*align-items: center;*/
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 180px;
  width: 100%;
  /*height: */
  background: #f9f9f9;
  border-top: 1px solid #d7d0d0;
  /*border-radius: 10px;*/
  /*box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);*/
}

.book-list {
  /*margin: 30px 0 30px 30px;*/
  display: flex;
  flex-flow: column wrap;
  /*justify-content: center;*/
  /*align-items: top;*/
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  margin: 50px 22px;
  position: relative;
  width: 202px;
}
.book-list:hover {
  transform: translateY(-5px);
  transition: 0.5s ease-in
}
.img-box {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  background: #ececec
}
.book-list-img {
  align-items: center;
}

.book-info {
  margin: 0 25px;
}

h3 {
  margin: 0;
  margin-top: 10px;
  height: 23px;
}
.title {
  font-size: 13px;
  text-align: center;
  padding-bottom: 2px;
}
.author {
  margin-bottom: 11px; 
  font-size: 13px;
  text-align: center;
}
.line {
  border-top: 1px solid #e2e2e2;
  margin-bottom: 10px;
}
.delete-field {
  height: 25px;
  background: #ececec;
}

/* -----   main detail  ----- */

.book-detail{
  margin: 30px 0 30px 30px;
  width: 20%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

.detail {
  margin-left: 10px;
  display: inline-flex;
}

.detail-img {
  float: left;
}
.detail-comment {
  margin-left: 10px;
  float: right;
}


/* -----   star rating   ----- */

.ratingControl {
  position: relative;
  width: 120px;
  height: 30px;
  user-select: none;
  margin: 0 auto;
  margin-top: 5px;
}
label {
  padding: 0;
}
.ratingControl input {
  visibility: hidden;
  width: 10px;
}

.ratingControl-stars {
  position: absolute;
  top: 0;
  width: 30px;
  height: 30px;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20width%3D%2215px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2015%2014%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3EEmpty%20Star%3C%2Ftitle%3E%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Order-Details---Order-final---Not-reviewed%22%20transform%3D%22translate%28-108.000000%2C%20-385.000000%29%22%20fill%3D%22%23D5D5D5%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate%28108.000000%2C%20316.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%280.000000%2C%2069.000000%29%22%20id%3D%22Star-7%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%227.5%2011.25%203.09161061%2013.5676275%203.93353806%208.65881373%200.367076128%205.18237254%205.2958053%204.46618627%207.5%200%209.7041947%204.46618627%2014.6329239%205.18237254%2011.0664619%208.65881373%2011.9083894%2013.5676275%20%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E");
  background-size: auto 20px;
  background-repeat: no-repeat;
  cursor: pointer;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}

.ratingControl-stars:hover,
.ratingControl-stars:hover ~ .ratingControl-stars,
input:checked ~ .ratingControl-stars {
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20width%3D%2215px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2015%2014%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3ESolid%20Star%3C%2Ftitle%3E%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Order-Details---Order-final---Not-reviewed%22%20transform%3D%22translate%28-108.000000%2C%20-385.000000%29%22%20fill%3D%22%23FEC844%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate%28108.000000%2C%20316.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%280.000000%2C%2069.000000%29%22%20id%3D%22Star-7%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%227.5%2011.25%203.09161061%2013.5676275%203.93353806%208.65881373%200.367076128%205.18237254%205.2958053%204.46618627%207.5%200%209.7041947%204.46618627%2014.6329239%205.18237254%2011.0664619%208.65881373%2011.9083894%2013.5676275%20%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E");
}

.ratingControl-stars:active,
.ratingControl-stars:active ~ .ratingControl-stars,
input:checked ~ .ratingControl-stars:active {
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20width%3D%2215px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2015%2014%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3ESolid%20Star%20%E2%80%93%20Light%3C%2Ftitle%3E%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Order-Details---Order-final---Not-reviewed%22%20transform%3D%22translate%28-108.000000%2C%20-385.000000%29%22%20fill%3D%22%23FFE39C%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate%28108.000000%2C%20316.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%280.000000%2C%2069.000000%29%22%20id%3D%22Star-7%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%227.5%2011.25%203.09161061%2013.5676275%203.93353806%208.65881373%200.367076128%205.18237254%205.2958053%204.46618627%207.5%200%209.7041947%204.46618627%2014.6329239%205.18237254%2011.0664619%208.65881373%2011.9083894%2013.5676275%20%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E");
}

.ratingControl-stars--05 {
  left: 0px;
}

.ratingControl-stars--1 {
  left: 0px;
}

.ratingControl-stars--15 {
  left: 25px;
}

.ratingControl-stars--2 {
  left: 25px;
}

.ratingControl-stars--25 {
  left: 50px;
}

.ratingControl-stars--3 {
  left: 50px;
}

.ratingControl-stars--35 {
  left: 75px;
}

.ratingControl-stars--4 {
  left: 75px;
}

.ratingControl-stars--45 {
  left: 100px;
}

.ratingControl-stars--5 {
  left: 100px;
}

.ratingControl-stars--half {
  width: 11px;
}
</style>