// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let Wallet= JSON.parse(localStorage.getItem("amount"))
// console.log(Wallet)

let nav= document.getElementById("wallet").innerText= Wallet



async function searchmovies(){
    let inpt= document.getElementById("search").value

    // console.log(inpt)

    try{

        let res= await fetch(`http://www.omdbapi.com/?s=${inpt}&apikey=f54b6129`)

        let {Search} = await res.json()
        // console.log(Search)
        // return data.Search
        appendmovies(Search)
    }
    catch(err){
        console.log(err)
    }

}

function appendmovies(data){

    console.log(data)
    let moviediv= document.getElementById("movies")

    data.forEach(function(data){

        let div= document.createElement("div")

        let image= document.createElement("img")
        image.src= data.Poster
        let title= document.createElement("h4")
        title.innerText=data.Title
        let book= document.createElement("button")
        book.innerText= "book now"
        book.setAttribute("class", "book_now")

        div.append(image,title,book)

        book.addEventListener("click", function(){
            bookshow(data)
        })

        moviediv.append(div)
    })
}

function bookshow(data){
    // console.log(data)

    localStorage.setItem("movie", JSON.stringify(data))

    window.location.href= "checkout.html"
}



async function main(){
    let data= await searchmovies()

    if(data=== undefined){
        return false;
    }

    appendmovies(data)
}
let time;
function debounc(main,delay){

    if(time){
        clearTimeout(time)
    }
    time= setTimeout(function(){
        main()
    },delay)
}


