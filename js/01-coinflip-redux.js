
let coinFlip;
let flips = parseInt(prompt("How many times would you like to flip the coin?"));
for (let i = 0; i < flips; i++) {
    coinFlip = Math.floor(Math.random() * 2);
    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}