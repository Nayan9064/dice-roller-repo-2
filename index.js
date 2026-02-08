function rollDice() {

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    let values = [];
    let images = [];

    for (let i = 0; i < numOfDice; i++) {
        let diceValue = Math.floor(Math.random() * 6) + 1;
        values.push(diceValue);
        images.push(`<img src="dice pic/${diceValue}.png" alt="dice ">`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}
