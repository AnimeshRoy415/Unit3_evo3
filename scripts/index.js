// Store the wallet amount to your local storage with key "amount"

let totalamount= JSON.parse(localStorage.getItem("amount")) || 0

let W= document.getElementById("wallet").innerText=totalamount
let Balance;
// console.log(totalamount)
function addmoney(){
    let money= document.getElementById("amount").value

    // console.log(money)
    Balance= Number(money)+ Number(totalamount)
   
    localStorage.setItem("amount",JSON.stringify(Balance) )
location.reload()
}
