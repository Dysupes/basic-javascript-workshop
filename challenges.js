function fortuneTeller(fortune){
    var predictions = [
        "You're going to die a horrible death tomorrow!",
        "You're about to hit the jackpot!",
        "You're going to be a great parent! Surprise!",
        "You're magically going to be a master of Javascript!",
        "You will fall in love tomorrow!",
        "Aliens will land tomorrow! Prepare!",
        "You're about to lose your job!",
        "Your brain is about to explode!",
        "You will go to a Javascript boot camp!",
        "Your partner is cheating on you! Buy a camera!"
    ]
    
    if (fortune < 0.1) {
        console.log(predictions[0]);
    } else if ((fortune > 0.1) && (fortune < 0.2)) {
        console.log(predictions[1]);
    } else if ((fortune > 0.2) && (fortune < 0.3)) {
        console.log(predictions[2]);
    } else if ((fortune > 0.3) && (fortune < 0.4)) {
        console.log(predictions[3]);
    } else if ((fortune > 0.4) && (fortune < 0.5)) {
        console.log(predictions[4]);
    } else if ((fortune > 0.5) && (fortune < 0.6)) {
        console.log(predictions[5]);
    } else if ((fortune > 0.6) && (fortune < 0.7)) {
        console.log(predictions[6]);
    } else if ((fortune > 0.7) && (fortune < 0.8)) {
        console.log(predictions[7]);
    } else if ((fortune > 0.8) && (fortune < 0.9)) {
        console.log(predictions[8]);
    } else {
        console.log(predictions[9]);
    };
        
};

function fortune() {
    return Math.random(Math.floor());
};

console.log(fortuneTeller(fortune));