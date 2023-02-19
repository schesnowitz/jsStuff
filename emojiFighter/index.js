

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let emoj1 = Math.floor( Math.random() * fighters.length)
    let emoj2 = Math.floor( Math.random() * fighters.length)
    console.log(emoj1)
    stageEl.textContent = (`${fighters[emoj1]} vs ${fighters[emoj2]}`); 


})

