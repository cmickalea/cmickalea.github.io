const search = "https://poetrydb.org/title/"
const searchButton = $('.search-by-book-title__submit')

$(searchButton).on('click', function(event){
    event.preventDefault()
    let userSearchRequest = $('.search-by-book-title__input').val()
    searchForPoem = userSearchRequest
    fetch(`${search}${searchForPoem}`)
    .then(res => res.json)
    .then(data => console.log(data))
})

