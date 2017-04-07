
// Select Background
// DOM API, CSS 선택자 중에 클래스 선택자로 대상을 선택
var color_list       = document.querySelector('.menu-colorlist')
var bg_color         = document.body;
var color_list_items = color_list.querySelectorAll('.color-option');
// console.log(color_list_items);
// 배경 색상 변경
for (var i = 0; i < color_list_items.length; i++) {
    color_list_items[i].onclick = function() {
    var my_color = window.getComputedStyle(this,null).background;
    // console.log(my_color);
    bg_color.style.background = my_color;
    return false;
    };
};


var lable = document.querySelectorAll('label');
var input = document.querySelectorAll('input');
var rating = document.querySelectorAll('#rating')
console.log(rating);
// console.log(lable);
// Star Rating
// var function () {}
input.onclick = function () {
    var a = $("input").prop("checked").value;
    console.log(a);
}











// function starRating() {
//     var star = document.querySelectorAll('span');
//     console.log(star);
//     star.setAttribute('class', 'aaa');
//     // console.log(stara);
//     for (var i=0; i<star.length; i++) {
//         // var beforestar = document.querySelector('span:before')
//         // console.log(beforestar);
//         star[i].onclick = function() {
//             // console.log('clicked');
//             // console.log(this);
//             var hoverstar = document.querySelector('span:hover');
//             console.log(hoverstar);
//             hoverstar.style.cssText = "color : gold";
            
//         }
//     }
// }
// starRating();


// if () {
//     switch () {
//         case '1':
//             hoverstar.style.cssText = "color : gold";
//             break;
//         case '2':
//             hoverstar.style.cssText = "color : gold";
//             break;
//         case '3':
//             hoverstar.style.cssText = "color : gold";
//             break;
//         case '4':
//             hoverstar.style.cssText = "color : gold";
//             break;
//         case '5':
//             hoverstar.style.cssText = "color : gold";
//             break;
//         default:
//             hoverstar.style.cssText = "color : none";
//             break;
//     }
// }