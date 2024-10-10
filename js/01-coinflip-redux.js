let coinFlip
for (i = 1; i <= 5; i++) {
    coinFlip = Math.round(Math.random())
        if (coinFlip >= 1) {
            console.log('Head')
        } else {
            console.log('Tails')
        }
}