let countries = ["Mexico", "Guatemala", "Cuba", "Dominican Republic", "Honduras", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Puerto Rico"]

let input = document.querySelector("#input")

let enter = document.querySelector("#enter")
let v = true
let costarica = document.querySelector("#costarica")
let cuba = document.querySelector("#cuba")
let elsalvadore = document.querySelector("#elsalvadore")
let guatemala = document.querySelector("#guatemala")
let honduras = document.querySelector("#honduras")
let mexico = document.querySelector("#mexico")
let nicaragua = document.querySelector("#nicaragua")
let pr = document.querySelector("#pr")
let dr = document.querySelector("#dr")

let all = document.querySelectorAll(".griditem")

let counter = document.querySelector("#counter")
let count = 0

counter.innerHTML = count + "/9"

input.addEventListener("change", store)

function store(event) {
    input = event.target.value
    // inn = input.toLowerCase()
}
countries = ["Mexico", "Guatemala", "Cuba", "Dominican Republic", "Honduras", "Nicaragua", "El Salvador", "Costa Rica", "Puerto Rico"]

enter.addEventListener("click", check)

function check() {
    for (let i = 0; i < countries.length; i++) {
        if (input == countries[i]) {
            if(input == "Mexico"){
                mexico.style.visibility = "visible"
                count+=1
                
            }else if(input == "Guatemala"){
                guatemala.style.visibility = "visible"
                count+=1
            }else if(input == "Cuba"){
                cuba.style.visibility = "visible"
                count+=1
            }else if(input == "Dominican Republic"){
                dr.style.visibility = "visible"
                count+=1
            }else if(input == "Honduras"){
                honduras.style.visibility = "visible"
                count+=1
            }else if(input == "Nicaragua"){
                nicaragua.style.visibility = "visible"
                count+=1
            }else if(input == "El Salvador"){
                elsalvadore.style.visibility = "visible"
                count+=1
            }else if(input == "Costa Rica"){
                costarica.style.visibility = "visible"
                count+=1
            }else if(input == "Puerto Rico"){
                pr.style.visibility = "visible"
                count+=1
            }
    }}
counter.innerHTML = count + "/9"
}
