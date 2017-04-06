function bookSearch() {
    
    var search = document.querySelector('.added__book--input').value
    var results= document.querySelector('.results');
    document.querySelector('.results').innerHTML = "";
    // console.log(search);

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",

        success: function(data) {
            console.log(data);
            for ( i=0; i < data.items.length; i++){
                results.innerHTML += "<img src=" + data.items[i].volumeInfo.imageLinks.thumbnail + " >"
            }
        },

    });
}
document.querySelector('.added__book--btn').addEventListener('click', bookSearch, false);
document.querySelector('.added__book--input').addEventListener('keyup', keyboardAction);

function keyboardAction(e){
    var input;
    if ( e.type = "keyup" && e.keyCode == 13 ){
        input = this.value.trim();
        bookSearch();
    } else {
        return;
    }
    if ( !input ) {
        window.alert('도서명 또는 저자명을 입력해주세요');
        return;
    }
}