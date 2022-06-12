let inputEl = document.getElementById("input-el")
let btn = document.getElementById("click-btn")
let span = document.getElementById("span-el")
let Errors = document.getElementById("error")
let letter = ["a","A","b","c","d","C","D","e","E","f","F","g","G","h","H","i","I","J","j","k","K","l","L","m",
"M","n","N","l","o","P","p","q","Q","r","R","s","S","T","t","u","U","v","V","r","W","w","x","X","y","Y","z","Z"
]
let symbol = ["!","@","#","$","%","&","(",")","+","=","/"]
let num = ""
let rletter = ""
let rsym = []

btn.addEventListener("click", function() {
     rletter = letter[Math.floor(Math.random()*52)]
     rsym = symbol[Math.floor(Math.random()*11)]

    if(inputEl.value < 6) {
        inputEl.value = ""
        span.textContent = ""
        Errors.textContent = "Minimum of 6 password/Maximun of 10"
        return false
    }else if (inputEl.value == 6) {
        inputEl.value = ""
        Errors.textContent = ""
        span.textContent = rsym + letter[random()] + letter[random()] + rletter + symbol[random()] + random()
    }else if (inputEl.value == 7) {
        inputEl.value = ""
        Errors.textContent = ""
        span.textContent = rsym + letter[random()] + letter[random()] + rletter + symbol[random()] + random() + random()
    }else if (inputEl.value == 8) {
        inputEl.value = ""
        Errors.textContent = ""
        span.textContent = rsym + letter[random()] + letter[random()] + rletter + symbol[random()] + random() + rletter + letter[random()]
    }else if (inputEl.value == 9) {
        inputEl.value = ""
        Errors.textContent = ""
        span.textContent = rsym + letter[random()] + letter[random()] + rletter + symbol[random()] + random() + rsym + letter[random()] + letter[random()] 
    }else if (inputEl.value == 10) {
        inputEl.value = ""
        Errors.textContent = ""
        span.textContent = rsym + letter[random()] + letter[random()] + rletter + symbol[random()] + random() + letter[random()] + rletter + symbol[random()] + random()
    }else{
        inputEl.value = ""
        Errors.textContent = "Minimum of 6 password/Maximun of 10"
        span.textContent = ""
        return false
    }
})
function random() {
     num = Math.floor(Math.random()*10)
     return num
}