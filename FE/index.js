let countEl = document.getElementById("count-el")
let count = 0

let saveEl = document.getElementById("save-el")


function increment() {
    count = count + 1
    countEl.textContent = count
}
function save(){
    let ctstr = count + " - "
    saveEl.textContent += ctstr
    countEl.textContent = 0
    count = 0
    
    //console.log(saveEl.innerText) 
}
function dec(){
    count = count - 1
    countEl.innerText  = count  
}   

// function zero()
// {
//     count = 0
// }