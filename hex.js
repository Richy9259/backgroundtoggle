let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D","E","F"];

let btn = document.getElementById("btn")
let color = document.querySelector(".color")

btn.addEventListener("click", function(){
    let hexColor = "#";
    for (let index = 0; index <6; index++) {
        hexColor += hex[getRandom()] 
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
    document.body.style.transition = "1s"
})

function getRandom(){
    return Math.floor(Math.random() *hex.length)
}