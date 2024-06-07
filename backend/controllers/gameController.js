const rollDice = (req, res) => {
    const { betAmount, betType } = req.body;

    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const total = dice1 + dice2;
         

    let winAmount = 0;

    if ((betType === '7up' && total > 7) || (betType === '7down' && total < 7)) {
        winAmount += betAmount * 2;
    } else if (betType === 'seven' && total === 7) {
        winAmount = betAmount * 5;
    } else {
        winAmount -= betAmount;
    }

    const result = {
        dice1,
        dice2,
        total,
        winAmount
    };

    res.json(result);
};

module.exports = {
    rollDice
};

