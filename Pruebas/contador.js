let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count += 1
    countEl.textContent = count
}

function decrement(){
    if (count <= 0) {
        count.textContent = 0
    }

    else {
        count -= 1
        countEl.textContent = count
    }
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

