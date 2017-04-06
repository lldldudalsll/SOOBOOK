function clickStar() {
    var star = document.querySelectorAll('span');
    console.log(star);

    for (var i=0; i<star.length; i++) {
        // var beforestar = document.querySelector('span:before')
        // console.log(beforestar);
        star[i].onclick = function() {
            console.log('clicked');
            console.log(this);
            var hoverstar = document.querySelector('span:hover');
            console.log(hoverstar);
            var beforestar = document.querySelector('::before');
            console.log(beforestar);
            hoverstar.style.cssText = "color : gold";
            
        }
    }
}
clickStar();

var vm = new Vue ({
    el: '#app',
    data: {
        is_visible: true,
        books: my-bookshelf
    },
    methods: {
        clicklistview: function(){
            this.is_visible = true;
        },
        clickdetailview: function(){
            this.is_visible = false
        }
    }
})