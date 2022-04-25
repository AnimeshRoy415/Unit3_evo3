// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let movies= JSON.parse(localStorage.getItem("movie"))

console.log(movies)

let movie_div= document.getElementById("movie")

let img= document.createElement("img")
img.src=movies.Poster
let title= document.createElement("h4")
title.innerText= movies.Title

// console.log(img,title)

movie_div.append(img,title)
let wallet= JSON.parse(localStorage.getItem("amount"))
// let wal= document.getElementById("wallet").innerText= wallet
let wal= document.getElementById("wallet").innerText= wallet

function bookalert(){

   
    // console.log(wallet)
    wallet= Number(wallet)
    let user_name= document.getElementById("user_name").value
    let number_of_seats= document.getElementById("number_of_seats").value

    let price= Number(number_of_seats)*100
    if(number_of_seats!="" && user_name!="" && wallet>=price){
        wallet= wallet-price
        alert("Booking successful!")
        localStorage.setItem("amount", wallet)
        location.reload()
    }
    if(wallet<price){
        alert("Insufficient Balance!")
    }
    if(number_of_seats=="" && user_name==""){
        alert("Please fill the div")
    }
}